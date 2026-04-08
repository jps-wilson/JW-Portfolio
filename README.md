# Jess Wilson — Portfolio

Personal portfolio site built to showcase my web development projects and design thinking. Live at [jessicapswilson.com](https://jessicapswilson.com).

## Stack

- **React 19** — component architecture and routing
- **React Router v7** — client-side navigation with animated page transitions
- **Framer Motion** — page enter/exit animations
- **GSAP + ScrollTrigger** — scroll-driven animations and opening sequence
- **highlight.js** — syntax highlighting in case study code snippets
- **Vite** — build tool and dev server
- **Vanilla CSS** — custom design tokens, no utility framework

## Structure

```
src/
├── assets/          # Images and SVG icons
├── components/
│   ├── layout/      # Navigation, Footer
│   ├── projects/    # Case study components (one per project)
│   └── ui/          # Shared components (ProjectPage, ProjectCard, etc.)
├── data/            # Project content and screenshot mappings
├── hooks/           # Custom hooks (scroll animation, text reveal, opening animation)
├── pages/           # Route-level page components
└── styles/          # CSS organised by component and page
```

## Running locally

```bash
npm install
npm run dev
```

## Deployment

Deployed automatically to Vercel on push to `main`.
