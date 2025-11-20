// Layout alternativo que incluye el SidebarMenu con categorías desde el servidor
// Este es un ejemplo de cómo pasar categorías al SidebarMenu

import { prisma } from '@/lib/prisma'
import SidebarMenuWrapper from '@/components/SidebarMenuWrapper'

export default async function LayoutWithSidebar({
  children,
}: {
  children: React.ReactNode
}) {
  // Obtener categorías en el servidor
  const categories = await prisma.category.findMany({
    orderBy: { name: 'asc' },
  })

  return <SidebarMenuWrapper categories={categories}>{children}</SidebarMenuWrapper>
}

