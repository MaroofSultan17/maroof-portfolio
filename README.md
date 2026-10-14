# Maroof Sultan — Portfolio

Personal portfolio built with React, Vite and Tailwind CSS. Live at https://maroof-portfolio-rose.vercel.app

## Run locally

```bash
npm install
npm run dev
```

## Edit content

- Text, experience, projects and skills: `src/data/site.ts`
- About and hero copy: `src/components/About.tsx`, `src/components/Hero.tsx`
- Photo: `public/maroof-sultan.jpg`, résumé: `public/resume.pdf`
- Share preview image: `public/og.png` (1200×630); SEO tags live in `index.html`

## Contact form

Sends through EmailJS. Set these in `.env` locally and in Vercel project settings:

```
VITE_EMAIL_SERVICE_ID=
VITE_EMAIL_TEMPLATE_ID=
VITE_EMAIL_PUBLIC_KEY=
```

The EmailJS template reads the fields `name`, `email` and `message`.
