// Página de producto individual - Ruta dinámica [slug]
// En Next.js, [slug] crea una ruta dinámica como /producto/rueda-123

import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import Image from 'next/image'

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
  // Buscar producto por slug (URL amigable)
  const product = await prisma.product.findUnique({
    where: { slug: params.slug },
    include: {
      category: true, // Incluir información de la categoría
    },
  })

  // Si no existe, mostrar 404
  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Imagen del producto */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="w-full h-96 bg-gray-200 flex items-center justify-center relative">
            {product.image ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            ) : (
              <span className="text-gray-400">Sin imagen</span>
            )}
          </div>
        </div>

        {/* Información del producto */}
        <div>
          <span className="text-sm text-blue-600 font-semibold">
            {product.category.name}
          </span>
          <h1 className="text-4xl font-bold mt-2 mb-4">{product.name}</h1>
          
          {product.price && (
            <p className="text-3xl font-bold text-gray-800 mb-6">
              ${product.price.toLocaleString('es-AR')}
            </p>
          )}

          {product.description && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Descripción</h2>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>
          )}

          {/* Información adicional */}
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-semibold">Stock:</span>{' '}
              {product.stock > 0 ? (
                <span className="text-green-600">Disponible ({product.stock} unidades)</span>
              ) : (
                <span className="text-red-600">Sin stock</span>
              )}
            </p>
          </div>

          {/* Botón de agregar al carrito */}
          <button
            disabled={product.stock === 0}
            className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition ${
              product.stock > 0
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            {product.stock > 0 ? 'Agregar al carrito' : 'Sin stock'}
          </button>

          {/* Información de contacto */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              ¿Necesitas más información?{' '}
              <a href="/contacto" className="text-blue-600 hover:underline">
                Contáctanos
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

