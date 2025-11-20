// Wrapper para SidebarMenu que maneja el estado
// Permite pasar categorías desde el servidor

"use client"

import { useState } from "react"
import SidebarMenu, { SidebarMenuProps } from "./SidebarMenu"

interface SidebarMenuWrapperProps {
  children: React.ReactNode
  categories?: SidebarMenuProps["categories"]
}

export default function SidebarMenuWrapper({ children, categories }: SidebarMenuWrapperProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {children}
      <SidebarMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        categories={categories}
      />
    </>
  )
}

