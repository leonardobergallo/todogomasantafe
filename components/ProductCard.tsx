// Componente ProductCard - Tarjeta individual de producto
// Se usa en la tienda y otras secciones

import Link from 'next/link'
import Image from 'next/image'

// Tipo para el producto - TypeScript requiere definir la estructura
// En JavaScript esto no sería necesario, pero TypeScript necesita saber qué propiedades tiene
interface ProductCardProps {
  product: {
    id: string
    name: string
    slug: string
    description: string | null
    price: number | null
    image: string | null
    category: {
      name: string
    }
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/producto/${product.slug}`}
      className="bg-white rounded-lg border-2 border-secondary-darker overflow-hidden hover:border-primary hover:shadow-medium transition-all group"
    >
      {/* Imagen del producto - estilo mejorado */}
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

      {/* Información del producto - estilo consistente */}
      <div className="p-4 md:p-5">
        <span className="text-xs text-primary font-bold uppercase tracking-wider block mb-2">
          {product.category.name}
        </span>
        <h3 className="font-bold text-sm md:text-base mt-2 mb-3 line-clamp-2 group-hover:text-primary transition-colors text-text-primary leading-snug min-h-[3rem]">
          {product.name}
        </h3>
        {product.description && (
          <p className="text-text-secondary text-sm line-clamp-2 mb-3 leading-relaxed">
            {product.description}
          </p>
        )}
        {product.price && (
          <p className="text-lg md:text-xl font-bold text-text-primary mb-3">
            ${product.price.toLocaleString('es-AR')}
          </p>
        )}
        <div className="flex items-center justify-between pt-2 border-t border-secondary-darker">
          <span className="text-xs md:text-sm text-primary font-semibold">Ver detalles</span>
          <svg className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  )
}

