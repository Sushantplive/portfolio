# Sushant Paikarao — Portfolio

Personal developer portfolio built with **React 19**, **TypeScript**, **Vite 7**, and **Tailwind CSS v4**.

>  **Copyright Notice:** This code is proprietary. Viewing is permitted for reference and hiring evaluation only. Copying, reusing, or distributing any part of this code is strictly prohibited. See [LICENSE](./LICENSE) for details.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with Hot Module Replacement |
| `npm run build` | Type-check + production build (outputs to `dist/`) |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Lint with ESLint |

## Project Structure

Each component lives in its own folder alongside any CSS it owns:

```
src/
 App.tsx
 components/
    About/                About.tsx
    Contact/              Contact.tsx
    Experience/           Experience.tsx
    Footer/               Footer.tsx
    FrontLine/            FrontLine.tsx  hero.css
    Navigation/           Navigation.tsx  navigation-responsive.css
    ParticleBackground/   ParticleBackground.tsx
    Projects/             Projects.tsx  slider.css
    TechStack/            TechStack.tsx  techStack.css
 assets/
```

## Key Dependencies

| Package | Purpose |
|---|---|
| `react` + `react-dom` | UI framework |
| `typescript` | Type safety |
| `vite` | Build tool with HMR |
| `tailwindcss` v4 | Utility-first CSS |
| `react-slick` + `slick-carousel` | Projects carousel |
| `react-icons` | SVG icon library |

## Resume Download

Place your resume at `public/Sushant_Paikarao_Resume.pdf`.
The **Hire Me** button (navbar + hero) will trigger a direct browser download.

## License

Copyright (c) 2026 Sushant Paikarao. All Rights Reserved.

This source code is **not open source**. You may view it for personal reference or hiring evaluation only. Any copying, redistribution, or reuse without explicit written permission is strictly prohibited.

See the full [LICENSE](./LICENSE) file for terms.
