// API Route para NextAuth
// NextAuth requiere esta ruta específica: /api/auth/[...nextauth]
// El [...nextauth] es un catch-all route en Next.js

// Marcar esta ruta como dinámica para evitar que se ejecute durante el build
// Esto es crítico porque NextAuth intenta conectarse a la base de datos
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

// Lazy import de NextAuth y authOptions para evitar ejecución durante el build
async function getNextAuthHandler() {
  try {
    const NextAuth = (await import('next-auth')).default
    const { authOptions } = await import('@/lib/auth')
    return NextAuth(authOptions)
  } catch (error) {
    console.error('Error al inicializar NextAuth:', error)
    // Retornar un handler que retorna error si falla la inicialización
    return async (req: Request) => {
      return new Response(
        JSON.stringify({ error: 'Authentication service unavailable' }),
        { status: 503, headers: { 'Content-Type': 'application/json' } }
      )
    }
  }
}

// Exportar handlers para GET y POST
// Estos se ejecutan solo cuando se hace una solicitud real, no durante el build
export async function GET(request: Request) {
  const handler = await getNextAuthHandler()
  return handler(request, {} as any)
}

export async function POST(request: Request) {
  const handler = await getNextAuthHandler()
  return handler(request, {} as any)
}
