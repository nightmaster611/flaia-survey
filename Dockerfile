# Stage 1: Cache dependencies for build
FROM public.ecr.aws/docker/library/node:18-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json yarn.lock ./

# install ALL dependencies
RUN yarn install --production=false

# Copy application source code
COPY . .

# Build the application
RUN yarn build

# Stage 3: Create the production-ready image
FROM build AS production

WORKDIR /app

# # Copy only necessary files from the build stage
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/package.json /app/yarn.lock ./
RUN yarn install --production=true

# Expose the port on which the server will run
EXPOSE 3000

# Start the Node.js server
CMD ["yarn", "start"]