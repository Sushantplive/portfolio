# Sushant Paikarao — Portfolio

Personal developer portfolio for **Sushant Paikarao**, a Senior Frontend Engineer based in Pune, India.

Built with React 19, TypeScript, Vite, and Tailwind CSS v4.

## Live Sections

| Section | Description |
|---|---|
| **Hero** | Animated particle background, intro text, Hire Me & Connect CTAs |
| **About** | Bio, work history, profile image, and embedded Tech Stack |
| **Projects** | Image/card slider powered by react-slick |
| **Contact** | Email, Instagram, and X (Twitter) links |

## Project Structure

```
portfolio/
 sushant-portfolio/       # Vite + React app
     public/
        Sushant_Paikarao_Resume.pdf
        profile*.png/jpeg
     src/
         App.tsx
         components/
            About/
               About.tsx
            Contact/
               Contact.tsx
            Experience/
               Experience.tsx
            Footer/
               Footer.tsx
            FrontLine/
               FrontLine.tsx
               hero.css
            Navigation/
               Navigation.tsx
               navigation-responsive.css
            ParticleBackground/
               ParticleBackground.tsx
            Projects/
               Projects.tsx
               slider.css
            TechStack/
                TechStack.tsx
                techStack.css
         assets/
```

## Getting Started

```bash
cd sushant-portfolio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 7** — build tool with HMR
- **Tailwind CSS v4** — utility-first styling
- **react-slick** — projects carousel
- **react-icons** — icon library
- **Canvas API** — custom particle animation background

## Resume

Place your resume PDF at `public/Sushant_Paikarao_Resume.pdf`. The **Hire Me** button in the navigation and hero section will automatically trigger a download.

## Contact

- Email: sushant.paikarao.dev@gmail.com
- LinkedIn: [sushantpaikarao](https://www.linkedin.com/in/sushantpaikarao/)
- GitHub: [Sushantplive](https://github.com/Sushantplive)
