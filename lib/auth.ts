// Configuración de NextAuth.js
// NextAuth es una librería de autenticación para Next.js
// En JavaScript sería similar, pero TypeScript añade tipos para mayor seguridad

import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from './prisma'
import bcrypt from 'bcryptjs'

// Opciones de configuración de NextAuth
// TypeScript requiere tipar NextAuthOptions
export const authOptions: NextAuthOptions = {
  providers: [
    // Proveedor de credenciales (email/password)
    // Similar a configurar un login tradicional
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // Verificar que se proporcionaron credenciales
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        // Buscar usuario en la base de datos
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        })

        if (!user) {
          return null // Usuario no encontrado
        }

        // Verificar contraseña - bcrypt compara el hash
        // En JavaScript sería igual: bcrypt.compare()
        const isValidPassword = await bcrypt.compare(
          credentials.password,
          user.password
        )

        if (!isValidPassword) {
          return null // Contraseña incorrecta
        }

        // Retornar objeto de usuario (se guarda en la sesión)
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        }
      },
    }),
  ],
  pages: {
    signIn: '/acceder', // Página personalizada de login
  },
  session: {
    strategy: 'jwt', // Usar JWT para la sesión (más seguro que cookies)
  },
  callbacks: {
    // Callback que se ejecuta cuando se crea/actualiza la sesión
    async jwt({ token, user }) {
      // Agregar información del usuario al token
      // En JavaScript sería igual, pero TypeScript requiere el cast 'as any' para propiedades personalizadas
      if (user) {
        token.id = user.id
        token.role = (user as any).role
      }
      return token
    },
    async session({ session, token }) {
      // Agregar información del token a la sesión
      // TypeScript requiere el cast 'as any' para agregar propiedades personalizadas
      if (session.user && token) {
        (session.user as any).id = token.id
        ;(session.user as any).role = token.role
      }
      return session
    },
  },
  // Agregar secret para JWT - necesario para producción
  secret: process.env.NEXTAUTH_SECRET,
}

