FROM node:22-alpine AS build
WORKDIR /app
RUN corepack enable
COPY . .
RUN pnpm install --frozen-lockfile || pnpm install
RUN pnpm --filter aihunt-website build

FROM nginx:1.27-alpine
COPY --from=build /app/apps/aihunt-website/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
