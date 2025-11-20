// Tipos personalizados para NextAuth
// Extiende los tipos por defecto de NextAuth para incluir información adicional
// En JavaScript esto no sería necesario, pero TypeScript necesita estas declaraciones

import 'next-auth'
import 'next-auth/jwt'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      email: string
      name?: string | null
      role?: string
    }
  }

  interface User {
    id: string
    email: string
    name?: string | null
    role?: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string
    role?: string
  }
}

