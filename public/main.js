/* ===================== YOUR DATA (edit here) ===================== */
const PROFILE = {
  name: { uk: "Любомир Гуцал", other: "Lubomir Hutsal" },
  age: 23,
  school: "Creator IT Academy",
  langs: ["uk", "en"], // languages you speak
  github: "https://github.com/LubomuG?tab=repositories",
  telegram: "https://t.me/LubomirGu",
  pdf: "/api/portfolio-pdf", // PDF stored in MongoDB (upload it once with: node upload-pdf.js)
  photo: "photo.jpg", // put this file into the public folder, it shows up automatically
};

/* ===================== TRANSLATIONS ===================== */
const I18N = {
  uk: {
    "nav.about": "Про мене",
    "nav.projects": "Проєкти",
    "nav.skills": "Навички",
    "nav.contact": "Контакти",
    "pk.lang": "Мова",
    "pk.theme": "Тема",
    "hero.hi": "Привіт, я",
    "hero.role": "Студент Creator IT Academy",
    "hero.cta1": "Мої проєкти",
    "hero.cta2": "Написати мені",
    "about.title": "Про мене",
    "about.text":
      "Навчаюсь у Creator IT Academy і створюю власні проєкти. Тут зібрані мої роботи та навички.",
    "f.age": "Вік",
    "f.study": "Навчання",
    "f.langs": "Мови",
    "f.pdf": "Портфоліо",
    "f.pdfopen": "Відкрити PDF",
    "l.uk": "Українська",
    "l.en": "Англійська",
    "proj.title": "Проєкти",
    "proj.demo": "Дивитись демо",
    "proj.full": "Повний опис",
    "proj.none": "Проєктів поки немає.",
    "proj.close": "Закрити",
    "proj.tech": "Технології",
    "sk.title": "Навички",
    "sk.since": "Вчу вже {x}",
    "sk.other": "Інше",
    "sk.none": "Навичок поки немає.",
    "u.d": "дн.",
    "u.y": "р.",
    "u.m": "міс.",
    "c.title": "Контакти",
    "c.sub": "Напишіть мені — повідомлення прийде прямо в мою панель.",
    "c.name": "Ім’я",
    "c.email": "Email",
    "c.msg": "Повідомлення",
    "c.send": "Надіслати",
    "c.sent": "Дякую! Повідомлення надіслано.",
    "sub.title": "Новини на пошту",
    "sub.ph": "Ваш email",
    "sub.btn": "Підписатися",
    "sub.ok": "Ви підписані!",
    "err.load": "Не вдалося завантажити дані.",
    "err.valid": "Перевірте введені дані.",
    "err.many": "Забагато спроб, спробуйте пізніше.",
    "err.generic": "Щось пішло не так.",
  },
  en: {
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "pk.lang": "Language",
    "pk.theme": "Theme",
    "hero.hi": "Hi, I’m",
    "hero.role": "Student at Creator IT Academy",
    "hero.cta1": "My projects",
    "hero.cta2": "Contact me",
    "about.title": "About me",
    "about.text":
      "I study at Creator IT Academy and build my own projects. Here are my work and skills.",
    "f.age": "Age",
    "f.study": "Studies",
    "f.langs": "Languages",
    "f.pdf": "Portfolio",
    "f.pdfopen": "Open PDF",
    "l.uk": "Ukrainian",
    "l.en": "English",
    "proj.title": "Projects",
    "proj.demo": "View demo",
    "proj.full": "Full description",
    "proj.none": "No projects yet.",
    "proj.close": "Close",
    "proj.tech": "Tech",
    "sk.title": "Skills",
    "sk.since": "Learning for {x}",
    "sk.other": "Other",
    "sk.none": "No skills yet.",
    "u.d": "days",
    "u.y": "y",
    "u.m": "m",
    "c.title": "Contact",
    "c.sub": "Write to me — your message goes straight to my dashboard.",
    "c.name": "Name",
    "c.email": "Email",
    "c.msg": "Message",
    "c.send": "Send",
    "c.sent": "Thanks! Message sent.",
    "sub.title": "Get updates by email",
    "sub.ph": "Your email",
    "sub.btn": "Subscribe",
    "sub.ok": "You are subscribed!",
    "err.load": "Could not load data.",
    "err.valid": "Check the entered data.",
    "err.many": "Too many attempts, try again later.",
    "err.generic": "Something went wrong.",
  },
  pl: {
    "nav.about": "O mnie",
    "nav.projects": "Projekty",
    "nav.skills": "Umiejętności",
    "nav.contact": "Kontakt",
    "pk.lang": "Język",
    "pk.theme": "Motyw",
    "hero.hi": "Cześć, jestem",
    "hero.role": "Student Creator IT Academy",
    "hero.cta1": "Moje projekty",
    "hero.cta2": "Napisz do mnie",
    "about.title": "O mnie",
    "about.text":
      "Uczę się w Creator IT Academy i tworzę własne projekty. Tu zebrane są moje prace i umiejętności.",
    "f.age": "Wiek",
    "f.study": "Nauka",
    "f.langs": "Języki",
    "f.pdf": "Portfolio",
    "f.pdfopen": "Otwórz PDF",
    "l.uk": "Ukraiński",
    "l.en": "Angielski",
    "proj.title": "Projekty",
    "proj.demo": "Zobacz demo",
    "proj.full": "Pełny opis",
    "proj.none": "Brak projektów.",
    "proj.close": "Zamknij",
    "proj.tech": "Technologie",
    "sk.title": "Umiejętności",
    "sk.since": "Czas nauki: {x}",
    "sk.other": "Inne",
    "sk.none": "Brak umiejętności.",
    "u.d": "dni",
    "u.y": "l.",
    "u.m": "mies.",
    "c.title": "Kontakt",
    "c.sub": "Napisz do mnie — wiadomość trafi prosto do mojego panelu.",
    "c.name": "Imię",
    "c.email": "E-mail",
    "c.msg": "Wiadomość",
    "c.send": "Wyślij",
    "c.sent": "Dzięki! Wiadomość wysłana.",
    "sub.title": "Nowości na e-mail",
    "sub.ph": "Twój e-mail",
    "sub.btn": "Subskrybuj",
    "sub.ok": "Zapisano!",
    "err.load": "Nie udało się wczytać danych.",
    "err.valid": "Sprawdź wprowadzone dane.",
    "err.many": "Zbyt wiele prób, spróbuj później.",
    "err.generic": "Coś poszło nie tak.",
  },
  de: {
    "nav.about": "Über mich",
    "nav.projects": "Projekte",
    "nav.skills": "Skills",
    "nav.contact": "Kontakt",
    "pk.lang": "Sprache",
    "pk.theme": "Design",
    "hero.hi": "Hallo, ich bin",
    "hero.role": "Student an der Creator IT Academy",
    "hero.cta1": "Meine Projekte",
    "hero.cta2": "Kontakt aufnehmen",
    "about.title": "Über mich",
    "about.text":
      "Ich lerne an der Creator IT Academy und baue eigene Projekte. Hier sind meine Arbeiten und Skills.",
    "f.age": "Alter",
    "f.study": "Ausbildung",
    "f.langs": "Sprachen",
    "f.pdf": "Portfolio",
    "f.pdfopen": "PDF öffnen",
    "l.uk": "Ukrainisch",
    "l.en": "Englisch",
    "proj.title": "Projekte",
    "proj.demo": "Demo ansehen",
    "proj.full": "Vollständige Beschreibung",
    "proj.none": "Noch keine Projekte.",
    "proj.close": "Schließen",
    "proj.tech": "Technik",
    "sk.title": "Skills",
    "sk.since": "Lernzeit: {x}",
    "sk.other": "Sonstiges",
    "sk.none": "Noch keine Skills.",
    "u.d": "Tage",
    "u.y": "J.",
    "u.m": "Mon.",
    "c.title": "Kontakt",
    "c.sub": "Schreib mir — deine Nachricht landet direkt in meinem Dashboard.",
    "c.name": "Name",
    "c.email": "E-Mail",
    "c.msg": "Nachricht",
    "c.send": "Senden",
    "c.sent": "Danke! Nachricht gesendet.",
    "sub.title": "Neuigkeiten per E-Mail",
    "sub.ph": "Deine E-Mail",
    "sub.btn": "Abonnieren",
    "sub.ok": "Du bist angemeldet!",
    "err.load": "Daten konnten nicht geladen werden.",
    "err.valid": "Bitte Eingaben prüfen.",
    "err.many": "Zu viele Versuche, bitte später erneut.",
    "err.generic": "Etwas ist schiefgelaufen.",
  },
  zh: {
    "nav.about": "关于我",
    "nav.projects": "项目",
    "nav.skills": "技能",
    "nav.contact": "联系",
    "pk.lang": "语言",
    "pk.theme": "主题",
    "hero.hi": "你好，我是",
    "hero.role": "Creator IT Academy 学员",
    "hero.cta1": "我的项目",
    "hero.cta2": "联系我",
    "about.title": "关于我",
    "about.text":
      "我在 Creator IT Academy 学习，并制作自己的项目。这里展示我的作品和技能。",
    "f.age": "年龄",
    "f.study": "学习",
    "f.langs": "语言",
    "f.pdf": "作品集",
    "f.pdfopen": "打开 PDF",
    "l.uk": "乌克兰语",
    "l.en": "英语",
    "proj.title": "项目",
    "proj.demo": "查看演示",
    "proj.full": "完整介绍",
    "proj.none": "暂无项目。",
    "proj.close": "关闭",
    "proj.tech": "技术",
    "sk.title": "技能",
    "sk.since": "已学习 {x}",
    "sk.other": "其他",
    "sk.none": "暂无技能。",
    "u.d": "天",
    "u.y": "年",
    "u.m": "个月",
    "c.title": "联系",
    "c.sub": "给我留言——消息会直接发送到我的后台。",
    "c.name": "姓名",
    "c.email": "邮箱",
    "c.msg": "留言",
    "c.send": "发送",
    "c.sent": "谢谢！消息已发送。",
    "sub.title": "邮件订阅",
    "sub.ph": "你的邮箱",
    "sub.btn": "订阅",
    "sub.ok": "订阅成功！",
    "err.load": "无法加载数据。",
    "err.valid": "请检查输入内容。",
    "err.many": "尝试次数过多，请稍后再试。",
    "err.generic": "出错了。",
  },
  ja: {
    "nav.about": "自己紹介",
    "nav.projects": "プロジェクト",
    "nav.skills": "スキル",
    "nav.contact": "お問い合わせ",
    "pk.lang": "言語",
    "pk.theme": "テーマ",
    "hero.hi": "こんにちは、私は",
    "hero.role": "Creator IT Academy の学生",
    "hero.cta1": "作品を見る",
    "hero.cta2": "連絡する",
    "about.title": "自己紹介",
    "about.text":
      "Creator IT Academy で学びながら、自分のプロジェクトを作っています。ここに作品とスキルをまとめています。",
    "f.age": "年齢",
    "f.study": "学校",
    "f.langs": "言語",
    "f.pdf": "ポートフォリオ",
    "f.pdfopen": "PDFを開く",
    "l.uk": "ウクライナ語",
    "l.en": "英語",
    "proj.title": "プロジェクト",
    "proj.demo": "デモを見る",
    "proj.full": "詳細を見る",
    "proj.none": "プロジェクトはまだありません。",
    "proj.close": "閉じる",
    "proj.tech": "技術",
    "sk.title": "スキル",
    "sk.since": "学習期間 {x}",
    "sk.other": "その他",
    "sk.none": "スキルはまだありません。",
    "u.d": "日",
    "u.y": "年",
    "u.m": "か月",
    "c.title": "お問い合わせ",
    "c.sub": "メッセージは私の管理画面に直接届きます。",
    "c.name": "お名前",
    "c.email": "メールアドレス",
    "c.msg": "メッセージ",
    "c.send": "送信",
    "c.sent": "ありがとうございます！送信しました。",
    "sub.title": "メールで更新を受け取る",
    "sub.ph": "メールアドレス",
    "sub.btn": "購読",
    "sub.ok": "購読しました！",
    "err.load": "データを読み込めませんでした。",
    "err.valid": "入力内容を確認してください。",
    "err.many": "試行回数が多すぎます。後でお試しください。",
    "err.generic": "問題が発生しました。",
  },
};

/* ===================== BASICS ===================== */
const $ = (s, r = document) => r.querySelector(s),
  esc = (s) =>
    String(s ?? "").replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[c],
    );
const LANGS = ["uk", "en", "pl", "de", "zh", "ja"];
const LANG_NAMES = {
  uk: "Українська",
  en: "English",
  pl: "Polski",
  de: "Deutsch",
  zh: "中文",
  ja: "日本語",
};
const THEMES = [
  "light",
  "dark",
  "glass",
  "neumorphism",
  "neon",
  "terminal",
  "aurora",
  "brutalism",
  "sunset",
];
const THEME_SW = {
  light: ["#eef0ff", "#5b4be0"],
  dark: ["#070816", "#8b7cff"],
  glass: ["#0a1c2c", "#4cc9f0"],
  neumorphism: ["#e0e5ec", "#6c63ff"],
  neon: ["#05010f", "#ff2bd6"],
  terminal: ["#020a03", "#00ff66"],
  aurora: ["#04121a", "#34d399"],
  brutalism: ["#fff3b0", "#ff4d4d"],
  sunset: ["#1a0b16", "#ff7a45"],
};
const cap = (s) => s[0].toUpperCase() + s.slice(1);
const ls = {
  get: (k) => {
    try {
      return localStorage.getItem(k);
    } catch {
      return null;
    }
  },
  set: (k, v) => {
    try {
      localStorage.setItem(k, v);
    } catch {}
  },
};
const safeUrl = (u) => (/^https?:\/\//i.test(u || "") ? u : "");
const safeImg = (u) =>
  /^(https?:\/\/|\/api\/images\/)/i.test(u || "") ? u : "";
const DATA = { projects: [], skills: [], loaded: false, err: false };

function pickLang() {
  const s = ls.get("lang");
  if (LANGS.includes(s)) return s;
  const n = (navigator.language || "").slice(0, 2).toLowerCase();
  return LANGS.includes(n) ? n : "uk";
}
let LANG = pickLang();
const t = (k, v) =>
  String(I18N[LANG]?.[k] ?? I18N.en[k] ?? k).replace(
    /\{(\w+)\}/g,
    (_, x) => v?.[x] ?? "",
  );
const curTheme = () => document.documentElement.dataset.theme;
const myName = () => (LANG === "uk" ? PROFILE.name.uk : PROFILE.name.other);

function toast(m, e) {
  const el = $("#toast");
  el.textContent = m;
  el.className = "show" + (e ? " err" : "");
  clearTimeout(el._t);
  el._t = setTimeout(() => (el.className = ""), 3200);
}
async function api(path, body) {
  const r = await fetch("/api" + path, {
    method: body ? "POST" : "GET",
    headers: body ? { "Content-Type": "application/json" } : {},
    body: body ? JSON.stringify(body) : undefined,
  });
  const d = await r.json().catch(() => ({}));
  if (!r.ok)
    throw Error(
      t(
        r.status === 429
          ? "err.many"
          : r.status === 400
            ? "err.valid"
            : "err.generic",
      ),
    );
  return d;
}

/* ===================== SCROLL EFFECTS ===================== */
const io =
  "IntersectionObserver" in window
    ? new IntersectionObserver(
        (es) =>
          es.forEach(
            (e) =>
              e.isIntersecting &&
              (e.target.classList.add("in"), io.unobserve(e.target)),
          ),
        { threshold: 0.12 },
      )
    : null;
const reveal = (root = document) =>
  root
    .querySelectorAll(".rv:not(.in)")
    .forEach((x) => (io ? io.observe(x) : x.classList.add("in")));

/* ===================== RENDER ===================== */
function socials() {
  return `<a href="${PROFILE.github}" target="_blank" rel="noopener noreferrer">GitHub</a><a href="${PROFILE.telegram}" target="_blank" rel="noopener noreferrer">Telegram</a>`;
}
function renderAbout() {
  const n = myName();
  $("#brand-n").textContent = n;
  $("#h-name").textContent = n;
  $("#foot-n").textContent = n;
  document.title = n + " — Portfolio";
  $("#facts").innerHTML = [
    [t("f.age"), PROFILE.age],
    [t("f.study"), PROFILE.school],
    [t("f.langs"), PROFILE.langs.map((l) => t("l." + l)).join(", ")],
  ]
    .map(
      ([k, v]) =>
        `<div class="fact"><small>${esc(k)}</small><b>${esc(v)}</b></div>`,
    )
    .join("");
  // PDF portfolio card (file is stored in MongoDB, see upload-pdf.js)
  $("#facts").insertAdjacentHTML(
    "beforeend",
    `<a class="fact fact-pdf" href="${PROFILE.pdf}" target="_blank" rel="noopener"><small>${esc(t("f.pdf"))}</small><b>📄 ${esc(t("f.pdfopen"))}</b></a>`,
  );
  $("#soc-about").innerHTML = $("#soc-foot").innerHTML = socials();
  const sp = $("#photo span");
  if (sp)
    sp.textContent = n
      .split(/\s+/)
      .map((w) => w[0])
      .join("")
      .slice(0, 2);
}
function initPhoto() {
  const ph = $("#photo"),
    im = new Image();
  im.alt = "";
  im.onload = () => {
    ph.textContent = "";
    ph.append(im);
    ph.classList.add("has");
  };
  im.src = PROFILE.photo;
}

const descOf = (p) => {
  const d = p.description || {};
  return (LANG === "uk" ? d.uk || d.en : d.en || d.uk) || "";
};
function card(p, i) {
  const demo = safeUrl(p.demo) || safeUrl(p.url),
    img = safeImg(p.image);
  return `<article class="pc glass rv">
    ${img ? `<img class="pc-img" src="${esc(img)}" alt="" loading="lazy" data-fb="${esc((p.title || "?")[0])}">` : `<div class="pc-img ph">${esc((p.title || "?")[0])}</div>`}
    <div class="pc-b">
      ${p.category ? `<div><span class="tag">${esc(p.category)}</span></div>` : ""}
      <h3>${esc(p.title)}</h3>
      <p>${esc(descOf(p))}</p>
      <div>${(p.languages || []).map((l) => `<span class="tag">${esc(l)}</span>`).join("")}</div>
      <div class="row pc-a">
        ${demo ? `<a class="btn pri" href="${esc(demo)}" target="_blank" rel="noopener noreferrer">${t("proj.demo")}</a>` : ""}
        <button class="btn" type="button" data-full="${i}">${t("proj.full")}</button>
      </div>
    </div></article>`;
}
function renderProjects() {
  const el = $("#p-list");
  if (!DATA.loaded) return (el.innerHTML = "");
  if (!DATA.projects.length)
    return (el.innerHTML = `<p class="empty">${t(DATA.err ? "err.load" : "proj.none")}</p>`);
  el.innerHTML = DATA.projects.map(card).join("");
  el.querySelectorAll("img[data-fb]").forEach((im) =>
    im.addEventListener("error", () => {
      const d = document.createElement("div");
      d.className = "pc-img ph";
      d.textContent = im.dataset.fb;
      im.replaceWith(d);
    }),
  );
  reveal(el);
}

function since(d) {
  if (!d) return "";
  const days = Math.max(0, Math.floor((Date.now() - new Date(d)) / 864e5)),
    y = Math.floor(days / 365),
    m = Math.floor((days % 365) / 30);
  return (
    `${days} ${t("u.d")}` +
    (y || m ? ` (${y ? y + t("u.y") + " " : ""}${m}${t("u.m")})` : "")
  );
}
function skill(s) {
  const lvl = Math.max(0, Math.min(100, +s.level || 0)),
    ic = safeImg(s.icon);
  return `<div class="sk glass"><div class="sk-i">${ic ? `<img src="${esc(ic)}" alt="" loading="lazy">` : esc(s.icon)}</div>
    <div class="sk-t"><b>${esc(s.name)}<span>${lvl}%</span></b><div class="bar"><i style="--w:${lvl}%"></i></div>
    ${s.startedAt ? `<small>${t("sk.since", { x: esc(since(s.startedAt)) })}</small>` : ""}</div></div>`;
}
function renderSkills() {
  const el = $("#s-list");
  if (!DATA.loaded) return (el.innerHTML = "");
  if (!DATA.skills.length)
    return (el.innerHTML = `<p class="empty">${t(DATA.err ? "err.load" : "sk.none")}</p>`);
  const g = {};
  DATA.skills.forEach((s) => (g[s.category || t("sk.other")] ||= []).push(s));
  el.innerHTML = Object.entries(g)
    .map(
      ([c, list]) =>
        `<div class="sg rv"><h3>${esc(c)}</h3><div class="skills">${list.map(skill).join("")}</div></div>`,
    )
    .join("");
  reveal(el);
}

/* ===================== MODAL (full description) ===================== */
let lastFocus = null;
function openModal(i) {
  const p = DATA.projects[i];
  if (!p) return;
  const demo = safeUrl(p.demo) || safeUrl(p.url),
    img = safeImg(p.image),
    date = p.date
      ? new Date(p.date).toLocaleDateString(LANG, {
          year: "numeric",
          month: "long",
        })
      : "";
  $("#m-body").innerHTML =
    `${img ? `<img class="m-img" src="${esc(img)}" alt="">` : ""}
    <h3 id="m-title">${esc(p.title)}</h3>
    <div class="m-meta">${[p.category, date].filter(Boolean).map(esc).join(" · ")}</div>
    <p class="m-desc">${esc(descOf(p))}</p>
    ${(p.languages || []).length ? `<div class="m-tech"><small>${t("proj.tech")}</small>${p.languages.map((l) => `<span class="tag">${esc(l)}</span>`).join("")}</div>` : ""}
    ${demo ? `<div class="row" style="margin-top:18px"><a class="btn pri" href="${esc(demo)}" target="_blank" rel="noopener noreferrer">${t("proj.demo")}</a></div>` : ""}`;
  lastFocus = document.activeElement;
  $("#modal").hidden = false;
  document.body.classList.add("lock");
  $("#m-x").focus();
}
function closeModal() {
  if ($("#modal").hidden) return;
  $("#modal").hidden = true;
  document.body.classList.remove("lock");
  lastFocus?.focus?.();
}
$("#p-list").addEventListener("click", (e) => {
  const b = e.target.closest("[data-full]");
  if (b) openModal(+b.dataset.full);
});
$("#m-x").onclick = closeModal;
$("#modal").addEventListener(
  "mousedown",
  (e) => e.target.id === "modal" && closeModal(),
);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") (closeModal(), closeMenu());
  if (e.key === "Tab" && !$("#modal").hidden) {
    const f = [...$("#modal").querySelectorAll("a[href],button")];
    if (!f.length) return;
    const first = f[0],
      last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first)
      (e.preventDefault(), last.focus());
    else if (!e.shiftKey && document.activeElement === last)
      (e.preventDefault(), first.focus());
  }
});

/* ===================== THEME + LANGUAGE ===================== */
function applyStatic() {
  document.documentElement.lang = LANG;
  document
    .querySelectorAll("[data-i18n]")
    .forEach((e) => (e.textContent = t(e.dataset.i18n)));
  document.querySelectorAll("[data-ph]").forEach((e) => {
    e.placeholder = t(e.dataset.ph);
    e.setAttribute("aria-label", t(e.dataset.ph));
  });
  $("#lg-b").setAttribute("aria-label", t("pk.lang"));
  $("#th-b").setAttribute("aria-label", t("pk.theme"));
  $("#m-x").setAttribute("aria-label", t("proj.close"));
  $("#lg-v").textContent = LANG_NAMES[LANG];
  $("#th-v").textContent = cap(curTheme());
  renderAbout();
  renderProjects();
  renderSkills();
  if (!$("#modal").hidden) closeModal();
}
function applyTheme(th, persist) {
  if (!THEMES.includes(th)) return;
  document.documentElement.dataset.theme = th;
  if (persist) ls.set("theme", th);
  $("#th-v").textContent = cap(th);
}
function setLang(l) {
  if (!LANGS.includes(l)) return;
  LANG = l;
  ls.set("lang", l);
  applyStatic();
}

const pm = document.createElement("div");
pm.id = "pmenu";
pm.setAttribute("role", "listbox");
document.body.append(pm);
let pmFor = null;
function closeMenu() {
  pm.classList.remove("open");
  pmFor = null;
}
function openMenu(btn, items, cur, pick) {
  if (pmFor === btn) return closeMenu();
  pm.innerHTML = "";
  items.forEach((it) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "pm-o" + (it.v === cur ? " on" : "");
    b.setAttribute("role", "option");
    b.innerHTML =
      (it.sw
        ? `<i class="pm-sw" style="background:linear-gradient(135deg,${it.sw[0]} 50%,${it.sw[1]} 50%)"></i>`
        : "") + `<span>${esc(it.label)}</span>`;
    b.onclick = () => (closeMenu(), pick(it.v), btn.focus());
    pm.append(b);
  });
  const r = btn.getBoundingClientRect();
  pm.style.minWidth = Math.max(r.width, 170) + "px";
  pm.classList.add("open");
  const h = pm.offsetHeight,
    w = pm.offsetWidth;
  pm.style.left = Math.max(8, Math.min(r.left, innerWidth - w - 8)) + "px";
  pm.style.top = Math.min(r.bottom + 8, innerHeight - h - 8) + "px";
  pmFor = btn;
}
$("#lg-b").onclick = () =>
  openMenu(
    $("#lg-b"),
    LANGS.map((l) => ({ v: l, label: LANG_NAMES[l] })),
    LANG,
    setLang,
  );
$("#th-b").onclick = () =>
  openMenu(
    $("#th-b"),
    THEMES.map((x) => ({ v: x, label: cap(x), sw: THEME_SW[x] })),
    curTheme(),
    (x) => applyTheme(x, true),
  );
document.addEventListener("click", (e) => {
  if (pmFor && !pm.contains(e.target) && !pmFor.contains(e.target)) closeMenu();
});
addEventListener("resize", closeMenu);
addEventListener("scroll", closeMenu, { passive: true });

/* ===================== FORMS ===================== */
$("#c-form").onsubmit = async (e) => {
  e.preventDefault();
  const b = $("#c-send");
  b.disabled = true;
  try {
    await api("/contact", {
      name: $("#c-name").value,
      email: $("#c-email").value,
      text: $("#c-text").value,
      website: $("#c-web").value,
    });
    e.target.reset();
    toast(t("c.sent"));
  } catch (err) {
    toast(err.message, 1);
  } finally {
    b.disabled = false;
  }
};
$("#sub-f").onsubmit = async (e) => {
  e.preventDefault();
  try {
    await api("/subscribe", { email: $("#sub-email").value });
    e.target.reset();
    toast(t("sub.ok"));
  } catch (err) {
    toast(err.message, 1);
  }
};

/* ===================== START ===================== */
applyTheme(THEMES.includes(ls.get("theme")) ? ls.get("theme") : "dark");
$("#yr").textContent = new Date().getFullYear();
applyStatic();
initPhoto();
reveal();

// highlight the current section in the header
const navLinks = [...document.querySelectorAll("#links a")];
if (io) {
  const so = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (e.isIntersecting)
          navLinks.forEach((a) =>
            a.classList.toggle(
              "on",
              a.getAttribute("href") === "#" + e.target.id,
            ),
          );
      }),
    { rootMargin: "-45% 0px -50% 0px" },
  );
  document.querySelectorAll("main section").forEach((s) => so.observe(s));
}

Promise.all([api("/projects"), api("/skills")])
  .then(([p, s]) => ((DATA.projects = p), (DATA.skills = s)))
  .catch(() => (DATA.err = true))
  .finally(() => {
    DATA.loaded = true;
    renderProjects();
    renderSkills();
  });