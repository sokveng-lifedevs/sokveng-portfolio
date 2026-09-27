# SokVeng.LifeDevs — Portfolio Website

A production-ready personal portfolio website for **SokVeng Ean**, Software Engineer.

Built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000).

### 3. Build for production
```bash
npm run build
npm start
```

---

## ⚙️ Configuration

All personal information is in **one file**: `data/profile.ts`

Edit this to update:
- Your name, title, bio
- Profile image path
- Email, GitHub, LinkedIn
- Resume path
- Social links
- Stats

---

## 📸 Adding Your Profile Photo

1. Add your photo as:
   ```
   public/profile.jpg
   ```
2. Recommended size: **400×400px** or larger (square)
3. Supported formats: `.jpg`, `.png`, `.webp`

The image is used in both the Hero and About sections automatically.

---

## 📁 Adding Projects

Edit `data/projects.ts`:
```ts
{
  title:        "Your Project Name",
  description:  "Short description...",
  image:        "/projects/your-image.png",  // Add image to public/projects/
  technologies: ["Python", "FastAPI"],
  github:       "https://github.com/you/project",
  demo:         "https://your-demo.com",     // leave "" if none
  status:       "Completed",                 // "Completed" | "In Progress" | "Planned"
  featured:     true,
}
```

---

## 📄 Adding Your Resume

1. Place your resume at:
   ```
   public/resume.pdf
   ```
2. The **Download Resume** button in the Hero will work automatically.
3. If the file doesn't exist, the button is shown but will return 404 — remove the button by setting `hasResume = false` in `components/Hero.tsx`.

---

## 🔗 Environment Variables

Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Recommended | Your production URL for SEO |
| `GITHUB_TOKEN` | Optional | GitHub API token for live repo data |

**Never commit `.env.local` to Git.**

---

## 🐙 Connecting GitHub

1. Update `data/profile.ts`:
   ```ts
   github:    "your-github-username",
   githubUrl: "https://github.com/your-github-username",
   ```
2. For live GitHub stats, add `GITHUB_TOKEN` to `.env.local`
   - Create at: https://github.com/settings/tokens
   - Scopes needed: `public_repo` (read only)

---

## ☁️ Deploying to Vercel

### Automatic deployment (recommended)

1. Push this project to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → **New Project** → Import from GitHub

3. Set environment variables in the Vercel dashboard:
   - `NEXT_PUBLIC_SITE_URL` → your domain

4. Click **Deploy** ✅

### Automatic deployment workflow
```
Edit Code → Git Commit → Git Push → GitHub → Vercel → Build → Production
```
Every push to `main` triggers an automatic build and deployment.

---

## 🌐 Custom Domain

After deploying to Vercel:

1. Go to your Vercel project → **Settings → Domains**
2. Add your domain (e.g., `sokveng.com`)
3. Vercel will give you DNS records to add

**DNS Configuration (example):**
| Type | Name | Value |
|---|---|---|
| `A` | `@` | `76.76.21.21` |
| `CNAME` | `www` | `cname.vercel-dns.com` |

Add these at your domain registrar (Namecheap, GoDaddy, Cloudflare, etc.).

---

## 📂 Project Structure

```
sokveng-portfolio/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Main page (all sections)
│   ├── globals.css         # Global styles
│   ├── sitemap.ts          # XML sitemap
│   └── robots.ts           # robots.txt
├── components/
│   ├── Navbar.tsx          # Sticky navigation + theme toggle
│   ├── Hero.tsx            # Hero section + terminal animation
│   ├── About.tsx           # About + profile photo + stats
│   ├── Skills.tsx          # Skills grid
│   ├── Projects.tsx        # Project cards
│   ├── Experience.tsx      # Work + learning timeline
│   ├── Services.tsx        # What I can build
│   ├── GitHub.tsx          # GitHub section
│   ├── Contact.tsx         # Contact form + links
│   ├── Footer.tsx          # Footer
│   └── ThemeProvider.tsx   # Dark/light mode provider
├── data/
│   ├── profile.ts          # ⭐ MAIN CONFIG — edit this first
│   ├── projects.ts         # Project list
│   ├── skills.ts           # Skills categories
│   └── experience.ts       # Work + learning timeline data
├── lib/
│   └── utils.ts            # Utility functions
├── public/
│   ├── profile.jpg         # ← Your profile photo here
│   ├── resume.pdf          # ← Your resume here
│   └── projects/           # ← Project images here
├── .env.example            # Environment variable template
├── .gitignore              
├── package.json            
├── tailwind.config.ts      
├── tsconfig.json           
└── next.config.mjs         
```

---

## ✅ Remaining TODOs

- [ ] Add your real profile photo → `public/profile.jpg`
- [ ] Add your resume PDF → `public/resume.pdf`
- [ ] Update `data/profile.ts` with your real links (LinkedIn, Telegram)
- [ ] Add your real projects to `data/projects.ts`
- [ ] Add your real work experience to `data/experience.ts`
- [ ] Add project screenshots to `public/projects/`
- [ ] Connect a real email provider for the contact form (see `components/Contact.tsx`)
- [ ] Set `NEXT_PUBLIC_SITE_URL` before deploying
- [ ] (Optional) Add `GITHUB_TOKEN` for live GitHub stats

---

Built by **SokVeng Ean** — [SokVeng.LifeDevs](https://sokveng.com)
