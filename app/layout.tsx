// Layout principal de la aplicación Next.js
// Adaptado del código proporcionado con ClientBody para evitar problemas de hidratación

import type { Metadata } from 'next'
import './globals.css'
import ClientBody from './ClientBody'
import Script from 'next/script'

// Metadata para SEO - Next.js permite definir esto directamente
export const metadata: Metadata = {
  title: 'Todo Goma Santa Fe - Artículos de Goma, Ruedas y Correas Industriales',
  description: 'Comercialización de artículos de goma, ruedas y correas industriales. Stock amplio. Envíos a todo el país.',
}

// Componente Layout - adaptado del código proporcionado
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="antialiased">
      <head>
        {/* Script para same-runtime si es necesario */}
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        {/* ClientBody limpia clases añadidas por extensiones durante la hidratación */}
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  )
}

