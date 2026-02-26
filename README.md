# Maroof Sultan — Portfolio

A modern, responsive portfolio website built with React + Vite, TailwindCSS, and Framer Motion.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

## Deploy to Vercel

### Option 1 — Vercel CLI

```bash
npm install -g vercel
vercel
```

### Option 2 — GitHub Integration

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Select your repo — Vercel auto-detects Vite
4. Click **Deploy**

## Customization

- **Content**: Edit `src/data/portfolio.js` — all text, links, skills, projects live here
- **Theme Colors**: Edit `tailwind.config.js` — change `brand.*` and `accent` values
- **CV**: Replace `public/Maroof_Sultan_CV.pdf` with your actual PDF
- **Contact Form**: In `src/components/Contact.jsx`, replace the simulated send with [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com/)

## Tech Stack

- **React 18** + **Vite 5**
- **TailwindCSS 3** — utility-first styling with dark mode
- **Framer Motion 11** — page animations, scroll reveals, hover effects
- **React Icons** — icon library

## Project Structure

```
src/
├── components/       # All UI components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── SectionHeader.jsx
├── data/
│   └── portfolio.js  # All content — edit this!
├── hooks/
│   └── useTheme.js   # System-based dark/light mode
├── App.jsx
├── main.jsx
└── index.css
```
