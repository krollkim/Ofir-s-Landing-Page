# Technical Documentation

**Project:** Ofir's Landing Page
**Developer:** Kim Kroll
**Version:** 1.0.0

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.3.1 | UI Framework |
| Vite | 6.0.5 | Build Tool & Dev Server |
| Tailwind CSS | 3.4.17 | Styling |
| Framer Motion | 11.15.0 | Animations |
| Lucide React | 0.468.0 | Icons |
| Decap CMS | 3.x | Content Management |

---

## Project Structure

```
├── public/
│   ├── admin/
│   │   ├── index.html      # Decap CMS admin interface
│   │   └── config.yml      # CMS configuration
│   ├── images/             # Static images
│   └── favicon/            # Favicon files
├── src/
│   ├── components/         # React components
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── PersonalTraining.jsx
│   │   ├── Workshops.jsx
│   │   ├── Gallery.jsx
│   │   ├── Reviews.jsx
│   │   ├── Contact.jsx
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── content/            # CMS-managed JSON data
│   │   ├── settings.json   # Global site settings
│   │   ├── events.json     # Events & workshops data
│   │   └── gallery.json    # Gallery images
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── package.json
```

---

## CMS Integration (Decap CMS)

### Access
- **Admin URL:** `/admin/`
- **Authentication:** Netlify Identity + Git Gateway

### Editable Content

#### Global Settings (`src/content/settings.json`)
| Field | Description |
|-------|-------------|
| `hero_title_start` | First part of hero headline (dark) |
| `hero_title_highlight` | Second part of hero headline (purple) |
| `hero_subtitle` | Hero section subtitle |
| `about_image` | Profile image in About section |
| `about_text` | About section intro text |
| `training_title` | Training section badge text |
| `training_subtitle` | Training section headline |
| `training_description` | Training section description |
| `footer_text` | Footer tagline |

#### Events & Workshops (`src/content/events.json`)
- List of events with: title, description, category, icon

#### Photo Gallery (`src/content/gallery.json`)
- List of images with: image path, alt text, grid span

---

## Development

### Commands
```bash
npm install     # Install dependencies
npm run dev     # Start dev server (localhost:5173)
npm run build   # Production build
npm run preview # Preview production build
```

### Environment
- Node.js 18+
- npm 9+

---

## Deployment (Netlify)

### Setup Steps
1. Connect repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Enable Netlify Identity (Site settings > Identity)
5. Enable Git Gateway (Identity > Services > Git Gateway)
6. Invite CMS users via Identity

### Environment Variables
None required for basic deployment.

---

## Design System

### Colors (Tailwind Custom)
```css
lilac-50:  #faf5ff
lilac-100: #f3e8ff
lilac-200: #e9d5ff
lilac-300: #d8b4fe
lilac-400: #c084fc
lilac-500: #a855f7
```

### Typography
- Headings: System font stack (bold)
- Body: System font stack (regular)
- Brand: Segoe Script / Brush Script MT

---

## Credits

**Developed by:** Kim Kroll
**Client:** Ofir (Better Together)
**Year:** 2025

---

## License

All rights reserved. This project was custom-built for the client.
