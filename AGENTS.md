# AGENTS.md - Websites Monorepo

## 1. Repository Goal
Maintain four marketing/documentation websites in one monorepo with a unified TanStack + React stack and AI-assisted workflow.

## 2. Directory Responsibilities
- `apps/*`: deployable websites (`xfa-website`, `zhsjf-website`, `aihunt-website`, `zsgate-website`)
- `apps/*/docs-ai`: per-site Gemini collaboration contracts
- `packages/*`: shared schema/config/ui building blocks
- `docs/*`: shared runbooks, motion system, prompts, contribution rules
- `.github/workflows/*`: CI/CD automation

## 3. Development Flow
1. Read site docs in `apps/<site>/docs-ai/` before making page changes.
2. Keep routing via TanStack Router and data via TanStack Query.
3. For UI updates, sync `GEMINI_PAGE_BRIEF.md`, `GEMINI_MOTION_BRIEF.md`, and `GEMINI_QA_CHECKLIST.md`.
4. Run:
   - `pnpm check`
   - `pnpm check:docs-ai`

## 4. Content and Claims Boundaries
- Do not publish unverifiable feature or compliance claims.
- Keep site-specific messaging within each site's `GEMINI_SITE_CONTEXT.md`.

## 5. Motion and Accessibility
- Follow `docs/MOTION_SYSTEM.md`.
- Always support `prefers-reduced-motion` fallback.

## 6. Commit Conventions
- Use conventional commits (`feat:`, `fix:`, `docs:`, `chore:`).
- Keep monorepo infra changes separate from product copy changes when possible.
