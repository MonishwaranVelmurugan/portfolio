# Monishwaran Velmurugan — Portfolio

Professional portfolio website for a **Senior Project Engineer** specializing in Industrial IoT, Embedded Systems, Industrial Automation, PLC Programming, and Full Stack Development.

Live demo: update after deployment.

---

## Portfolio Overview

A single-page React application presenting professional experience, featured projects, technical skills, workshops, certifications, and contact information. Built for performance, accessibility, and production deployment.

### Features

- Responsive layout (desktop, tablet, mobile)
- Sticky navigation with active section highlighting
- Featured projects with detail modal
- Contact form with EmailJS integration
- SEO metadata, Open Graph, Twitter Cards, and JSON-LD
- Lazy-loaded sections and optimized asset delivery
- Accessible forms, keyboard navigation, and focus management

---

## Technologies Used

| Category | Stack |
|----------|-------|
| Framework | React 19 |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS 4 |
| Routing | React Router 7 |
| Animation | Framer Motion |
| SEO | react-helmet-async |
| Contact | EmailJS |
| Icons | React Icons |
| Linting | Oxlint |

---

## Installation

### Prerequisites

- Node.js 18 or later
- npm 9 or later

### Clone and install

```bash
git clone <your-repository-url>
cd Portfolio
npm install
```

### Environment variables

Copy the example file and add your credentials:

```bash
cp .env.example .env
```

| Variable | Description |
|----------|-------------|
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key |
| `VITE_BASE_PATH` | Optional base path for GitHub Pages (e.g. `/portfolio/`) |

Never commit `.env` to version control.

---

## Run Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

---

## Build

```bash
npm run build
npm run preview
```

The production build outputs to `dist/`. A `404.html` SPA fallback is generated automatically via `postbuild`.

---

## Folder Structure

```
Portfolio/
├── public/                 # Static assets (favicon, robots.txt, sitemap, og-image)
├── scripts/                # Build utilities
├── src/
│   ├── assets/images/      # SVG placeholders (profile, projects, workshops, certs)
│   ├── components/         # Reusable UI and section components
│   ├── config/             # EmailJS configuration (env-based)
│   ├── data/               # Content data (editable without touching UI)
│   ├── hooks/              # Custom React hooks
│   ├── layouts/            # Page layouts
│   ├── pages/              # Route pages
│   ├── styles/             # Global styles and Tailwind theme
│   └── utils/              # Helpers (validation, email, icons, styles)
├── .env.example
├── index.html
├── netlify.toml
├── vercel.json
└── vite.config.js
```

---

## Deployment

### Vercel (recommended)

1. Push the repository to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Add EmailJS environment variables in project settings.
4. Deploy — `vercel.json` handles SPA routing.

### Netlify

1. Connect the GitHub repository in [Netlify](https://netlify.com).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add environment variables in site settings.
5. `netlify.toml` handles SPA redirects.

### GitHub Pages

1. Set `VITE_BASE_PATH=/your-repo-name/` in `.env`.
2. Update `src/data/site.js` SEO URLs to match your GitHub Pages domain.
3. Build: `npm run build`
4. Deploy the `dist/` folder to the `gh-pages` branch or use GitHub Actions.

Update `public/robots.txt` and `public/sitemap.xml` with your production URL after deployment.

---

## Content Customization

Edit files in `src/data/`:

| File | Content |
|------|---------|
| `site.js` | Name, contact, SEO, social links |
| `hero.js` | Hero section |
| `about.js` | About section |
| `experience.js` | Work history |
| `projects.js` | Featured projects |
| `skills.js` | Skills categories |
| `workshops.js` | Workshops |
| `certifications.js` | Certifications |
| `contact.js` | Contact section |

Replace SVG placeholders in `src/assets/images/` with real photos and screenshots. Add `public/resume.pdf` for the download button.

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run Oxlint |

---

## Contact

**Monishwaran Velmurugan**  
Senior Project Engineer

- Email: update in `src/data/site.js`
- LinkedIn: update in `src/data/site.js`
- GitHub: update in `src/data/site.js`

---

## License

MIT — see [LICENSE](LICENSE).
