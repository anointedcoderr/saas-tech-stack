# Design system

A short, focused academic style. Notion and Linear are the closest references. The goal is calm typography, generous spacing, and restrained motion.

## Principles

1. Typography first. The reading experience matters more than the chrome around it.
2. Spacious by default. Padding generously, line-height generously.
3. Restrained color. Slate neutrals, one primary, one accent, one destructive.
4. Subtle motion. No marquee, no parallax, no decorative loops.
5. Accessible. Visible focus rings, color contrast checks, keyboard reachable controls.

## Tokens

Colors are defined as HSL CSS variables in `apps/web/src/app/globals.css` and consumed by `packages/ui/tailwind.preset.cjs`.

| Token | Light | Dark |
| --- | --- | --- |
| `--background` | white | slate-950 |
| `--foreground` | slate-900 | slate-50 |
| `--muted` | slate-100 | slate-800 |
| `--border` | slate-200 | slate-800 |
| `--primary` | blue-600 | blue-500 |
| `--accent` | indigo-600 | indigo-500 |
| `--destructive` | red-600 | red-500 |

## Fonts

- `Inter` for body and UI, loaded via `next/font/google`. Variable: `--font-sans`.
- `Geist` for display and monospace, from the `geist` package. Variables: `--font-display`, plus a separate mono variable.

## Components

shadcn primitives live in `@anointedcoder/ui/src/components`. Included in Phase 1:

- `Button`, `Card`, `Input`, `Label`, `Dialog`, `DropdownMenu`, `Sheet`, `Tabs`, `Avatar`, `Badge`, `Separator`, `Skeleton`, `Sonner` (toast), `Tooltip`

Form composition (RHF + Zod) lives in the web app, not in the shared package, because it depends on React Hook Form.

## Layout

- Sidebar collapses to a Sheet drawer at `md` and below.
- Tables fall back to stacked cards at `sm`.
- Page header has a max width of `max-w-7xl` and is consistently 8 px padded on mobile, 32 px on desktop.

## Motion

Framer Motion is allowed in three places:

- Page mount fade and small Y translate.
- Sidebar slide in and out.
- Dropdown spring on open.

Anything beyond that needs a reason in the PR.

## Iconography

Lucide icons only. Use `text-muted-foreground` for inactive icons. Never recolor an icon as the only signal, always pair with text or a clear state.
