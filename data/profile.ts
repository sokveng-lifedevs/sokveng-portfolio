// ============================================================
// CENTRAL CONFIGURATION — edit this file to update your info
// ============================================================

export const profile = {
  name:        "SokVeng Ean",
  brand:       "SokVeng.LifeDevs",
  title:       "Software Engineer",
  subtitle:    "Python Developer | Backend Developer | System Administrator",
  bio:         "I'm SokVeng Ean, a software engineer focused on building practical software applications, backend systems, APIs, and reliable developer solutions. I enjoy learning new technologies, building real projects, solving technical problems, and continuously improving my software engineering skills.",
  location:    "Cambodia",
  // ─── Place your photo at public/profile.jpg ───
  image:       "/profile.jpg",
  resume:      "/resume.pdf",   // Place resume at public/resume.pdf
  email:       "sokveng.lifedevs@gmail.com",
  github:      "sokveng-lifedevs",
  githubUrl:   "https://github.com/sokveng-lifedevs",
  linkedin:    "",              // e.g. "https://linkedin.com/in/sokveng-ean"
  telegram:    "",              // e.g. "https://t.me/sokveng"
  website:     "https://sokveng.com",
  stats: [
    { label: "Projects Built",    value: "10+" },
    { label: "Technologies",      value: "15+" },
    { label: "GitHub Repos",      value: "20+" },
    { label: "Years Learning",    value: "3+" },
  ],
};

export const seo = {
  title:       "SokVeng Ean | Software Engineer",
  description: "SokVeng Ean is a software engineer focused on Python, backend development, APIs, Linux, and modern software engineering.",
  url:         process.env.NEXT_PUBLIC_SITE_URL ?? "https://sokveng.com",
  ogImage:     "/og-image.png",
};
