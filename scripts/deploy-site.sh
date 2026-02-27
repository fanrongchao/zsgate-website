#!/usr/bin/env bash
set -euo pipefail

SITE_NAME="${1:-}"
IMAGE_TAG="${2:-latest}"
if [[ -z "$SITE_NAME" ]]; then
  echo "usage: deploy-site.sh <site-name> [image-tag]"
  exit 1
fi

: "${DEPLOY_HOST:?DEPLOY_HOST is required}"
: "${DEPLOY_USER:?DEPLOY_USER is required}"
: "${DEPLOY_PATH:?DEPLOY_PATH is required}"

ssh "$DEPLOY_USER@$DEPLOY_HOST" \
  "cd '$DEPLOY_PATH' && IMAGE_TAG='$IMAGE_TAG' SITE_NAME='$SITE_NAME' docker compose pull '$SITE_NAME' && docker compose up -d '$SITE_NAME'"
