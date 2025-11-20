// Componente Categories - Muestra las categorías de productos
// En TypeScript, necesitamos definir tipos para las props si las recibimos
// Aquí usamos async/await para obtener datos del servidor (Next.js Server Component)

import Link from 'next/link'
import { prisma } from '@/lib/prisma'

// Función async para obtener categorías - Next.js permite esto en Server Components
// En React normal necesitarías useEffect y useState, aquí lo hacemos directamente
export default async function Categories() {
  // Obtener categorías de la base de datos
  // En JavaScript sería igual, pero TypeScript infiere los tipos automáticamente
  const categories = await prisma.category.findMany({
    take: 8, // Limitar a 8 categorías
    orderBy: {
      name: 'asc', // Ordenar alfabéticamente
    },
  })

  // Si no hay categorías, mostrar categorías por defecto (hardcoded del sitio original)
  const defaultCategories = [
    { name: 'Ruedas', slug: 'ruedas', productCount: 36 },
    { name: 'ECOCUR ARGENTINA', slug: 'ecocur-argentina', productCount: 1 },
    { name: 'Pisos de goma y PVC.', slug: 'pisos-goma-pvc', productCount: 5 },
    { name: 'Perfiles de goma', slug: 'perfiles-goma', productCount: 12 },
    { name: 'Mangueras', slug: 'mangueras', productCount: 25 },
    { name: 'Correas', slug: 'correas', productCount: 5 },
    { name: 'Herramientas', slug: 'herramientas', productCount: 16 },
    { name: 'De todo y más', slug: 'de-todo-y-mas', productCount: 27 },
  ]

  // Usar categorías de la BD si existen, sino las por defecto
  const displayCategories = categories.length > 0 
    ? categories.map(cat => ({ 
        name: cat.name, 
        slug: cat.slug, 
        productCount: 0 // Se puede agregar un count en el query si es necesario
      }))
    : defaultCategories

  return (
    <section className="py-12 md:py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-10 text-text-primary">
          Explorar por categoría
        </h2>
        
        {/* Grid de categorías - diseño más fiel al sitio original */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
          {displayCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/tienda?categoria=${category.slug}`}
              className="bg-white p-5 md:p-6 rounded-lg border-2 border-secondary-darker hover:border-primary hover:shadow-medium transition-all text-center group"
            >
              <h3 className="font-bold text-sm md:text-base lg:text-lg mb-2 md:mb-3 group-hover:text-primary transition-colors text-text-primary leading-tight min-h-[2.5rem] md:min-h-[3rem] flex items-center justify-center">
                {category.name}
              </h3>
              <p className="text-text-secondary text-xs md:text-sm font-semibold">
                {category.productCount} {category.productCount === 1 ? 'Producto' : 'Productos'}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

