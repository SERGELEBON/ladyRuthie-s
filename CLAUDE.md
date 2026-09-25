# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**LadyRuthie's Events Center** — a single-page Next.js website for an events venue in Haatso, Accra, Ghana. The site is bilingual (English/French) and showcases event spaces, services, packages, and real client photography blended with AI-generated imagery.

**Tech Stack**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Prisma (SQLite), Bun runtime, shadcn/ui components.

**Design System**: Deep plum + gold color palette (#4A1E3D, #6B2A55, #C9A227), Fraunces serif for headings, Work Sans for body text, square corners, generous vertical rhythm. Matches the client's on-site signage aesthetic.

## Development Commands

```bash
# Development
bun dev              # Start dev server on port 3000, logs to dev.log
bun run lint         # Run ESLint

# Database (Prisma + SQLite)
bun run db:generate  # Generate Prisma client after schema changes
bun run db:push      # Push schema to SQLite (--accept-data-loss)
bun run db:migrate   # Create and apply migration
bun run db:reset     # Reset database and apply all migrations

# Production build
bun run build        # Build for production (standalone output)
bun start            # Run production server from .next/standalone/
```

## Architecture

### Single-Page Structure
The site is a **single-page application** (only the `/` route is exposed). All "pages" are scroll sections + modals/dialogs within one route. This design choice was made per sandbox rules during initial development.

### Key Directories
- `src/app/` — Next.js App Router pages and API routes
- `src/components/site/` — LadyRuthie's-specific components (Hero, Header, EventSpaces, Gallery, etc.)
- `src/components/ui/` — shadcn/ui primitives (accordion, dialog, button, etc.)
- `src/lib/` — Utilities, data layer, and i18n context
- `public/images/` — Event photos (real client photos + AI-generated imagery)
- `prisma/` — Database schema (User, Post models currently unused by the events site)

### Data Layer (`src/lib/site-data.ts`)
Centralized data module containing:
- `SITE` — Real client information (name, tagline, address, phone, email, social handles, GPS code)
- `EVENT_SPACES` — 4 venue types (The Garden, Banquet Hall, Executive Boardroom, The Open Lawn)
- `FACILITIES` — Catering & Bar, Decoration & Florals, Stage/Sound/AV, Event Planning
- `QUICK_SERVICES` — Photography/videography, bridal suite, parking, Wi-Fi, generators, etc.
- `OFFERS` — 3 packages (Signature Wedding, Corporate Meeting, Birthday & Social)
- `GALLERY` — 12 images (first 3 are real client photos, rest are AI-generated)
- `NAV_LINKS` — Navigation structure
- `UI` — Full bilingual dictionary (English/French)

**CRITICAL**: When updating site copy or venue details, edit `src/lib/site-data.ts` — do NOT hardcode strings in components. All copy flows from this single source.

### Internationalization (`src/lib/i18n.tsx`)
Custom i18n provider using `useSyncExternalStore` with localStorage persistence. The implementation includes a **hydration gate** to prevent server/client mismatches:
- Server always renders English
- Client matches server on first paint, then switches to persisted language after hydration
- LocalStorage key: `ladyruthies-lang`

**When adding translatable strings**: Add both `en` and `fr` keys to the `UI` object in `site-data.ts`.

### Component Portal Pattern
`FullScreenMenu.tsx` uses `createPortal` to render the overlay outside the Header's DOM hierarchy. This avoids CSS containing-block issues where `backdrop-blur` on the header would trap `position:fixed` children. The pattern includes a `useSyncExternalStore`-based `useMounted` hook for hydration-safe portaling.

**When creating new full-screen overlays**: Use the same portal-to-body pattern to ensure proper viewport coverage.

### Image Strategy
The site blends **real client photography** (3 uploaded event photos) with **AI-generated imagery** (17 renders for spaces/services/gallery where no real photo exists):
- Real photos: `/images/real-hero-canopy.jpg`, `/images/real-garden-tent.jpg`, `/images/real-lawn-chiavari.jpg`, `/images/about-signage.jpg` (actual on-site signage)
- AI renders: `/images/space-*.png`, `/images/service-*.png`, `/images/offer-*.png`, `/images/gallery-*.png`

Gallery captions distinguish real photos with "Real event —" prefix in both languages.

### API Routes
- `src/app/api/booking/route.ts` — POST endpoint for enquiry form submissions. Currently logs to console; extend for email/database persistence.

## Configuration Notes

- **Standalone output**: `next.config.ts` sets `output: "standalone"` for containerized deployment. The build script copies static assets to `.next/standalone/` after build.
- **TypeScript**: `ignoreBuildErrors: true` is enabled (consider removing for stricter checks).
- **React Strict Mode**: Disabled (`reactStrictMode: false`) to avoid double-mount issues during development.
- **Prisma**: Uses SQLite. The current schema (User, Post) is a template and not actively used by the events site.

## Real Client Data (Do Not Modify Without Authorization)

- **Name**: LadyRuthie's Events Center
- **Tagline**: "a touch of class" (always in English, even in French UI — it is the brand's literal signature)
- **Phone**: 053 450 8192
- **WhatsApp**: +233 53 450 8192
- **Email**: eladyruthie@gmail.com
- **Address**: 5 Ataa Sowah Drive, Haatso, Accra (Behind Shalom Presbyterian Church, Mabey, Haatso)
- **GPS Code**: GE-261-9142
- **Social**: @ladyruthiesevents (Instagram, YouTube), LadyRuthie's Events Center (Facebook)
- **Services** (per on-site signage): Weddings & Receptions, Business Meetings, Private Parties, Kids' Parties, Funeral Celebrations, Photoshoots, Lodging
- **Event Capacity**: Up to 500 guests

This data is hardcoded in `SITE` object in `src/lib/site-data.ts`. Changes require client approval.

## Testing & Verification

No automated test suite is currently configured (the `tests/` directory contains shell scripts for runtime containers, not unit tests). When making changes:
1. Run `bun run lint` to catch type/lint errors
2. Start dev server and manually verify in browser (desktop + mobile viewports)
3. Test bilingual toggle (EN ↔ FR)
4. Verify booking form submission (check `dev.log` for `[LadyRuthie's enquiry]` log entry)
5. Test full-screen menu, WhatsApp button, mobile action bar, gallery lightbox, space detail dialogs

## Known Constraints

- **Single-page limitation**: All content must live within `src/app/page.tsx`. Do not create additional routes without discussing architectural shift.
- **Image paths**: All images must be in `/public/images/` and referenced as `/images/filename.ext` (no Next.js Image optimization for most photos due to static export requirements).
- **Hydration sensitivity**: The i18n system is carefully gated to prevent mismatches. Do not bypass the hydration flag when accessing `lang` from context.
