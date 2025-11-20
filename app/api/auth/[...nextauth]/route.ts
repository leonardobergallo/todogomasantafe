// API Route para NextAuth
// NextAuth requiere esta ruta específica: /api/auth/[...nextauth]
// El [...nextauth] es un catch-all route en Next.js

import NextAuth from 'next-auth'
import { authOptions } from '@/lib/auth'

// Handler de NextAuth - maneja todas las rutas de autenticación
// GET /api/auth/signin, POST /api/auth/signin, etc.
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

