# Figma Design Source of Truth and MCP Workflow

This document defines the shared contract for all coding agents that interact with Figma in this monorepo.

Supported agents:
- Codex
- Claude Code
- Gemini CLI
- OpenCode

## Source of Truth Policy

Figma is the single source of truth for visual design intent.

Visual design intent includes:
- layout
- spacing
- sizing
- typography
- color usage
- component composition
- icon and illustration selection
- motion intent represented in design

Figma is not the single source of truth for:
- business logic
- API behavior
- SEO or marketing claims
- compliance, security, or performance claims
- accessibility acceptance by itself
- runtime state handling

Runtime code is the source of truth for implemented behavior.

Site-specific messaging and content constraints remain in each app's `docs-ai` files, especially `GEMINI_SITE_CONTEXT.md`.

## Agent Workflow Contract

For any Figma-driven UI or asset task, agents must follow this order:

1. Read the site's `docs-ai` files first.
2. Identify the Figma file URL, file key, and target page or node if provided.
3. Query Figma via MCP instead of relying on screenshots when structure, spacing, or dimensions matter.
4. Extract only the design information needed for the task.
5. Map Figma output into existing repo patterns instead of mirroring raw design data blindly.
6. Validate the result against accessibility, reduced motion, and site context constraints.
7. Update the relevant `docs-ai` files when the request changes page intent, motion intent, or QA criteria.

## What Agents Must Pull From Figma

- layout structure
- spacing and sizing
- color usage
- typography
- component hierarchy
- icon and illustration assets
- motion intent and timing cues when represented in the design

## What Agents Must Not Infer Solely From Figma

- product promises
- feature availability claims
- compliance language
- analytics or SEO copy
- backend data shape
- accessibility pass or fail status
- responsive behavior not clearly specified in design or repo patterns

## Current MCP Standard

All supported coding agents should use the same Figma MCP backend:

- package: `figma-developer-mcp`
- transport: `stdio`
- launch command: `npx -y figma-developer-mcp --stdio`
- auth env var: `FIGMA_API_KEY`

Current config locations:

- Codex: `~/.codex/config.toml`
- Claude Code: user MCP config managed via `claude mcp ...`
- Gemini CLI: `~/.gemini/settings.json`
- OpenCode: project-level `.opencode/opencode.jsonc`

Do not reintroduce `.cursor/mcp.json` or `.vscode/cline_mcp_settings.json` in this repo for shared Figma setup.

Treat IDE-specific Figma config as out of policy for this repo unless explicitly requested later.

## Security Rules

- Never commit live Figma tokens.
- Store tokens only in ignored local config or user-level config.
- Prefer local or user-scoped secrets over repo-tracked files.
- If a token is pasted into chat, migrate it to ignored config immediately and avoid echoing it back.
- If a token may have been exposed, rotate it in Figma settings.

## Setup and Verification Checklist

1. Verify the MCP config uses `figma-developer-mcp --stdio`.
2. Verify the auth env key is `FIGMA_API_KEY`.
3. Verify the agent sees a `figma` MCP server.
4. Verify access by reading a known file key and confirming the returned file name.
5. If an agent-specific permission prompt blocks MCP tool use, explicitly allow the Figma MCP tool and retry.

## Failure Handling and Troubleshooting

- `404 Not Found` when using `@modelcontextprotocol/server-figma`
  Cause: wrong or outdated package name.
  Fix: switch to `figma-developer-mcp --stdio`.

- `Connection closed` in OpenCode
  Cause: MCP backend mismatch or failed startup.
  Fix: use the working backend package and the correct env var.

- Claude Code sees the MCP server but refuses tool execution
  Cause: MCP tool permission gating.
  Fix: allow the specific `mcp__figma__...` tool and retry.

- Figma API token works but the agent still cannot read the file
  Cause: MCP config mismatch or tool permission issue.
  Fix: verify package, env key, and MCP health separately.

- Screenshot-based implementation drifts from design
  Cause: the agent skipped a structured Figma query.
  Fix: fetch Figma data directly before implementation.

## Lessons Learned

- The originally documented MCP package was outdated for this environment.
- Shared documentation must reflect the real working backend, not an assumed or historical one.
- Figma should be treated as the source of truth for design intent, not for claims or behavior.
- Agent configuration health and MCP backend health must be validated separately.
- A successful Figma API call does not prove the agent MCP setup is correct.
- Claude Code may require explicit MCP tool permission even when the server is correctly configured.
- Real validation should use the same Figma file across all agents to confirm parity.
