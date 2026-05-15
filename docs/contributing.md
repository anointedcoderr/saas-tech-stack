# Contributing

## Requirements

- Node 20 LTS
- pnpm 9 or newer
- A Clerk account and a test application (free)

## Setup

```bash
pnpm install
cp .env.example apps/web/.env.local
cp .env.example apps/api/.env
```

Edit `apps/web/.env.local` and paste your Clerk publishable and secret keys from the Clerk dashboard.

## Day to day

```bash
pnpm dev           # runs all packages in parallel (Next.js + NestJS)
pnpm typecheck     # workspace-wide strict TypeScript check
pnpm lint          # workspace-wide ESLint
pnpm format        # Prettier write
```

Filter by package:

```bash
pnpm --filter @anointedcoder/web dev
pnpm --filter @anointedcoder/api start:dev
```

## Branching

- `main` is the protected default branch.
- Feature branches: `phase-<n>/<short-description>`.

## Commit style

Short, present-tense imperative. Group changes by area in the body when needed.

```
phase-1: scaffold monorepo, add Clerk middleware, build shared UI
```

## House rules

- No `any`. The eslint config bans it.
- No `!` non-null assertions. Use a guard or assert.
- No em dashes or long dashes. Commas and standard punctuation only.
- No global `components`, `hooks`, or `services` folders. Organize by feature.
- All forms use React Hook Form plus the Zod resolver.
- All role checks happen server-side via `requireRole`.
- Never leak secret keys into client bundles. Only `NEXT_PUBLIC_*` ships to the browser.

## Code review checklist

- [ ] Strict TypeScript passes
- [ ] Lint passes with zero warnings
- [ ] Feature added under `features/<name>`, not in a global folder
- [ ] Inputs validated with Zod
- [ ] Server-side role guards in place for any new protected page
- [ ] No em dashes, no third-party AI vendor strings, no fake placeholders
