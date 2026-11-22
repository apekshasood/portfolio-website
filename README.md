# Apeksha Sood — Portfolio

Personal portfolio site. Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Features

- Developer-editorial design with a light / dark theme toggle (defaults to dark, remembers your choice)
- Animated hero with an auto-typing terminal and an infinite tech-stack marquee
- Scroll-reveal animations throughout
- Sections: Hero, Selected work, About, Experience, Skills, Education & Certifications, Contact
- Fully responsive, accessible, and SEO-ready

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# open http://localhost:3000

# 3. Production build
npm run build
npm start
```

## Project structure

```
src/app/
  layout.tsx          # fonts, metadata, no-flash theme script
  page.tsx            # composes all sections
  globals.css         # design tokens (light + dark) + animations
  context/
    ThemeContext.tsx  # light/dark toggle
  components/
    Navbar.tsx  Hero.tsx  Terminal.tsx  Work.tsx  Marquee.tsx
    About.tsx  Experience.tsx  Skills.tsx
    Education.tsx  Contact.tsx  Footer.tsx  Reveal.tsx
public/
  resume/Apeksha_Sood_Resume.pdf
```

## Editing content

All content lives as plain data at the top of each component file
(`Experience.tsx`, `Skills.tsx`, etc.) — edit those arrays to update the site.
Colours and fonts are defined once in `globals.css` (`:root` for light, `.dark` for dark).

## Deploy

Works out of the box on **Vercel**: push this repo to GitHub, import it at
[vercel.com/new](https://vercel.com/new), and deploy. No environment variables required.

---

To replace the CV, drop a new PDF at `public/resume/Apeksha_Sood_Resume.pdf`
(or update the path in `Navbar.tsx`, `Hero.tsx`, and `Contact.tsx`).
