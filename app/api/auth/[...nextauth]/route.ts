// API Route para NextAuth
// NextAuth requiere esta ruta específica: /api/auth/[...nextauth]
// El [...nextauth] es un catch-all route en Next.js

import NextAuth from 'next-auth'
import { authOptions } from '@/lib/auth'

// Handler de NextAuth - maneja todas las rutas de autenticación
// GET /api/auth/signin, POST /api/auth/signin, etc.
// En Next.js 13+ App Router, necesitamos exportar GET y POST explícitamente
const handler = NextAuth(authOptions)

// Exportar handlers para GET y POST con manejo de errores
// Esto permite que NextAuth maneje todas las solicitudes de autenticación
export async function GET(request: Request) {
  try {
    return await handler(request, {} as any)
  } catch (error) {
    console.error('Error en NextAuth GET:', error)
    return new Response('Internal Server Error', { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    return await handler(request, {} as any)
  } catch (error) {
    console.error('Error en NextAuth POST:', error)
    return new Response('Internal Server Error', { status: 500 })
  }
}

