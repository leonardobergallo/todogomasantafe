// Página de producto individual - Ruta dinámica [slug]
// Replica el diseño del sitio original con tabla de variantes

import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Calculator from '@/components/Calculator'
import { MessageCircle, Search } from 'lucide-react'
import Link from 'next/link'
import { Prisma } from '@prisma/client'

// Función para generar metadata dinámica (SEO)
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = await prisma.product.findUnique({
    where: { slug: params.slug },
  })

  if (!product) {
    return {
      title: 'Producto no encontrado',
    }
  }

  return {
    title: `${product.name} - Todo Goma Santa Fe`,
    description: product.description || `Comprar ${product.name} en Todo Goma Santa Fe`,
  }
}

// Página del producto
export default async function ProductPage({ params }: { params: { slug: string } }) {
  // Buscar producto por slug (URL amigable) con variantes y productos relacionados
  let product = null
  try {
    product = await prisma.product.findUnique({
      where: { slug: params.slug },
      include: {
        category: true, // Incluir información de la categoría
        variants: {
          orderBy: {
            code: 'asc', // Ordenar variantes por código
          },
        },
      },
    })
  } catch (error) {
    console.error('Error al obtener producto:', error)
    notFound()
  }

  // Si no existe, mostrar 404
  if (!product) {
    notFound()
  }

  // Obtener productos relacionados (misma categoría, excluyendo el actual)
  // Tipo explícito para TypeScript - incluye la categoría relacionada
  type ProductWithCategory = Prisma.ProductGetPayload<{
    include: { category: true }
  }>
  
  let relatedProducts: ProductWithCategory[] = []
  try {
    relatedProducts = await prisma.product.findMany({
      where: {
        categoryId: product.categoryId,
        id: { not: product.id }, // Excluir el producto actual
      },
      take: 4, // Limitar a 4 productos relacionados
      include: {
        category: true,
      },
    })
  } catch (error) {
    console.error('Error al obtener productos relacionados:', error)
    relatedProducts = []
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Barra superior con categoría - estilo del sitio original */}
      <div className="bg-[#1a2339] text-white py-2 px-4">
        <div className="container mx-auto">
          <span className="text-sm font-semibold uppercase">{product.category.name}</span>
        </div>
      </div>

      {/* Barra de búsqueda */}
      <div className="bg-white border-b border-gray-200 py-2">
        <div className="container mx-auto px-4 flex justify-end">
          <button className="p-2 hover:bg-gray-100 rounded">
            <Search className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar izquierdo - Categorías (solo en desktop) */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded p-4 sticky top-20">
              <h3 className="text-sm font-bold text-gray-700 uppercase mb-4">
                CATEGORÍAS DEL PRODUCTO
              </h3>
              <ul className="space-y-1">
                {[
                  { name: "Correas", count: 5, slug: "correas" },
                  { name: "De todo y más", count: 27, slug: "de-todo-y-mas" },
                  { name: "ECOCUR ARGENTINA", count: 1, slug: "ecocur-argentina" },
                  { name: "Herramientas", count: 16, slug: "herramientas" },
                  { name: "Jardin, accesorios y acoples", count: 17, slug: "jardin-accesorios-acoples" },
                  { name: "Mangueras", count: 25, slug: "mangueras" },
                  { name: "Perfiles de goma", count: 12, slug: "perfiles-goma" },
                  { name: "Pisos de goma y PVC.", count: 5, slug: "pisos-goma-pvc" },
                  { name: "Ruedas", count: 36, slug: "ruedas", active: product.category.slug === "ruedas" },
                ].map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      href={`/tienda?categoria=${cat.slug}`}
                      className={`block px-3 py-2 text-sm hover:bg-gray-50 transition-colors ${
                        cat.active ? 'font-semibold text-[#1a2339] bg-gray-50' : 'text-gray-700'
                      }`}
                    >
                      {cat.name} ({cat.count})
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Contenido principal */}
          <div className="lg:col-span-3">
            {/* Título del producto */}
            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              {product.name}
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Columna izquierda - Imagen */}
              <div className="lg:col-span-1">
                <div className="bg-white border border-gray-200 rounded overflow-hidden">
                  <div className="w-full aspect-square bg-gray-100 flex items-center justify-center relative">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-4"
                      />
                    ) : (
                      <span className="text-gray-400">Sin imagen</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Columna derecha - Información y tabla */}
              <div className="lg:col-span-2 space-y-4">
                {/* Botón Quiero saber más */}
                <a
                  href={`https://wa.me/5493425132104?text=Hola, quiero saber más sobre: ${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors border border-gray-300"
                >
                  <MessageCircle className="w-5 h-5 text-green-600" />
                  Quiero saber más!
                </a>

                {/* Calculador */}
                <Calculator />

                {/* Tabla de variantes - estilo exacto del sitio original */}
                {product.variants && product.variants.length > 0 && (
                  <div className="bg-white border border-gray-200 rounded p-4">
                    <h3 className="text-lg font-bold mb-4 text-gray-900">
                      {product.category.name === "Ruedas" ? "Cámaras" : "Variantes"}
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-50 border-b-2 border-gray-300">
                            <th className="px-4 py-3 text-left font-semibold text-sm text-gray-700">Código</th>
                            {product.variants.some((v) => v.diameter) && (
                              <th className="px-4 py-3 text-left font-semibold text-sm text-gray-700">Ø</th>
                            )}
                            <th className="px-4 py-3 text-left font-semibold text-sm text-gray-700">Descripción</th>
                            <th className="px-4 py-3 text-center font-semibold text-sm text-gray-700">
                              <svg className="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                              </svg>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {product.variants.map((variant, index) => (
                            <tr 
                              key={variant.id} 
                              className={`border-b border-gray-200 hover:bg-gray-50 ${
                                index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                              }`}
                            >
                              <td className="px-4 py-3 font-medium text-gray-900">
                                {variant.code}
                              </td>
                              {product.variants.some((v) => v.diameter) && (
                                <td className="px-4 py-3 text-gray-700">
                                  {variant.diameter || "-"}
                                </td>
                              )}
                              <td className="px-4 py-3 text-gray-700">
                                {variant.description}
                              </td>
                              <td className="px-4 py-3 text-center text-gray-700 font-semibold">
                                {variant.stock > 0 ? variant.stock : '0'}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Categoría */}
                <div className="text-sm text-gray-600 mt-4">
                  <span className="font-semibold">Categoría:</span>{' '}
                  <Link 
                    href={`/tienda?categoria=${product.category.slug}`}
                    className="text-[#1a2339] hover:underline"
                  >
                    {product.category.name}
                  </Link>
                </div>
              </div>
            </div>

            {/* Descripción */}
            {product.description && (
              <div className="mt-6 bg-white border border-gray-200 rounded p-4">
                <h3 className="text-lg font-bold mb-3 text-gray-900">Descripción</h3>
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Productos relacionados */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Productos relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/producto/${relatedProduct.slug}`}
                  className="group"
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="w-full h-48 bg-gray-200 relative">
                      {relatedProduct.image ? (
                        <Image
                          src={relatedProduct.image}
                          alt={relatedProduct.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <span className="text-gray-400">Sin imagen</span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <span className="text-xs text-gray-500 uppercase">
                        {relatedProduct.category.name}
                      </span>
                      <h3 className="font-semibold mt-2 mb-2 line-clamp-2 group-hover:text-[#1a2339] transition">
                        {relatedProduct.name}
                      </h3>
                      <span className="text-sm text-[#1a2339] font-semibold">Leer más →</span>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

