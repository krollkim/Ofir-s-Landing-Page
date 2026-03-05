# CLAUDE.md — Ofir's Landing Page (Better Together)

## Project Overview

- **Client:** Ofir (Better Together)
- **Developer:** Kim Kroll
- **Live URL:** https://betterhertogether.netlify.app/
- **Stack:** Vite + React 18 SPA, Tailwind CSS, Framer Motion, Decap CMS
- **Hosting:** Netlify (with Netlify Identity + Git Gateway for CMS)
- **Language:** Hebrew (RTL, `lang="he" dir="rtl"`)

---

## Key Files

| File | Purpose |
|------|---------|
| `index.html` | All SEO meta tags, canonical, OG, Twitter, JSON-LD |
| `public/robots.txt` | Crawler rules + sitemap reference |
| `public/sitemap.xml` | Static sitemap (update `lastmod` on content changes) |
| `public/admin/config.yml` | Decap CMS configuration |
| `src/content/settings.json` | CMS-managed site-wide content |
| `src/content/events.json` | CMS-managed events/workshops |
| `src/content/gallery.json` | CMS-managed gallery images |
| `src/App.jsx` | Root component — single page, all sections |

---

## SEO Implementation (completed 2025-03-05)

### index.html
- `<link rel="canonical" href="https://betterhertogether.netlify.app/">`
- `og:url`, `og:site_name` added
- OG and Twitter image URLs made absolute
- JSON-LD structured data: `WebSite` + `Person` schema

### Static files (public/)
- `robots.txt` — allows all, blocks `/admin/`, references sitemap
- `sitemap.xml` — single URL (SPA), static file (Vite copies to dist/)

> Note: This is NOT Next.js. No `sitemap.ts` or `metadata` API. All SEO lives in `index.html` and `public/`.

### Accessibility fixes
- `Navbar.jsx` — mobile menu button: `aria-label` + `aria-expanded`
- `Footer.jsx` — icon-only Instagram link: `aria-label`

---

## Heading Hierarchy (verified)

- `<h1>` — Hero section only (one per page)
- `<h2>` — About, PersonalTraining, Workshops, Gallery, Contact sections
- `<h3>` — Sub-items within sections

---

## SEO Rules (DO NOT VIOLATE)

1. Do NOT rewrite or change any copy without explicit approval
2. Do NOT change component structure unless technically required
3. Do NOT rename files, components, or routes without documenting rationale
4. Every change must be minimal, targeted, and verified

---

## Google Search Console Checklist

- [ ] Verify ownership (HTML file or DNS method)
- [ ] Submit sitemap: `https://betterhertogether.netlify.app/sitemap.xml`
- [ ] Request indexing for homepage
- [ ] Check "URL Inspection" confirms canonical is accepted

---

## Verification URLs (after deploy)

| What | URL |
|------|-----|
| robots.txt | https://betterhertogether.netlify.app/robots.txt |
| sitemap.xml | https://betterhertogether.netlify.app/sitemap.xml |
| JSON-LD test | https://search.google.com/test/rich-results |
| Canonical check | View page source → `<link rel="canonical"` |

---

## Development Commands

```bash
npm run dev      # localhost:5005
npm run build    # output to /dist
npm run preview  # preview production build
```

---

## Sitemap Maintenance

`public/sitemap.xml` is static. Update `<lastmod>` manually when significant content changes are deployed.
