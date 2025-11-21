// API Route para productos - GET y POST
// Permite obtener productos y crear nuevos (para admin)

import { NextRequest, NextResponse } from 'next/server'

// Marcar esta ruta como dinámica para evitar que se ejecute durante el build
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

// GET - Obtener productos con filtros opcionales
export async function GET(request: NextRequest) {
  try {
    // Obtener parámetros de la URL (query params)
    const searchParams = request.nextUrl.searchParams
    const categorySlug = searchParams.get('categoria')
    const limit = searchParams.get('limit')
    const featured = searchParams.get('featured')

    // Construir query dinámicamente
    const where: any = {}
    
    if (categorySlug) {
      where.category = { slug: categorySlug }
    }
    
    if (featured === 'true') {
      where.featured = true
    }

    // Lazy import de Prisma para evitar ejecución durante el build
    const { prisma } = await import('@/lib/prisma')
    
    // Obtener productos de la base de datos
    const products = await prisma.product.findMany({
      where,
      include: {
        category: true, // Incluir categoría (JOIN)
      },
      take: limit ? parseInt(limit) : undefined, // Limitar cantidad si se especifica
      orderBy: {
        createdAt: 'desc', // Más recientes primero
      },
    })

    return NextResponse.json(products, { status: 200 })
  } catch (error) {
    console.error('Error al obtener productos:', error)
    return NextResponse.json(
      { error: 'Error al obtener productos' },
      { status: 500 }
    )
  }
}

// POST - Crear nuevo producto (requiere autenticación admin)
export async function POST(request: NextRequest) {
  try {
    // Lazy import de Prisma para evitar ejecución durante el build
    const { prisma } = await import('@/lib/prisma')
    
    const body = await request.json()
    const { name, description, price, image, categoryId, stock } = body

    // Validación básica
    if (!name || !categoryId) {
      return NextResponse.json(
        { error: 'Nombre y categoría son requeridos' },
        { status: 400 }
      )
    }

    // Generar slug desde el nombre (URL amigable)
    const slug = name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Eliminar acentos
      .replace(/[^a-z0-9]+/g, '-') // Reemplazar espacios y caracteres especiales
      .replace(/(^-|-$)/g, '') // Eliminar guiones al inicio/fin

    // Crear producto en la base de datos
    const product = await prisma.product.create({
      data: {
        name,
        slug,
        description,
        price: price ? parseFloat(price) : null,
        image,
        categoryId,
        stock: stock ? parseInt(stock) : 0,
      },
      include: {
        category: true,
      },
    })

    return NextResponse.json(product, { status: 201 })
  } catch (error) {
    console.error('Error al crear producto:', error)
    return NextResponse.json(
      { error: 'Error al crear producto' },
      { status: 500 }
    )
  }
}

