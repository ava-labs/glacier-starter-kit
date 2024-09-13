# Use the TypeScript Node.js base image
ARG VARIANT="16-bullseye"
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}

# Install dependencies
WORKDIR /workspace
COPY package*.json ./
RUN yarn install

# Copy all project files
COPY . .

# Build the project
RUN yarn build

# Expose port 3000 for Next.js
EXPOSE 3000

# Start the development server
CMD ["yarn", "dev"]
