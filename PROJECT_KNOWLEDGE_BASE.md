# FULLCIRCLE STUDIO — COMPLETE PROJECT KNOWLEDGE BASE
# Feed this entire file as context to any AI assistant to continue building this project.

---

# SECTION 1: WHO IS THE USER

Santhanakrishnan is a freelance web developer building websites for clients. Currently working with client Rafic on Full Circle System (interior design brand). Comfortable with Next.js, TailwindCSS, Framer Motion, Three.js stack. Prefers to discuss architecture thoroughly before coding. Values clean, readable code and performance optimization.

---

# SECTION 2: PROJECT OVERVIEW

Building a cinematic, storytelling brand website for **Full Circle System**, an interior design startup by client **Rafic**. This is Website 1 (B2C) — a static branding site with future e-commerce upgrade path.

- **Domain:** fullcirclestudio.com (pending purchase)
- **Target audience:** B2C — homeowners, interior enthusiasts (mobile-first)
- **Pages:** Home, About, Services, Portfolio, Contact, FAQ
- **Contact method:** WhatsApp FAB + FAQ FAB
- **No products/e-commerce section for now** — future phase

---

# SECTION 3: BRAND IDENTITY

- **Brand name:** fullcircle studio.
  - "fullcircle" → light gray `#d9d9d9`
  - "studio" → jet black `#0b0b0b`
  - Dot (.) → accent red `#d54e5e`
- **Tagline:** "No corner cuts"
- **Theme:** Modern minimalism + Neo-classical
- **Logo:** Use placeholder during development

---

# SECTION 4: COLOR PALETTE

| Token              | Hex       | Usage                                      |
|--------------------|-----------|---------------------------------------------|
| white-smoke        | `#eeece8` | Page backgrounds, splash background         |
| light-gray         | `#d9d9d9` | "FullCircle" text, subtle borders           |
| jet-black          | `#0b0b0b` | "Studio" text, headings, body text          |
| granite-gray       | `#6b6762` | Secondary text, captions                    |
| ash-gray           | `#bcbab4` | Dividers, disabled states                   |
| albescent-white    | `#e1d8cb` | Card backgrounds, hover states              |
| machine-gun-metal  | `#454545` | Dark text variant                           |
| placebo            | `#e6e6e6` | Input borders, section separators           |
| accent-red         | `#d54e5e` | Red dot, section title underlines, CTAs     |

**CRITICAL RULE: No black backgrounds anywhere. Black (#0b0b0b) is used ONLY for text.**

---

# SECTION 5: TECH STACK

| Layer       | Technology                    |
|-------------|-------------------------------|
| Framework   | Next.js 14.2.35 (App Router)  |
| Core React  | React 18.3.1                  |
| Export      | Static (`output: 'export'`)   |
| Styling     | TailwindCSS + SCSS Modules    |
| Animations  | Framer Motion                 |
| 3D (splash) | Three.js / React Three Fiber  |
| Icons       | Lucide React                  |
| Hosting     | Vercel (free tier)            |
| SEO         | next-sitemap                  |

### NPM Packages to Install
```
npm install sass framer-motion three @react-three/fiber lucide-react next-sitemap @types/three
```

---

# SECTION 6: CODING CONVENTIONS

## Styling — SCSS Modules with @apply

**NEVER write 10+ Tailwind utility classes directly in JSX.** Always use SCSS modules:

```scss
// Component.module.scss
.container {
  @apply flex items-center justify-center min-h-screen bg-white-smoke;
}
```

```tsx
// Component.tsx
import styles from './Component.module.scss';
<div className={styles.container}>
```

- Every component gets a co-located `.module.scss` file
- Use semantic class names (`.hero`, `.title`, `.card`)
- `@apply` Tailwind utilities inside SCSS classes
- Short utility chains (1-3 classes) are acceptable inline

## Components

- Functional components with TypeScript
- `'use client'` only where needed (interactivity, hooks, Framer Motion)
- Co-locate component + SCSS module + types in same directory
- No component libraries (no shadcn, no Radix, no MUI) — custom UI only

## File Naming

- Components: `PascalCase.tsx`
- SCSS modules: `PascalCase.module.scss`
- Hooks: `useCamelCase.ts`
- Data/utils: `kebab-case.ts`

---

# SECTION 7: KEY ARCHITECTURE DECISIONS

## 7.1 Splash Screen (session-based)

The splash is a cinematic intro that plays once per browser session.

### 3-Phase Flow:

**Phase 1 — Brand Animation (~2.5s, Framer Motion)**
1. Screen starts solid white-smoke (`#eeece8`)
2. "FullCircle" fades/slides in from left in light gray (`#d9d9d9`), 0ms-800ms
3. "Studio" fades/slides in from right in jet black (`#0b0b0b`), 400ms-1200ms
4. Red dot (`.`) scales up with bounce easing, 1000ms-1400ms
5. Brief hold, 1400ms-2000ms
6. Brand name scales down and fades, 2000ms-2500ms

**Phase 2 — Circle Reveal (~1.5s, Three.js shader)**
1. Circular mask starts at center, radius = 0
2. Circle expands outward with easeInOut
3. Inside circle: homepage content visible
4. Outside circle: splash background
5. Circle reaches full viewport diagonal
6. Canvas unmounts

**Phase 3 — Cleanup**
1. SplashProvider sets `splashDismissed = true` in React state + `sessionStorage`
2. Entire SplashScreen component unmounts
3. Circle menu, FABs, page content become interactive

### Dev Toggle:
- URL query param: `?skipSplash=true`
- OR env var: `NEXT_PUBLIC_SKIP_SPLASH=true`
- When active, splash is completely skipped

### Three.js Loading Strategy:
- Dynamically imported with `next/dynamic` (ssr: false)
- Only rendered when `splashPhase === 'reveal'`
- Loads lazily during Phase 1 brand animation (~2.5s buffer)
- Falls back to CSS `clip-path: circle()` if WebGL unavailable
- On repeat visits (same session), Three.js is never loaded at all

## 7.2 Scroll Storytelling (Design → Detail → Execute → Delivery)

The user scrolls through a tall container but feels like they're on the same page as 4 steps animate in sequence.

### Technical Approach:
1. `<StorytellingSection>` = container with `height: 400vh` (4x viewport)
2. Inside: `position: sticky; top: 0; height: 100vh` inner wrapper stays pinned
3. Framer Motion `useScroll` with target set to the 400vh container
4. `scrollYProgress` (0 to 1) maps to step visibility:
   - 0.00–0.25 = Step 1 (Design)
   - 0.25–0.50 = Step 2 (Detail)
   - 0.50–0.75 = Step 3 (Execute)
   - 0.75–1.00 = Step 4 (Delivery)
5. Each `<StoryStep>` uses `useTransform` for opacity, translateY, scale
6. Outgoing step fades out + slides up, incoming step fades in from below

### Why this approach (not actual scroll hijacking):
- Preserves native scroll physics, accessibility, mobile touch
- Same technique as Apple product pages and Stripe landing pages

### Mobile:
- Reduce container from `400vh` to `300vh` for faster progression
- Simplify animations (fade only, no parallax)
- `prefers-reduced-motion`: show all 4 steps stacked, no animation

## 7.3 Navigation — Circle Menu

- 3 horizontal dots (not traditional navbar)
- Fixed top-right, appears only after splash completes
- On click: dots animate, full-screen overlay slides in
- Overlay has staggered nav links: Home, About, Services, Portfolio, Contact, FAQ
- Links are large, well-spaced, center-aligned
- Close by clicking dots again (now showing X state)
- Minimum 44x44px tap target

## 7.4 FABs (Floating Action Buttons)

**WhatsApp FAB:**
- Fixed bottom-right, 24px from edges
- Green circle (#25D366) with WhatsApp icon
- Links to `https://wa.me/91XXXXXXXXXX?text=Hi%20...` (placeholder number)
- `target="_blank"`, `rel="noopener noreferrer"`
- Subtle pulse animation on idle
- Hidden during splash

**FAQ FAB:**
- Fixed bottom-right, stacked above WhatsApp FAB
- Brand-colored circle with question mark icon
- Uses Next.js `<Link href="/faq">` — navigates to separate FAQ page
- Hidden during splash

### Z-Index Layering:
```
Splash screen:     z-50
Circle menu:       z-40
Menu overlay:      z-40
FABs:              z-30
Page content:      z-0
```

---

# SECTION 8: STATE MANAGEMENT

No external state libraries needed. Three mechanisms:

### SplashProvider (React Context)
```
SplashContext {
  splashDismissed: boolean
  splashPhase: 'brand' | 'reveal' | 'done'
  dismissSplash: () => void
}
```
- Checks `sessionStorage.getItem('fcs-splash-shown')` on mount
- If found, skips splash entirely
- Dev toggle via env var or query param

### Circle Menu State
- Local `useState` in `CircleMenu.tsx` — just `isOpen: boolean`

### Scroll Position
- Framer Motion's `useScroll` + `useMotionValueEvent` — no global state needed

---

# SECTION 9: MOBILE-FIRST RULES

Mobile users are the PRIMARY audience — never compromise mobile quality.

| Breakpoint | Tailwind Prefix | Target |
|---|---|---|
| Default (0px+) | (none) | Mobile phones |
| 640px+ | `sm:` | Large phones / small tablets |
| 768px+ | `md:` | Tablets |
| 1024px+ | `lg:` | Laptops |
| 1280px+ | `xl:` | Desktops |

- Base CSS = mobile, scale up with breakpoints
- Typography uses `clamp()` for responsive sizing
- All tap targets minimum 44x44px
- Storytelling: 300vh mobile, 400vh desktop
- Portfolio grid: 1 col mobile, 2 tablet, 3 desktop
- Test mobile FIRST, desktop second

---

# SECTION 10: SEO REQUIREMENTS

- Every page: unique `title`, `description`, `openGraph`, and `twitter` metadata
- Semantic HTML: `<main>`, `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`
- Single `<h1>` per page, proper heading hierarchy
- Schema.org `LocalBusiness` JSON-LD in root layout
- Dynamic `sitemap.ts` and `robots.ts` configured natively via Next.js App Router
- Canonical URLs on every page
- Alt text on ALL images
- **CRITICAL: Splash screen is a visual overlay — all content is in the DOM for crawlers. Never gate content behind animations.**

---

# SECTION 11: PERFORMANCE TARGETS

- Lighthouse: 95+ on all four metrics (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1.5s
- Images: WebP, < 100KB each, lazy-loaded
- Three.js: dynamic import, separate chunk, loads only on first session visit
- TailwindCSS: purged at build time
- Static export: CDN-served from Vercel edge

---

# SECTION 12: FOLDER STRUCTURE

```
app/
  layout.tsx              # Root layout + SplashProvider + fonts + metadata
  page.tsx                # Homepage
  globals.scss            # Tailwind directives + CSS custom properties
  about/page.tsx
  services/page.tsx
  portfolio/page.tsx
  portfolio/[slug]/page.tsx
  contact/page.tsx
  faq/page.tsx

components/
  splash/
    SplashScreen.tsx          # Orchestrator: brand animation + circle reveal
    SplashScreen.module.scss
    BrandAnimation.tsx        # "FullCircle" + "Studio" + red dot animation
    BrandAnimation.module.scss
    CircleRevealCanvas.tsx    # Three.js circle mask wipe transition
  layout/
    CircleMenu.tsx            # 3-dot circle menu
    CircleMenu.module.scss
    CircleMenuOverlay.tsx     # Full-screen nav overlay
    CircleMenuOverlay.module.scss
    WhatsAppFAB.tsx
    WhatsAppFAB.module.scss
    FAQFAB.tsx
    FAQFAB.module.scss
    Footer.tsx
    Footer.module.scss
    PageTransition.tsx
  home/
    HeroSection.tsx
    HeroSection.module.scss
    StorytellingSection.tsx   # Scroll-hijacked 4-step container
    StorytellingSection.module.scss
    StoryStep.tsx             # Individual step: Design | Detail | Execute | Delivery
    StoryStep.module.scss
    ServicesPreview.tsx
    ServicesPreview.module.scss
    PortfolioPreview.tsx      # 3 items + "View More"
    PortfolioPreview.module.scss
    CTASection.tsx
    CTASection.module.scss
  about/
    BrandStory.tsx
    TeamSection.tsx
    ValuesSection.tsx
  services/
    ServiceCard.tsx
    ServiceGrid.tsx
  portfolio/
    ProjectCard.tsx
    ProjectGrid.tsx
  contact/
    ContactForm.tsx
    ContactInfo.tsx
  faq/
    FAQAccordion.tsx
    FAQItem.tsx
  ui/
    SectionHeading.tsx        # Heading with red underline accent
    SectionHeading.module.scss
    Button.tsx
    Button.module.scss
    Container.tsx
    Container.module.scss
    AnimatedSection.tsx       # Framer Motion scroll-triggered reveal wrapper
    BrandName.tsx             # "FullCircle" + "Studio" + dot styled component
    BrandName.module.scss

hooks/
  useSplashSession.ts         # sessionStorage + dev toggle
  useScrollHijack.ts          # Scroll logic for storytelling
  useMediaQuery.ts            # Responsive breakpoint detection

providers/
  SplashProvider.tsx          # React Context for splash state

lib/
  constants.ts                # Colors, WhatsApp number, brand text, breakpoints
  portfolio-data.ts           # Static portfolio data (3 projects)
  services-data.ts            # Static services data
  faq-data.ts                 # Static FAQ data
  fonts.ts                    # Next.js font loader
  metadata.ts                 # Shared SEO metadata helpers

public/
  images/
    portfolio/
    services/
    hero/
    team/
  favicon.ico
  og-image.jpg
  robots.txt
  sitemap.xml
```

---

# SECTION 13: STATIC EXPORT COMPATIBILITY

Using `output: 'export'` in `next.config.ts`:

- No API routes — all data in static TypeScript files
- Dynamic routes (`/portfolio/[slug]`) need `generateStaticParams()`
- Three.js components need `'use client'` + `next/dynamic` with `ssr: false`
- Images use `unoptimized: true` in next config (pre-optimize to WebP manually)
- `sessionStorage` only accessed in `useEffect` (client-side only)
- `trailingSlash: true` for clean static URLs

---

# SECTION 14: BUILD ORDER (Implementation Sequence)

| Status | Phase | Tasks |
|---|---|---|
| ✅ | 1. Project Setup | Init Next.js 14.2+, React 18.3, TypeScript, Tailwind, SCSS. Configure next.config with static export. Set up Tailwind theme with color tokens. Create globals.scss with CSS custom properties. |
| ✅ | 2. Data Layer | Create constants.ts, portfolio-data.ts, services-data.ts, faq-data.ts. Define TypeScript types. |
| ✅ | 3. Layout Shell | Root layout with fonts (Plus Jakarta Sans/Inter), metadata, SplashProvider. Footer, Container, SectionHeading, BrandName components. |
| ✅ | 4. Splash Screen | SplashProvider + useSplashSession hook. BrandAnimation (Framer Motion). CircleRevealCanvas (Three.js shader). Wire 3-phase flow. |
| ✅ | 5. Navigation | CircleMenu + CircleMenuOverlay. Navigation links. Open/close animations. |
| ✅ | 6. Homepage | HeroSection, StorytellingSection + StoryStep (scroll hijack), ServicesPreview, PortfolioPreview, CTASection. |
| ✅ | 7. Inner Pages | About, Services, Portfolio (listing + detail), Contact, FAQ. |
| ✅ | 8. FABs | WhatsAppFAB and FAQFAB. Position and z-index. |
| 🚧 | 9. Polish | Page transitions, micro-interactions, responsive testing, image optimization, SEO (Sitemap/OG tags implemented), Lighthouse audit. |
| 🚧 | 10. Deploy | GitHub pushed. Vercel deployment and domain DNS pending. |

---

# SECTION 15: DO NOT

- Use black as a background color
- Write long Tailwind class chains in JSX (use SCSS modules with @apply)
- Install component libraries (shadcn, Radix, MUI, etc.)
- Block content from crawlers behind animations
- Use `localStorage` for splash (must be `sessionStorage`)
- Skip `prefers-reduced-motion` fallbacks
- Compromise mobile experience for desktop
- Add products/e-commerce features (this is future phase)
- Use inline styles when SCSS modules can handle it
- Skip alt text on images
- Skip semantic HTML elements

---

# SECTION 16: SOCIAL LINKS (Footer)

- Instagram (placeholder URL)
- Facebook (placeholder URL)
- LinkedIn (placeholder URL)
- WhatsApp (placeholder number)

---

# END OF KNOWLEDGE BASE
