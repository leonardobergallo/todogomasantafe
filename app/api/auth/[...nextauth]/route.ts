// API Route para NextAuth
// NextAuth requiere esta ruta específica: /api/auth/[...nextauth]
// El [...nextauth] es un catch-all route en Next.js

import NextAuth from 'next-auth'
import { authOptions } from '@/lib/auth'

// Handler de NextAuth - maneja todas las rutas de autenticación
// GET /api/auth/signin, POST /api/auth/signin, etc.
// En Next.js 13+ App Router, necesitamos exportar GET y POST explícitamente
const handler = NextAuth(authOptions)

// Exportar handlers para GET y POST
// NextAuth maneja automáticamente todas las rutas de autenticación
export { handler as GET, handler as POST }

