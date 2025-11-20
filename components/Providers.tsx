// Provider de NextAuth - Envuelve la app para proveer contexto de autenticación
// Similar a un Context Provider en React, pero específico de NextAuth

'use client'

import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'

// Props del componente - TypeScript requiere tipar las props
interface ProvidersProps {
  children: ReactNode // ReactNode es el tipo para cualquier elemento React válido
}

export default function Providers({ children }: ProvidersProps) {
  // SessionProvider provee el contexto de autenticación a toda la app
  // En JavaScript sería igual, pero sin los tipos
  return <SessionProvider>{children}</SessionProvider>
}

