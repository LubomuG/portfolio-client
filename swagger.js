const body = (name) => ({
  required: true,
  content: {
    "application/json": { schema: { $ref: `#/components/schemas/${name}` } },
  },
});
const str = { type: "string" };

module.exports = {
  openapi: "3.0.3",
  info: {
    title: "Portfolio Site API",
    version: "1.0.0",
    description:
      "Public API used by the portfolio website. No login needed. Everything you manage (projects, skills, messages, subscribers) lives in the admin server; both servers share one MongoDB.",
  },
  servers: [{ url: "/api" }],
  components: {
    schemas: {
      Contact: {
        type: "object",
        required: ["name", "email", "text"],
        properties: {
          name: { type: "string", maxLength: 100 },
          email: { type: "string", format: "email" },
          text: { type: "string", maxLength: 3000 },
          website: {
            type: "string",
            description: "Spam trap. Leave empty, bots fill it in.",
          },
        },
      },
      Email: {
        type: "object",
        required: ["email"],
        properties: { email: { type: "string", format: "email" } },
      },
    },
  },
  paths: {
    "/projects": {
      get: {
        tags: ["Content"],
        summary: "List projects (the code link is never returned)",
        responses: { 200: { description: "Array of projects" } },
      },
    },
    "/skills": {
      get: {
        tags: ["Content"],
        summary: "List skills",
        responses: { 200: { description: "Array of skills" } },
      },
    },
    "/images/{id}": {
      get: {
        tags: ["Content"],
        summary: "Get an image uploaded in the admin (GridFS)",
        parameters: [{ name: "id", in: "path", required: true, schema: str }],
        responses: {
          200: { description: "Image" },
          404: { description: "Not found" },
        },
      },
    },
    "/contact": {
      post: {
        tags: ["Forms"],
        summary:
          "Send a message. It appears in admin → Messages (5 per 15 min per IP)",
        requestBody: body("Contact"),
        responses: {
          201: { description: "Saved" },
          400: { description: "Validation error" },
          429: { description: "Too many requests" },
        },
      },
    },
    "/subscribe": {
      post: {
        tags: ["Forms"],
        summary:
          "Subscribe an email. It appears in admin → Email (20 per hour per IP)",
        requestBody: body("Email"),
        responses: {
          201: { description: "Subscribed" },
          200: { description: "Already subscribed" },
          400: { description: "Invalid email" },
          429: { description: "Too many requests" },
        },
      },
    },
  },
};
