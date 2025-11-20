// API Route para el formulario de contacto
// En Next.js 13+, las API routes se crean en app/api/[route]/route.ts
// En versiones anteriores sería pages/api/[route].ts

import { NextRequest, NextResponse } from 'next/server'

// POST handler - maneja solicitudes POST
// En TypeScript necesitamos tipar los parámetros
export async function POST(request: NextRequest) {
  try {
    // Parsear el body de la solicitud
    // En JavaScript: const body = await request.json()
    const body = await request.json()

    // Validar datos (aquí podrías usar Zod para validación más robusta)
    const { name, email, phone, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Campos requeridos faltantes' },
        { status: 400 }
      )
    }

    // Aquí podrías:
    // 1. Guardar en base de datos
    // 2. Enviar email
    // 3. Enviar a un servicio de notificaciones
    
    // Por ahora, solo retornamos éxito
    // En producción, aquí implementarías la lógica real
    console.log('Mensaje de contacto recibido:', { name, email, phone, message })

    return NextResponse.json(
      { message: 'Mensaje enviado correctamente' },
      { status: 200 }
    )
  } catch (error) {
    // Manejo de errores - TypeScript ayuda a detectar errores de tipo
    console.error('Error en contacto:', error)
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    )
  }
}

