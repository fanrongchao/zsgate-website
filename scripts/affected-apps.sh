#!/usr/bin/env bash
set -euo pipefail

BASE_REF="${BASE_REF:-origin/main}"
if ! git rev-parse --verify "$BASE_REF" >/dev/null 2>&1; then
  BASE_REF="HEAD~1"
fi

CHANGED_FILES=$(git diff --name-only "$BASE_REF"...HEAD || true)
if [[ -z "$CHANGED_FILES" ]]; then
  echo "[]"
  exit 0
fi

APPS=$(echo "$CHANGED_FILES" | awk -F/ '/^apps\// {print $2}' | sort -u)
if [[ -z "$APPS" ]]; then
  echo "[]"
  exit 0
fi

printf '['
FIRST=1
while IFS= read -r app; do
  [[ -z "$app" ]] && continue
  if [[ $FIRST -eq 0 ]]; then
    printf ','
  fi
  printf '"%s"' "$app"
  FIRST=0
done <<< "$APPS"
printf ']\n'
