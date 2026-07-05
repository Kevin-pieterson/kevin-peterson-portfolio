# Kevin Peterson — Cybersecurity Portfolio

A production-ready React + Vite portfolio built with Tailwind CSS, Framer Motion, and AOS, in a dark
cyberpunk / glassmorphism style. All content (bio, skills, certificates, projects) is sourced from
Kevin's CV, uploaded certificate PDFs, and GitHub repositories.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL to preview the site.

## Contact form (EmailJS)

The contact form uses [EmailJS](https://www.emailjs.com/) so messages are sent directly from the
browser — no backend required.

1. Create a free account at emailjs.com.
2. Add an Email Service (e.g. Gmail) and note the **Service ID**.
3. Create an Email Template with variables: `from_name`, `from_email`, `subject`, `message`, `to_email`.
   Note the **Template ID**.
4. Copy your **Public Key** from Account → API Keys.
5. Copy `.env.example` to `.env` and fill in the three values:

```bash
cp .env.example .env
```

Until this is configured, the form will show a friendly message pointing visitors to the email
address directly, so nothing breaks in the meantime.

## Certificates & CV

- `/public/cv/Kevin_Peterson_CV.pdf` — downloaded via the "Download CV" buttons.
- `/public/certificates/*.pdf` — each certificate card links to its own single-page PDF (split
  from the originally uploaded certificate documents).

Update `src/data/data.js` any time you want to change bio text, add a project, or add a new
certificate — every section reads from this single file.

## Build & deploy to Netlify

```bash
npm run build
```

This outputs a `dist/` folder. A `netlify.toml` is already included with the build command,
publish directory, and an SPA redirect rule, so you can either:

- Drag-and-drop the `dist/` folder into Netlify's dashboard, or
- Connect the repository to Netlify and let it run `npm run build` automatically.

If you use the EmailJS contact form on Netlify, add the three `VITE_EMAILJS_*` variables under
**Site settings → Environment variables** so the deployed build can read them.

## Project structure

```
src/
  components/   All UI sections (Hero, About, Projects, Certificates, Contact, etc.)
  data/         data.js — single source of truth for all portfolio content
  index.css     Tailwind + custom glassmorphism/neon utility classes
public/
  cv/           Downloadable CV PDF
  certificates/ Individual certificate PDFs
```
