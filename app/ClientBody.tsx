// Componente ClientBody - necesario para evitar problemas de hidratación
// En Next.js, a veces las extensiones del navegador añaden clases que causan conflictos
// Este componente las limpia después de la hidratación

"use client" // Directiva de Next.js - indica que es un Client Component

import { useEffect } from "react"

export default function ClientBody({
  children,
}: {
  children: React.ReactNode // Tipo de React para children
}) {
  // useEffect se ejecuta solo en el cliente después de la hidratación
  // En JavaScript sería igual, pero TypeScript requiere tipar las props
  useEffect(() => {
    // Limpiar clases añadidas por extensiones durante la hidratación
    document.body.className = "antialiased"
  }, [])

  return <div className="antialiased">{children}</div>
}

