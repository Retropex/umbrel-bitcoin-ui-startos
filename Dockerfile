FROM node:20-slim AS deps
WORKDIR /repo

COPY umbrel-bitcoin/package*.json ./
COPY umbrel-bitcoin/apps/backend/package*.json apps/backend/
COPY umbrel-bitcoin/apps/ui/package*.json apps/ui/

RUN npm ci --workspaces --include-workspace-root --install-strategy=hoisted

ENV PATH="/repo/node_modules/.bin:$PATH"

FROM deps AS app-builder
WORKDIR /repo
COPY ./umbrel-bitcoin/ .

RUN tsc -b libs/shared-types libs/settings apps/backend \
 && npm run --workspace apps/ui build

FROM node:20-bookworm-slim AS runtime
WORKDIR /app

RUN apt update && \
     apt-get install -y curl yq && \
     apt-get clean && \
     rm -rf /var/lib/apt/lists/*

ARG ARCH
ARG PLATFORM

COPY umbrel-bitcoin/package*.json ./
COPY umbrel-bitcoin/apps/backend/package*.json apps/backend/
RUN \
     NODE_ENV=production \
     npm ci --omit=dev --ignore-scripts && \
     npm cache clean --force

COPY --from=app-builder /repo/apps/backend/dist ./dist
COPY --from=app-builder /repo/apps/ui/dist ./dist/public
COPY --from=app-builder /repo/libs/settings/dist ./libs/settings/dist
COPY --from=app-builder /repo/libs/shared-types/dist ./libs/shared-types/dist