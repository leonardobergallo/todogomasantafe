// Página de Tienda - Catálogo de productos con filtros
// En Next.js, esta ruta se crea automáticamente como /tienda

import ProductCard from '@/components/ProductCard'
import { Suspense } from 'react'
import { Prisma, Category } from '@prisma/client'

// Marcar esta página como dinámica para evitar que se ejecute durante el build
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

// Componente para mostrar productos - Server Component
async function ProductsList({ categorySlug }: { categorySlug?: string }) {
  // Construir query dinámicamente según filtros
  // En JavaScript sería igual, TypeScript solo añade tipos
  const where = categorySlug 
    ? { category: { slug: categorySlug } } // Filtrar por categoría si existe
    : {} // Sin filtros si no hay categoría

  // Tipo explícito para TypeScript - incluye la categoría relacionada
  type ProductWithCategory = Prisma.ProductGetPayload<{
    include: { category: true }
  }>
  
  let products: ProductWithCategory[] = []
  try {
    // Lazy import de Prisma para evitar ejecución durante el build
    const { prisma } = await import('@/lib/prisma')
    
    products = await prisma.product.findMany({
      where,
      include: {
        category: true, // Incluir categoría (JOIN)
      },
      orderBy: {
        createdAt: 'desc', // Más recientes primero
      },
    })
  } catch (error) {
    console.error('Error al obtener productos:', error)
    products = []
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <svg className="w-20 h-20 text-text-light mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
        </svg>
        <p className="text-text-secondary text-lg md:text-xl font-medium">No se encontraron productos.</p>
        <p className="text-text-light text-sm mt-2">Intenta con otra categoría o vuelve más tarde.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

// Página principal de tienda
export default async function TiendaPage({
  searchParams,
}: {
  searchParams: { categoria?: string } // Parámetros de búsqueda de la URL
}) {
  // Obtener todas las categorías para el filtro - con manejo de errores
  let categories: Category[] = []
  try {
    // Lazy import de Prisma para evitar ejecución durante el build
    const { prisma } = await import('@/lib/prisma')
    
    categories = await prisma.category.findMany({
      orderBy: { name: 'asc' },
    })
  } catch (error) {
    console.error('Error al obtener categorías:', error)
    // Si hay error, usar categorías por defecto
    categories = []
  }

  const selectedCategory = searchParams.categoria

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-10 text-text-primary">Tienda</h1>

      {/* Filtros de categoría - estilo mejorado */}
      <div className="mb-10 md:mb-12">
        <h2 className="text-lg md:text-xl font-bold mb-5 text-text-primary">Filtrar por categoría</h2>
        <div className="flex flex-wrap gap-3">
          <a
            href="/tienda"
            className={`px-5 py-2.5 rounded-lg font-semibold text-sm md:text-base transition-colors ${
              !selectedCategory
                ? 'bg-primary text-white hover:bg-primary-dark shadow-soft'
                : 'bg-secondary text-text-secondary hover:bg-secondary-dark border-2 border-secondary-darker'
            }`}
          >
            Todas
          </a>
          {categories.map((category) => (
            <a
              key={category.id}
              href={`/tienda?categoria=${category.slug}`}
              className={`px-5 py-2.5 rounded-lg font-semibold text-sm md:text-base transition-colors ${
                selectedCategory === category.slug
                  ? 'bg-primary text-white hover:bg-primary-dark shadow-soft'
                  : 'bg-secondary text-text-secondary hover:bg-secondary-dark border-2 border-secondary-darker'
              }`}
            >
              {category.name}
            </a>
          ))}
        </div>
      </div>

      {/* Lista de productos - Suspense para loading state */}
      <Suspense fallback={
        <div className="text-center py-16">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
          <p className="text-text-secondary text-lg">Cargando productos...</p>
        </div>
      }>
        <ProductsList categorySlug={selectedCategory} />
      </Suspense>
    </div>
  )
}

