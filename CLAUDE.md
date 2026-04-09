# DB Financial Planning — Website

Marketing and information website for DB Financial Planning (Pty) Ltd, an independent financial services provider (FSP #45874) based in Cape Town, South Africa. Built as a React SPA with Vite, TypeScript, and Tailwind CSS.

## 1. Build / Dev / Lint Commands

```bash
bun install           # Install dependencies (project uses Bun as package manager)
npm run dev           # Start Vite dev server — http://localhost:8080
npm run build         # Production build → /dist
npm run build:dev     # Development build (--mode development)
npm run preview       # Preview production build locally
npm run lint          # Run ESLint
npm run test          # Run Vitest (single run)
npm run test:watch    # Run Vitest in watch mode
```

> **Package manager:** Bun (`bun.lock` present). `npm` scripts also work via the `package.json` scripts field.

## 2. Architecture Overview

Pure client-side React SPA. No backend, no database, no API routes. Serves static marketing pages for a financial advisory firm.

**Stack:**
- **Framework:** React 18.3.1 with React Router DOM 6 (BrowserRouter, 4 routes)
- **Build Tool:** Vite 5.4 with `@vitejs/plugin-react-swc` (SWC compiler)
- **Language:** TypeScript 5.8 (loose — `strict: false`, `strictNullChecks: false`)
- **CSS:** Tailwind CSS 3.4 + Shadcn/ui component library (Radix UI primitives)
- **State:** TanStack React Query 5 (configured but minimal current usage)
- **Forms:** React Hook Form 7 + Zod validation
- **Testing:** Vitest 3 + Testing Library (unit), Playwright 1.57 (e2e)
- **Dev Server:** Port `8080` (`::`  — all interfaces)

### 2.1 Directory Layout

```
Application/
├── src/
│   ├── assets/               # Static images (hero-family.jpg, advisor-meeting.jpg, etc.)
│   ├── components/
│   │   ├── ui/               # Shadcn/ui primitives (40+ components: button, card, dialog, etc.)
│   │   ├── Navbar.tsx        # Top navigation — desktop links + mobile hamburger drawer
│   │   ├── Footer.tsx        # Footer — links, FSP compliance info, copyright
│   │   ├── Layout.tsx        # Page wrapper (Navbar + <main> + Footer + WhatsAppButton)
│   │   ├── FadeInSection.tsx # IntersectionObserver fade-in animation wrapper
│   │   ├── WhatsAppButton.tsx# Fixed floating WhatsApp CTA button (bottom-right)
│   │   └── NavLink.tsx       # Custom nav link component
│   ├── pages/
│   │   ├── Index.tsx         # Home — hero, service cards, trust points, provider logos, CTA
│   │   ├── Services.tsx      # Services — individual/family + business offering cards
│   │   ├── Contact.tsx       # Contact — address, WhatsApp, email, compliance badge
│   │   └── NotFound.tsx      # 404 fallback
│   ├── hooks/
│   │   ├── use-mobile.tsx    # Responsive mobile breakpoint detection
│   │   └── use-toast.ts      # Toast notification state hook
│   ├── lib/
│   │   └── utils.ts          # `cn()` utility — clsx + tailwind-merge
│   ├── App.tsx               # Root component — providers + BrowserRouter + routes
│   ├── main.tsx              # React DOM entry point (createRoot)
│   ├── index.css             # Global styles — Tailwind directives + CSS variable theme
│   ├── App.css               # Legacy component-level styles
│   └── vite-env.d.ts         # Vite client type definitions
├── public/
│   ├── icon.png              # Favicon
│   └── robots.txt            # SEO robots directives
├── index.html                # HTML entry — SEO meta, Open Graph, JSON-LD schema markup
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── tailwind.config.ts
├── postcss.config.js
├── eslint.config.js
├── components.json           # Shadcn/ui config
├── playwright.config.ts
├── vitest.config.ts
└── .gitignore
```

### 2.2 Key Entry Points

| File | Role |
|---|---|
| `index.html` | HTML shell — SEO metadata, Open Graph tags, JSON-LD FinancialService schema |
| `src/main.tsx` | React DOM `createRoot` — mounts `<App />` |
| `src/App.tsx` | Root: `QueryClientProvider` + `TooltipProvider` + `BrowserRouter` + route definitions |
| `src/components/Layout.tsx` | Shared page chrome: `<Navbar>` + `<main>{children}</main>` + `<Footer>` + `<WhatsAppButton>` |
| `src/pages/Index.tsx` | `/` — Home page |
| `src/pages/Services.tsx` | `/services` — Services listing |
| `src/pages/Contact.tsx` | `/contact` — Contact details |
| `src/pages/NotFound.tsx` | `*` — 404 catch-all |

**Route map (`App.tsx`):**
```
/           → Index (Home)
/services   → Services
/contact    → Contact
*           → NotFound
```

## 3. Configuration

### Key Config Files

| File | Purpose |
|---|---|
| `vite.config.ts` | Dev server port 8080, `@` alias → `./src`, SWC plugin, lovable-tagger (dev only) |
| `tsconfig.json` | Root TS config — references `tsconfig.app.json` and `tsconfig.node.json` |
| `tsconfig.app.json` | App config — target ES2020, `@/*` → `./src/*`, `strict: false` |
| `tailwind.config.ts` | Theme: primary teal (`hsl(195,46%,30%)`), dark mode class-based, custom animations |
| `postcss.config.js` | Tailwind CSS + Autoprefixer |
| `eslint.config.js` | ESLint 9 flat config — typescript-eslint, react-hooks, react-refresh |
| `components.json` | Shadcn/ui: style `default`, components at `@/components/ui`, utils at `@/lib/utils` |
| `vitest.config.ts` | jsdom environment, globals, pattern `src/**/*.{test,spec}.{ts,tsx}` |
| `playwright.config.ts` | Playwright e2e config (lovable preset) |

### Environment Variables

No `.env` or `.env.example` file exists. The app has **no runtime environment variables** — all configuration is hardcoded or build-time.

**Hardcoded values to update before going live:**
- WhatsApp number in `WhatsAppButton.tsx` — currently `https://wa.me/27000000000` (placeholder)
- Contact email in `Contact.tsx` — `info@dbfinancial.co.za`
- Physical address displayed in `Contact.tsx`

### Tailwind Theme (Custom Colors)

| Token | Value | Usage |
|---|---|---|
| `primary` | `hsl(195, 46%, 30%)` | Teal blue — buttons, headings, accents |
| `secondary` | `hsl(207, 30%, 58%)` | Lighter blue — supporting elements |
| `whatsapp` | `hsl(142, 70%, 40%)` | WhatsApp CTA button |
| Custom animations | `fade-in-up`, `pulse-gentle`, `accordion-down/up` | Section reveals, WhatsApp pulse |

## 4. Database

**There is no database.** This is a fully static SPA with no backend, no ORM, no migrations, and no data persistence layer.

### Local Development

The application runs entirely in the browser. To run locally:

```bash
npm run dev   # Vite dev server at http://localhost:8080
```

### Live / Production Deployment

No CI/CD pipeline is currently configured. Build and deploy manually:

```bash
npm run build          # Outputs static files to /dist
# Upload /dist to your static hosting provider
```

**Suitable hosting targets:** Vercel, Netlify, GitHub Pages, Firebase Hosting, XAMPP (local), or any static file server.

> No `app.yaml`, `Dockerfile`, or `.github/workflows/` exist yet. Add these if deploying to Google Cloud App Engine, Docker, or GitHub Actions.

## 5. Key Dependencies and Their Roles

### Core

| Package | Version | Role |
|---|---|---|
| `react` | 18.3.1 | UI rendering |
| `react-dom` | 18.3.1 | DOM renderer |
| `react-router-dom` | 6.30.1 | Client-side routing (BrowserRouter) |
| `typescript` | 5.8.3 | Type safety |
| `vite` | 5.4.19 | Build tool and dev server |
| `@vitejs/plugin-react-swc` | 3.11.0 | SWC compiler for React — faster than Babel |

### UI & Styling

| Package | Version | Role |
|---|---|---|
| `tailwindcss` | 3.4.17 | Utility-first CSS |
| `@tailwindcss/typography` | 0.5.16 | Prose/body-text typography plugin |
| `tailwindcss-animate` | 1.0.7 | Animation utilities (used for Shadcn transitions) |
| `tailwind-merge` | 2.6.0 | Merge conflicting Tailwind class names safely |
| `clsx` | 2.1.1 | Conditional class name construction |
| `class-variance-authority` | 0.7.1 | Typed component variant composition |
| `@radix-ui/*` | various | 23 headless UI primitives (dialog, dropdown, tabs, etc.) |
| `lucide-react` | 0.462.0 | SVG icon library |
| `next-themes` | 0.3.0 | Dark/light theme switching via CSS variables |

### Forms & Validation

| Package | Version | Role |
|---|---|---|
| `react-hook-form` | 7.61.1 | Form state, validation, submission |
| `@hookform/resolvers` | 3.10.0 | Bridge between react-hook-form and Zod |
| `zod` | 3.25.76 | Schema-based runtime validation |

### UI Enhancements

| Package | Version | Role |
|---|---|---|
| `sonner` | 1.7.4 | Toast notification system |
| `recharts` | 2.15.4 | Chart/graph library (data visualisation) |
| `embla-carousel-react` | 8.6.0 | Carousel/slider |
| `react-day-picker` | 8.10.1 | Calendar / date picker UI |
| `react-resizable-panels` | 2.1.9 | Resizable panel layouts |
| `cmdk` | 1.1.1 | Command palette / combobox |
| `vaul` | 0.9.9 | Drawer component with animations |
| `input-otp` | 1.4.2 | OTP code input fields |
| `date-fns` | 3.6.0 | Date manipulation utilities |

### State Management

| Package | Version | Role |
|---|---|---|
| `@tanstack/react-query` | 5.83.0 | Server/async state management (configured, ready for future API use) |

### Testing

| Package | Version | Role |
|---|---|---|
| `vitest` | 3.2.4 | Unit/integration test runner |
| `@testing-library/react` | 16.0.0 | React component testing utilities |
| `@testing-library/jest-dom` | 6.6.0 | Custom DOM matchers (`toBeInTheDocument`, etc.) |
| `jsdom` | 20.0.3 | Browser DOM emulation for tests |
| `@playwright/test` | 1.57.0 | End-to-end browser testing |

### Dev Tooling

| Package | Version | Role |
|---|---|---|
| `eslint` | 9.32.0 | Linting |
| `typescript-eslint` | 8.38.0 | TypeScript-aware lint rules |
| `eslint-plugin-react-hooks` | 5.2.0 | Enforce React hooks rules |
| `eslint-plugin-react-refresh` | 0.4.20 | Fast Refresh compatibility lint |
| `postcss` | 8.5.6 | CSS post-processing |
| `autoprefixer` | 10.4.21 | Vendor prefix injection |
| `lovable-tagger` | 1.1.13 | Component tagging for Lovable platform (dev only) |

---

## Rules

### Read GLOBALCLAUDE.md
Read and remember the GLOBALCLAUDE.md file at `C:\xampp\htdocs\Claude\GLOBALCLAUDE.MD` at the start of every session.

### Browser Automation / MCP Tools
When using Chrome DevTools MCP or browser automation MCP tools (Playwright, etc.), **always kill stale Chrome processes and clear profiles before starting**. If MCP tools fail **twice**, **stop and ask the user** before continuing to retry. Never waste tokens on repeated failing browser calls.

### Dev Server = Run + Open in Chrome
When asked to "run the dev server" or "open the application", **always open it in Chrome via the Chrome DevTools MCP plugin as well** — don't just start the server. Navigate to `http://localhost:8080` in Chrome after the server is up.

### Read Docs Before Building
Before building or modifying anything that has API docs or documentation, **read the docs first**. Do not attempt implementation by guessing or using outdated patterns.

### Minimize Token Usage — Prefer Editing Over Rewriting
Do **NOT** rewrite files where you can copy them and simply adjust them. Use the Edit tool to make targeted changes instead of the Write tool to replace entire files. Find the fastest path to minimize token usage.

---

## Notes

- **No backend** — If a contact form, lead capture, or data persistence is added in future, you will need to introduce an API layer (e.g., Next.js API routes, a separate Express/Hono server, or a third-party form service like Formspree/EmailJS).
- **React Query is installed** but currently unused. It's ready for use if an API is introduced.
- **Placeholder contact details** — The WhatsApp number (`+27 (0) 00 000 0000`) must be updated before launch.
- **FSP Compliance** — FSP number 45874 appears in the footer and contact page. Do not remove or modify this.

---

## 6. Lessons Learned — Things NOT To Try

> **Instructions for AI agents:** When you make a mistake, take a wrong approach, or discover something that doesn't work on this project, **append a dated entry here**. This serves as a researcher's notebook so future AI instances don't repeat the same errors. Include: what was tried, why it failed, and what to do instead.

<!-- Example entry format:
### YYYY-MM-DD — Short title of the issue
- **What was tried**: Brief description of the approach
- **Why it failed**: Root cause or reason it didn't work
- **What to do instead**: Correct approach or workaround
-->

---

## 7. Best Practices — Things To Try FIRST

> **Instructions for AI agents:** When you discover a more effective approach, shortcut, or pattern that works well on this project — especially one consistent with existing conventions — **append a dated entry here**. This serves as a researcher's notebook so future AI instances start with the best known methods. Include: what was done, why it worked well, and when to apply it.

<!-- Example entry format:
### YYYY-MM-DD — Short title of the pattern
- **What was done**: Brief description of the approach
- **Why it worked well**: Why this was effective or efficient
- **When to apply**: The scenario or context where this should be the first thing tried
-->
