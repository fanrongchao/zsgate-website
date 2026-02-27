# Docker Deployment

## Build
```bash
pnpm build
docker build -t websites/xfa-website:latest -f apps/xfa-website/Dockerfile .
```

## Deploy
Use `scripts/deploy-site.sh` with environment variables:
- `DEPLOY_HOST`
- `DEPLOY_USER`
- `DEPLOY_PATH`

## Rollback
Re-deploy the previous image tag via compose and restart only affected service.
