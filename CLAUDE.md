# buffingchi.com — Claude Standards

See global standards at `~/.claude/CLAUDE.md` and `~/.claude/standards/`.

## Stack

React + Vite | Tailwind CSS 4 | React Router v7 | i18next (13 locales, `common` namespace only)

## Branching

- `main` → production (Render auto-deploy)
- `dev` → default branch (integration)
- `feature/*` → local work, PR into `dev`; `dev` → `main` to release

## Subsites

- `games.buffingchi.com` → gaming_app (yahtzee-frontend-6yz5.onrender.com)
- `bookshelfai.buffingchi.com` → book_app (bookshelf-web-vw0s.onrender.com)
- `rulersai.buffingchi.com` → office_holder_cursor (office-holder-cursor.onrender.com)

## Commands

- Dev server: `npm run dev`
- Build: `npm run build`
- Tests (CI): `npm run test:run`
- Tests (coverage): `npm run test:coverage`
- Lint: `npm run lint`
- i18n check: `npm run i18n:check`
- i18n translate: `OPENAI_API_KEY=<key> node scripts/translate.js --locale <code> --namespace common`

## Setup (after cloning)

Run `bash scripts/setup-hooks.sh` to install the required git hooks (gitleaks pre-commit secret scan).
