FROM node:20.10.0-alpine

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml .env ./

RUN pnpm install --frozen-lockfile

# Install serve globally (or as a project dependency)
RUN npm i -g serve

COPY . .

RUN pnpm build

# Default port for 'serve'
EXPOSE 3000

# Serve the built app from the 'dist' folder
CMD ["serve", "-s", "dist"]

## CMD ["sh"]
