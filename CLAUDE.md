# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server with Turbopack on port 3001
npm run build    # Production build with Turbopack
npm run start    # Start production server on port 3001
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

Single-page portfolio built with Next.js 15 App Router. The page is one long scroll with section-based composition — `app/page.tsx` renders sections in order: Navbar → Hero → About → Experience → Skills → Projects → Contact.

**Key directories:**
- `app/` — Root layout (`layout.tsx`) wraps everything in `ThemeProvider` and `I18nProvider`. Global styles and CSS variables live in `globals.css`.
- `components/sections/` — One file per section of the page. These are the main content components.
- `components/ui/` — shadcn/ui (New York style) + custom animation primitives (`blur-fade.tsx`, `particles.tsx`, `typing-animation.tsx`, `animated-gradient-text.tsx`, `icon-cloud.tsx`).
- `hooks/` — `use-scroll-reveal.ts` drives Anime.js scroll-triggered animations with 30+ presets; `use-anime.ts` handles hover animations.
- `lib/i18n.ts` — i18next config with Spanish (default) and English. Translation keys are embedded in this file, not in JSON files.

## Styling

Tailwind CSS v4 via PostCSS plugin (`@tailwindcss/postcss`). Color theming uses OKLCH CSS variables with separate light/dark values. Custom animations (float, pulse-glow, shimmer, rotate-glow, etc.) are defined in `globals.css`.

Use `cn()` from `lib/utils.ts` (clsx + tailwind-merge) for conditional classNames.

## Animations

Two animation systems run in parallel:
- **Framer Motion** — Used via the `BlurFade` wrapper component for entrance transitions.
- **Anime.js** — Used via `useScrollReveal` hook for scroll-triggered effects and `useAnimeHover` for hover effects.

## i18n

Add new text content in both `es` and `en` translation objects in `lib/i18n.ts`. Use the `useTranslation` hook in client components. The i18n provider is client-side only (`"use client"`).

## Component conventions

- Server Components by default; add `"use client"` only when needed (interactivity, hooks, browser APIs).
- shadcn/ui components are added via `npx shadcn@latest add <component>` and land in `components/ui/`.
- Path alias `@/` maps to the project root.
