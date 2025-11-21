// Configuración de NextAuth.js
// NextAuth es una librería de autenticación para Next.js
// En JavaScript sería similar, pero TypeScript añade tipos para mayor seguridad

import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'

// Importar prisma de forma lazy para evitar errores durante el build
// En JavaScript sería igual, pero TypeScript requiere tipado
async function getPrisma() {
  try {
    const { prisma } = await import('./prisma')
    return prisma
  } catch (error) {
    console.error('Error al importar Prisma:', error)
    // Retornar null si hay error, el authorize manejará esto
    return null
  }
}

// Función para obtener las opciones de NextAuth de forma lazy
// Esto evita que se ejecute durante el build
function getAuthOptions(): NextAuthOptions {
  return {
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
        try {
          // Verificar que se proporcionaron credenciales
          if (!credentials?.email || !credentials?.password) {
            return null
          }

          // Obtener instancia de Prisma de forma lazy
          const prismaClient = await getPrisma()
          
          // Si Prisma no está disponible, retornar null
          if (!prismaClient) {
            console.error('Prisma no está disponible')
            return null
          }
          
          // Buscar usuario en la base de datos
          const user = await prismaClient.user.findUnique({
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
        } catch (error) {
          // Manejar errores de base de datos o bcrypt
          console.error('Error en authorize:', error)
          return null
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
    // Si no hay secret, NextAuth usará uno por defecto en desarrollo
    secret: process.env.NEXTAUTH_SECRET || 'dev-secret-key-change-in-production',
  }
}

// Exportar función que retorna las opciones (lazy evaluation)
// Esto evita que se ejecute durante el build
export const authOptions: NextAuthOptions = getAuthOptions()
}

// Exportar función que retorna las opciones
// Esto evita que se ejecute durante el build
export const authOptions: NextAuthOptions = getAuthOptions()

