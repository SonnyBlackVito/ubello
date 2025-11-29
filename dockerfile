FROM node:20-alpine AS builder
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY .env.example .env

# Install dependencies
RUN yarn install --frozen-lockfile


# Copy source code
COPY . .

# Build Next.js
RUN yarn run build

FROM oven/bun:1.2.23-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Copy files cần thiết
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
COPY --from=builder /app/.env ./.env

EXPOSE 3000

CMD ["bun", "run", "server.js"]