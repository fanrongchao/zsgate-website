FROM node:22-alpine AS build
WORKDIR /app
RUN corepack enable
COPY . .
RUN pnpm install --frozen-lockfile || pnpm install
RUN pnpm --filter zhsjf-website build

FROM nginx:1.27-alpine
COPY --from=build /app/apps/zhsjf-website/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
