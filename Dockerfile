# ETAPA 1: Dependencias
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json ./
RUN npm install

# ETAPA 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# ---> INYECCIÓN DE VARIABLES PÚBLICAS (BUILD TIME) <---
ARG NEXT_PUBLIC_MESA_AYUDA_URL
ARG NEXT_PUBLIC_SERVICIOS_ADMIN_URL
ARG NEXT_PUBLIC_SIU_URL
ARG NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_GESTOR_DOCUMENTAL_URL
ARG NEXT_PUBLIC_CAMBIO_CLAVE_URL

ENV NEXT_PUBLIC_MESA_AYUDA_URL=$NEXT_PUBLIC_MESA_AYUDA_URL
ENV NEXT_PUBLIC_SERVICIOS_ADMIN_URL=$NEXT_PUBLIC_SERVICIOS_ADMIN_URL
ENV NEXT_PUBLIC_SIU_URL=$NEXT_PUBLIC_SIU_URL
ARG NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_GESTOR_DOCUMENTAL_URL=$NEXT_PUBLIC_GESTOR_DOCUMENTAL_URL
ENV NEXT_PUBLIC_CAMBIO_CLAVE_URL=$NEXT_PUBLIC_CAMBIO_CLAVE_URL
# ------------------------------------------------------

RUN npm run build

# ETAPA 3: Runner (Producción)
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
RUN mkdir .next
RUN chown nextjs:nodejs .next

    # Copiamos archivos optimizados
    COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
    COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]