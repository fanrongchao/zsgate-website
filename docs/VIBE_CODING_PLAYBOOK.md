# Vibe Coding Playbook

## Workflow
1. Freeze page brief and acceptance criteria.
2. Ask Gemini to generate implementation from docs-ai files.
3. Run lint, typecheck, tests, and e2e smoke.
4. Review visual, motion, SEO, and mobile behavior.

## PR Rules
- One capability per PR.
- Any UI change must update `docs-ai` files in the same app.
- Include before/after screenshots for visual changes.

## Quality Gate
- `pnpm lint`
- `pnpm typecheck`
- `pnpm test`
- `pnpm test:e2e` for page-level changes
