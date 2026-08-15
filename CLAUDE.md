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
- `reports.buffingchi.com` → reports_site (reports-site-5av7.onrender.com) — hub for small personal static reports; behind Cloudflare Access, not public

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

## Available Agents

These project subagents live in `.claude/agents/` and are invoked via the `Agent` tool (not Skill). Always prefer them over a general-purpose agent for their domain.

| Agent             | `subagent_type`     | When to use                                                                                                                               |
| ----------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| lint-review       | `lint-review`       | Auto-fix lint issues after a lint-gate hook failure                                                                                       |
| plan-issues       | `plan-issues`       | Break a feature/bug/initiative into scoped GitHub issues — investigates code first, drafts for confirmation, then calls `gh issue create` |
| policy-compliance | `policy-compliance` | Check and fix policy violations after a policy-gate hook failure                                                                          |
