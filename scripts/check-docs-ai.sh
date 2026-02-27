#!/usr/bin/env bash
set -euo pipefail

required_files=(
  "GEMINI_SITE_CONTEXT.md"
  "GEMINI_PAGE_BRIEF.md"
  "GEMINI_MOTION_BRIEF.md"
  "GEMINI_QA_CHECKLIST.md"
)

required_fields=(
  "site_name:"
  "domain:"
  "page_route:"
  "page_goal:"
  "motion_level:"
  "timing_budget_ms:"
  "visual_checks:"
  "a11y_checks:"
)

status=0
for app_dir in apps/*; do
  [[ -d "$app_dir" ]] || continue
  docs_dir="$app_dir/docs-ai"
  for f in "${required_files[@]}"; do
    if [[ ! -f "$docs_dir/$f" ]]; then
      echo "Missing $docs_dir/$f"
      status=1
    fi
  done

  for field in "${required_fields[@]}"; do
    if ! rg -q "$field" "$docs_dir"/*.md; then
      echo "Missing field '$field' in $docs_dir"
      status=1
    fi
  done

done

exit $status
