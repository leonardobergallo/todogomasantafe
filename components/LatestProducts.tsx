// Componente LatestProducts - Muestra los últimos productos ingresados
// Similar a Categories, pero para productos recientes

import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import Image from 'next/image' // Componente Image optimizado de Next.js
import { Prisma } from '@prisma/client'

export default async function LatestProducts() {
  // Obtener últimos productos - ordenados por fecha de creación
  // Tipo explícito para TypeScript - incluye la categoría relacionada
  type ProductWithCategory = Prisma.ProductGetPayload<{
    include: { category: true }
  }>
  
  let products: ProductWithCategory[] = []
  try {
    products = await prisma.product.findMany({
      take: 8, // Limitar a 8 productos
      orderBy: {
        createdAt: 'desc', // Más recientes primero
      },
      include: {
        category: true, // Incluir información de la categoría (JOIN en SQL)
      },
    })
  } catch (error) {
    console.error('Error al obtener productos:', error)
    products = []
  }

  // Productos por defecto del sitio original (si no hay en BD)
  const defaultProducts = [
    {
      id: '1',
      name: 'GRUPOS ELECTROGENOS DE 2.2 KVA 3.3 KVA, 6.8KVA Y 9.0 KVA',
      slug: 'grupos-electrogenos',
      category: { name: 'Herramientas' },
      image: null,
    },
    {
      id: '2',
      name: 'BOMBAS CENTRIFUGAS 0.5 HP .0.75HP, 1 HP Y 1 1/2HP.',
      slug: 'bombas-centrifugas',
      category: { name: 'Herramientas' },
      image: null,
    },
    {
      id: '3',
      name: 'SOLDADORAS MIG/MMA 130-160AMP',
      slug: 'soldadoras-mig-mma',
      category: { name: 'Herramientas' },
      image: null,
    },
    {
      id: '4',
      name: 'SOLDADORAS LASER GREAT LINEA PROFESIONAL 180 Y 200 AMP.',
      slug: 'soldadoras-laser-great',
      category: { name: 'Herramientas' },
      image: null,
    },
    {
      id: '5',
      name: 'SOLDADORAS LASER INVERTER DISCOVERY 155, 225Y 255.',
      slug: 'soldadoras-laser-inverter',
      category: { name: 'Herramientas' },
      image: null,
    },
    {
      id: '6',
      name: 'ESPUMA POLIPROPILENO PARA BAJO PILETAS',
      slug: 'espuma-polipropileno',
      category: { name: 'De todo y más' },
      image: null,
    },
    {
      id: '7',
      name: 'GOMA EN PLANCHA NATURAL, SANITARIA Y CARAMELO',
      slug: 'goma-plancha',
      category: { name: 'Pisos de goma y PVC.' },
      image: null,
    },
    {
      id: '8',
      name: 'PISOS DE CAUCHO RECICLADO',
      slug: 'pisos-caucho-reciclado',
      category: { name: 'ECOCUR ARGENTINA' },
      image: null,
    },
  ]

  const displayProducts = products.length > 0 ? products : defaultProducts

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-text-primary">
          Últimos ingresos
        </h2>
        
        {/* Grid de productos - diseño más fiel al sitio original */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {displayProducts.map((product) => (
            <Link
              key={product.id}
              href={`/producto/${product.slug}`}
              className="bg-white rounded-lg border-2 border-secondary-darker overflow-hidden hover:border-primary hover:shadow-medium transition-all group"
            >
              {/* Imagen del producto - estilo más profesional */}
              <div className="w-full h-48 md:h-56 bg-secondary flex items-center justify-center relative border-b-2 border-secondary-darker">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="text-center p-4">
                    <svg className="w-16 h-16 text-text-light mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-text-light text-xs font-medium">Sin imagen</span>
                  </div>
                )}
              </div>
              
              {/* Información del producto - estilo exacto del sitio original */}
              <div className="p-4 md:p-5">
                <span className="text-xs text-primary font-bold uppercase tracking-wider block mb-2">
                  {product.category.name}
                </span>
                <h3 className="font-bold text-sm md:text-base mt-2 mb-3 line-clamp-2 group-hover:text-primary transition-colors text-text-primary leading-snug min-h-[3rem]">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between pt-2 border-t border-secondary-darker">
                  <span className="text-xs md:text-sm text-primary font-semibold">Leer más</span>
                  <svg className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

