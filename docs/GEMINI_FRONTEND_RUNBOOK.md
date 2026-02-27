# Gemini Frontend Runbook

This runbook defines a strict contract for Gemini 3.1 collaboration across all websites.

## Required Inputs
1. `GEMINI_SITE_CONTEXT.md`
2. `GEMINI_PAGE_BRIEF.md`
3. `GEMINI_MOTION_BRIEF.md`

## Required Outputs
1. Route and page component tree
2. Shared component reuse plan
3. Motion implementation notes and reduced-motion fallback
4. Test scenarios for regression checks

## Prompt Template (EN)
```text
You are working inside a TanStack + React monorepo.
Read docs-ai/GEMINI_SITE_CONTEXT.md, GEMINI_PAGE_BRIEF.md, and GEMINI_MOTION_BRIEF.md.
Generate production-ready code for the requested page.
Constraints:
- Keep routing with TanStack Router
- Respect reduced motion
- Do not change public interfaces unless brief says so
- Include unit and e2e test cases
```

## Guardrails
- Do not invent product claims outside site context.
- Do not remove accessibility requirements.
- Do not skip mobile layouts.
