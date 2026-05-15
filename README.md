# AnointedCoder Platform

A modern educational SaaS platform for live group tutoring, course delivery, and student/tutor subscriptions. Built and maintained by AnointedCoder (anointedcoder@gmail.com).

Inspired by Udemy, Coursera, Notion, and Discord, focused on:

- Tutor-led group classes (one subject per tutor)
- Student subscriptions and progress tracking
- Course hierarchy (Course, Module, Lesson) with videos, PDFs, and notes
- Live sessions via Google Meet
- Realtime messaging between tutors and students
- Admin moderation and tutor approval workflows
- AI-powered learning tools (later phases)

## Tech stack

| Layer | Technology |
| --- | --- |
| Monorepo | pnpm workspaces, Turborepo |
| Frontend | Next.js App Router, TypeScript strict, Tailwind, shadcn/ui, Framer Motion, TanStack Query, Zustand, React Hook Form, Zod |
| Backend | NestJS, REST only |
| Database | PostgreSQL on Neon, Prisma ORM |
| Auth | Clerk |
| Storage | Cloudflare R2 |
| Realtime | Socket.IO |
| Payments | Stripe, Paystack |
| Hosting | Vercel (web), Railway (api) |
| Meetings | Google Meet |

## Repository layout

```
apps/
  web/      Next.js application, dashboards, marketing site
  api/      NestJS REST API (Phase 1 is a shell with /health only)

packages/
  ui/             shadcn primitives and shared design system
  types/          Zod schemas and DTOs shared between web and api
  utils/          Pure helpers, safe for both web and api
  tsconfig/       Shared TypeScript presets
  eslint-config/  Shared ESLint config

docs/
  architecture.md, contributing.md, design-system.md
```

## Getting started

```bash
pnpm install
cp .env.example apps/web/.env.local
cp .env.example apps/api/.env
pnpm dev
```

Visit:

- Web: http://localhost:3000
- API health: http://localhost:3001/health

## Conventions

- TypeScript strict mode everywhere, no `any`.
- Feature-based folders under `apps/web/src/features/<feature>`. Never global `components`, `hooks`, `services` folders.
- Controller, Service, Repository on the backend. UI, Hook/Action, API, Backend on the frontend.
- All inputs validated with Zod. All forms use React Hook Form plus the Zod resolver.
- All role checks happen server-side. Client checks are UX hints only.
- No em dashes in code, comments, or docs.

## Phases

- Phase 1, Foundation: monorepo, design system, auth, role gates, dashboards shells. (current)
- Phase 2, User systems: student, tutor, admin, super-admin features.
- Phase 3, Course system.
- Phase 4, Live classes with Google Meet.
- Phase 5, Payments and subscriptions.
- Phase 6, Chat and support.
- Phase 7, Search and discovery.
- Phase 8, AI features.

See [docs/architecture.md](./docs/architecture.md) for the full plan.

## License

Proprietary. Copyright AnointedCoder.
