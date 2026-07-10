# Daniel Romero — portfolio

Personal portfolio, built with Next.js (App Router), TypeScript, Tailwind CSS v4, and shadcn/ui.
Deployed as a static export to GitHub Pages at [drome05.github.io](https://drome05.github.io).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Produces a static export in `out/` (`next.config.ts` sets `output: "export"`), matching what
`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main`.

## Structure

- `app/` — routes, root layout, fonts (self-hosted Space Grotesk + Space Mono), global theme
- `components/sections/` — Hero, Projects, Skills, Experience, Contact
- `components/layout/` — Nav, Footer
- `components/hero/HeroShaderPanel.tsx` — animated violet mesh-gradient hero visual
- `components/ui/` — shadcn primitives + the ported `background-paper-shaders.tsx` (r3f shader
  primitives, available via `components/three/ShaderCanvas.tsx`, not wired into any page by default)
