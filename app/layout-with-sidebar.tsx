// Layout alternativo que incluye el SidebarMenu con categorías desde el servidor
// Este es un ejemplo de cómo pasar categorías al SidebarMenu

import SidebarMenuWrapper from '@/components/SidebarMenuWrapper'
import { Category } from '@prisma/client'

export default async function LayoutWithSidebar({
  children,
}: {
  children: React.ReactNode
}) {
  // Obtener categorías en el servidor con lazy loading
  let categories: Category[] = []
  try {
    // Lazy import de Prisma para evitar ejecución durante el build
    const { prisma } = await import('@/lib/prisma')
    
    categories = await prisma.category.findMany({
      orderBy: { name: 'asc' },
    })
  } catch (error) {
    console.error('Error al obtener categorías:', error)
    categories = []
  }

  return <SidebarMenuWrapper categories={categories}>{children}</SidebarMenuWrapper>
}

