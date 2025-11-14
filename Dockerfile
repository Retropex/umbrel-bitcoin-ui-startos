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
     apt-get install -y curl && \
     apt-get clean && \
     rm -rf /var/lib/apt/lists/*

ENV yq_sha256_amd64=c0eb42f6fbf928f0413422967983dcdf9806cc4dedc9394edc60c0dfb4a98529
ENV yq_sha256_arm64=4ab0b301059348d671fc1833e99903c1fecc7ca287ac131f72dca0eb9a6ba87a

ARG ARCH
ARG PLATFORM

RUN curl -sLo /usr/local/bin/yq https://github.com/mikefarah/yq/releases/download/v4.46.1/yq_linux_${PLATFORM}
RUN eval echo "\${yq_sha256_${PLATFORM}} */usr/local/bin/yq" | sha256sum -c
RUN chmod +x /usr/local/bin/yq

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

ADD ./docker_entrypoint.sh /usr/local/bin/docker_entrypoint.sh
RUN chmod a+x /usr/local/bin/docker_entrypoint.sh
