# Architecture

AnointedCoder platform, Phase 1 foundation. This document explains the moving parts and the reasons behind each decision.

## Monorepo

```
apps/
  web/   Next.js App Router
  api/   NestJS REST shell

packages/
  ui/             shadcn primitives, Tailwind preset, design tokens
  types/          Zod schemas and DTOs shared between web and api
  utils/          Pure helpers
  tsconfig/       Shared TypeScript presets
  eslint-config/  Shared ESLint config
```

Managed by pnpm workspaces. Built by Turborepo. Type changes in `@anointedcoder/types` propagate immediately to both the web and api packages.

## Frontend (apps/web)

Next.js App Router with TypeScript strict mode.

### Routing strategy

| URL prefix | Group | Layout enforces |
| --- | --- | --- |
| `/landing`, `/pricing`, `/about`, `/tutors` | `(public)` | None |
| `/sign-in`, `/sign-up`, `/role-select` | `(auth)` | Signed-in for `/role-select` |
| `/student/*` | `/student` | `requireRole('STUDENT')` |
| `/tutor/*` | `/tutor` | `requireRole('TUTOR')` |
| `/admin/*` | `/admin` | `requireRole(['ADMIN', 'SUPER_ADMIN'])` |
| `/super-admin/*` | `/super-admin` | `requireRole('SUPER_ADMIN')` |

`requireRole` is a server-side helper that reads the signed Clerk session, checks the role claim, and redirects mismatches before any markup renders.

### Feature folders

All business logic lives under `apps/web/src/features/<feature>`:

```
features/
  shared/         App shell, theme, query client, api client, paths, hooks
  marketing/     Hero, FeatureGrid, PricingTable, Footer, PublicNav
  auth/           RoleSelectForm and Zod schemas
  students/       Student dashboard shell, hooks, services
  tutors/         Tutor dashboard shell, hooks, services
  admin/          Admin dashboard shell, hooks, services
  super-admin/    Super admin dashboard shell, hooks, services
```

Routes under `app/` stay thin and only compose features. Never put hooks or services in global folders.

### Providers

`AppProviders` wraps in this order:

```
ThemeProvider
  ClerkProviderWrapper
    QueryProvider
      TooltipProvider
        children
        Toaster
```

Clerk needs theme to resolve before render, hence ThemeProvider on the outside.

### API client

`features/shared/lib/api-client.ts` is a typed fetch wrapper. Pass a Zod schema with every call so responses are validated before they leak into the rest of the app.

```ts
const data = await apiClient('/dashboard?role=student', DashboardSummarySchema);
```

Base URL is `NEXT_PUBLIC_API_BASE_URL`. Phase 1 points it at `/api/mock`. Phase 2 onwards points at the deployed NestJS URL. Same code, different env var.

## Backend (apps/api)

NestJS shell only in Phase 1.

- `main.ts` boots with Helmet, CORS, and a global `ValidationPipe` configured for whitelist plus transform.
- `health/health.controller.ts` exposes `GET /health` for liveness probes.
- No Prisma, no business modules, no Clerk webhook yet. Phase 2 adds those.

## Auth

Clerk handles sessions, sign-in, sign-up, and metadata. The Next.js middleware (`apps/web/middleware.ts`) reads the session at the edge and protects role-specific URL prefixes.

Roles are stored on `user.publicMetadata.role`. The `/api/role-select` route handler updates it server-side using the Clerk server SDK. Once a role is set, students and tutors cannot change their own role; admins must intervene.

## Design system

- Fonts: Inter for body and UI, Geist for display, exposed as `--font-sans` and `--font-display`.
- Colors: slate base, blue primary, indigo accent. Defined as HSL CSS variables in `globals.css` and consumed by the Tailwind preset.
- Dark mode via `next-themes` with `attribute="class"`. shadcn primitives respect `.dark` automatically.
- Motion: Framer Motion only for page mount fade, sidebar slide, dropdown spring.

## Security

- Strict CSP-ready security headers in `next.config.mjs`.
- All inputs validated by Zod. All forms use React Hook Form plus `@hookform/resolvers/zod`.
- Env validated at boot by `lib/env.ts`. Misconfiguration crashes immediately rather than silently.
- Role checks happen server-side. Client checks are UX hints only.
- No secret keys in client bundles. Only `NEXT_PUBLIC_*` vars ship to the browser.
- No `dangerouslySetInnerHTML` anywhere in Phase 1.

## Scalability

- Feature folders mean adding Phase 3 courses or Phase 4 live classes does not touch existing features.
- Turborepo caches `typecheck`, `lint`, and `build` outputs. CI stays fast as the repo grows.
- Shared Zod schemas catch contract drift before deploy.
- TanStack Query handles cache, refetch, and retry policies once.

## Phase plan

| Phase | Scope |
| --- | --- |
| 1 (this) | Foundation: monorepo, design system, Clerk auth, role gates, dashboard shells |
| 2 | User systems: student, tutor, admin, super-admin features with NestJS backend |
| 3 | Course system: course, modules, lessons, progress tracking |
| 4 | Live classes: Google Meet, calendar, attendance |
| 5 | Payments: Stripe, Paystack, invoices, payouts |
| 6 | Chat and support |
| 7 | Search and discovery, public tutor profiles |
| 8 | AI features |
