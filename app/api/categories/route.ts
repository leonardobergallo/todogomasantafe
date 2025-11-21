// API Route para categorías

import { NextRequest, NextResponse } from 'next/server'

// Marcar esta ruta como dinámica para evitar que se ejecute durante el build
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

// GET - Obtener todas las categorías
export async function GET() {
  try {
    // Lazy import de Prisma para evitar ejecución durante el build
    const { prisma } = await import('@/lib/prisma')
    
    const categories = await prisma.category.findMany({
      orderBy: {
        name: 'asc', // Ordenar alfabéticamente
      },
      include: {
        _count: {
          select: { products: true }, // Contar productos por categoría
        },
      },
    })

    return NextResponse.json(categories, { status: 200 })
  } catch (error) {
    console.error('Error al obtener categorías:', error)
    return NextResponse.json(
      { error: 'Error al obtener categorías' },
      { status: 500 }
    )
  }
}

// POST - Crear nueva categoría (admin)
export async function POST(request: NextRequest) {
  try {
    // Lazy import de Prisma para evitar ejecución durante el build
    const { prisma } = await import('@/lib/prisma')
    
    const body = await request.json()
    const { name, description, image } = body

    if (!name) {
      return NextResponse.json(
        { error: 'El nombre es requerido' },
        { status: 400 }
      )
    }

    // Generar slug desde el nombre
    const slug = name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')

    const category = await prisma.category.create({
      data: {
        name,
        slug,
        description,
        image,
      },
    })

    return NextResponse.json(category, { status: 201 })
  } catch (error) {
    console.error('Error al crear categoría:', error)
    return NextResponse.json(
      { error: 'Error al crear categoría' },
      { status: 500 }
    )
  }
}

