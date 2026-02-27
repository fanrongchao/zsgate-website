# Architecture

Monorepo structure:
- `apps/*`: deployable websites
- `packages/*`: shared schema/config/ui
- `docs/*`: shared AI and engineering contracts

All apps use:
- TanStack Router for routing
- TanStack Query for server state
- React + TypeScript + Vite
