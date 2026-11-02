require("dotenv").config();
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

/* ===================== MODELS (same collections as the admin server) ===================== */
const { Schema, model } = mongoose;
const Project = model(
  "Project",
  new Schema(
    {
      title: String,
      category: String,
      url: String,
      demo: String,
      code: String,
      languages: [String],
      date: Date,
      order: Number,
      description: { uk: String, en: String },
      image: String,
      featured: Boolean,
    },
    { timestamps: true },
  ),
);
const Skill = model(
  "Skill",
  new Schema(
    {
      name: String,
      category: String,
      level: Number,
      icon: String,
      startedAt: Date,
    },
    { timestamps: true },
  ),
);
const Message = model(
  "Message",
  new Schema(
    {
      name: String,
      email: String,
      text: String,
      read: { type: Boolean, default: false },
    },
    { timestamps: true },
  ),
);
const Subscriber = model(
  "Subscriber",
  new Schema(
    {
      email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
      },
      source: { type: String, default: "site" },
    },
    { timestamps: true },
  ),
);

/* ===================== HELPERS ===================== */
const httpErr = (status, message) =>
  Object.assign(new Error(message), { status });
const wrap = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const str = (v, max) =>
  String(v ?? "")
    .trim()
    .slice(0, max);
const bucket = () =>
  new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
    bucketName: "images",
  });

/* ===================== APP ===================== */
const app = express();
app.set("trust proxy", 1);
// Swagger is mounted before helmet so its own scripts are not blocked by our CSP
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, { customSiteTitle: "Portfolio Site API" }),
);
app.use(
  helmet({
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        "default-src": ["'self'"],
        "script-src": ["'self'"],
        "style-src": [
          "'self'",
          "'unsafe-inline'",
          "https://fonts.googleapis.com",
        ],
        "font-src": ["'self'", "https://fonts.gstatic.com"],
        "img-src": ["'self'", "data:", "https:"],
        "connect-src": ["'self'"],
        "upgrade-insecure-requests": null,
      },
    },
    crossOriginResourcePolicy: { policy: "cross-origin" },
  }),
);
app.use(express.json({ limit: "20kb" }));

/* ---- public read-only API (the "code" link is never sent) ---- */
app.get(
  "/api/projects",
  wrap(async (req, res) => {
    res.set("Cache-Control", "public, max-age=30");
    res.json(
      await Project.find()
        .select(
          "title category url demo languages date order description image featured",
        )
        .sort({ order: 1, createdAt: -1 })
        .lean(),
    );
  }),
);
app.get(
  "/api/skills",
  wrap(async (req, res) => {
    res.set("Cache-Control", "public, max-age=30");
    res.json(
      await Skill.find()
        .select("name category level icon startedAt")
        .sort({ category: 1, level: -1 })
        .lean(),
    );
  }),
);

/* ---- images uploaded in the admin (GridFS) ---- */
app.get(
  "/api/images/:id",
  wrap(async (req, res) => {
    let id;
    try {
      id = new mongoose.Types.ObjectId(req.params.id);
    } catch {
      throw httpErr(404, "Not found");
    }
    const [file] = await bucket().find({ _id: id }).toArray();
    if (!file) throw httpErr(404, "Not found");
    res.set({
      "Content-Type": file.contentType,
      "Cache-Control": "public, max-age=31536000, immutable",
      "X-Content-Type-Options": "nosniff",
    });
    bucket()
      .openDownloadStream(id)
      .on("error", () => res.end())
      .pipe(res);
  }),
);

/* ---- contact form: saved to MongoDB, shows up in admin -> Messages (no email) ---- */
app.post(
  "/api/contact",
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: { message: "Too many messages, try again later" },
  }),
  wrap(async (req, res) => {
    if (req.body?.website) return res.json({ ok: true }); // honeypot: bots fill this hidden field
    const name = str(req.body?.name, 100),
      email = str(req.body?.email, 254).toLowerCase(),
      text = str(req.body?.text, 3000);
    if (!name || !text || !EMAIL_RE.test(email))
      throw httpErr(400, "Check the form");
    await Message.create({ name, email, text });
    res.status(201).json({ ok: true });
  }),
);

/* ---- newsletter subscription (admin -> Email tab uses these) ---- */
app.post(
  "/api/subscribe",
  rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 20,
    message: { message: "Too many attempts, try again later" },
  }),
  wrap(async (req, res) => {
    const email = str(req.body?.email, 254).toLowerCase();
    if (!EMAIL_RE.test(email)) throw httpErr(400, "Enter a valid email");
    const r = await Subscriber.updateOne(
      { email },
      { $setOnInsert: { source: "site" } },
      { upsert: true },
    );
    res.status(r.upsertedCount ? 201 : 200).json({ ok: true });
  }),
);

app.use("/api", (req, res) => res.status(404).json({ message: "Not found" }));
app.use(
  express.static(path.join(__dirname, "public"), { index: "index.html" }),
);
app.use((req, res) => res.status(404).type("text").send("Not found"));
app.use((err, req, res, next) => {
  let status = err.status || 500;
  if (["ValidationError", "CastError"].includes(err.name)) status = 400;
  if (status === 500) console.error(err);
  res
    .status(status)
    .json({ message: status === 500 ? "Server error" : err.message });
});

/* ===================== START ===================== */
(async () => {
  if (!process.env.MONGODB_URI)
    throw new Error("MONGODB_URI is not set in .env");
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("MongoDB connected:", mongoose.connection.name);
  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    console.log(`Site:    http://localhost:${port}`);
    console.log(`Swagger: http://localhost:${port}/api-docs`);
  });
})().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
