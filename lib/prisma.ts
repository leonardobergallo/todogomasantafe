// Cliente de Prisma - Singleton pattern para evitar múltiples instancias en desarrollo
// En JavaScript normal usarías: const prisma = new PrismaClient()
// En TypeScript necesitamos tipar y manejar el entorno de desarrollo

import { PrismaClient } from '@prisma/client'

// Declaración global para TypeScript - permite acceder a prisma desde cualquier lugar
// En JavaScript esto no sería necesario, pero TypeScript requiere declaraciones de tipos
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Crear instancia de Prisma Client o reutilizar la existente
// Esto previene múltiples conexiones en desarrollo (hot reload)
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'], // Opcional: log de queries para debugging
  })

// En desarrollo, guardar la instancia en globalThis para reutilizarla
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

