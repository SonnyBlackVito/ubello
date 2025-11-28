# # Stage 1: Dependencies
# FROM oven/bun:latest AS deps
# WORKDIR /app

# # Install system dependencies if required (e.g., for image optimization)
# # RUN apt-get update && apt-get install -y <package-name>

# COPY package.json bun.lockb ./
# RUN bun install --frozen-lockfile

# # Stage 2: Builder
# FROM oven/bun:latest AS builder
# WORKDIR /app

# COPY --from=deps /app/node_modules ./node_modules
# COPY . .

# # Ensure Next.js output is standalone
# # Add this to your next.config.js:
# # module.exports = {
# #   output: 'standalone',
# # }
# RUN bun run build

# # Stage 3: Runner
# FROM oven/bun:latest AS runner
# WORKDIR /app

# ENV NODE_ENV production

# # Copy the standalone build output
# COPY --from=builder /app/.next/standalone ./
# COPY --from=builder /app/.next/static ./.next/static
# COPY --from=builder /app/public ./public

# EXPOSE 3000

# CMD ["bun", "run", "start"]