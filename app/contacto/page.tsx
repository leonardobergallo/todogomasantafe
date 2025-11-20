// Página de Contacto - Formulario de contacto

'use client' // Client Component porque usamos formulario con estado

import { useState } from 'react'

export default function ContactoPage() {
  // Estado para el formulario - useState igual que en JavaScript
  // TypeScript infiere que es string automáticamente
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Manejar cambios en los inputs - función tipada
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // En JavaScript: const { name, value } = e.target
    // TypeScript añade tipos pero la lógica es igual
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Manejar envío del formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() // Prevenir recarga de página
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Aquí se enviaría a una API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Contacto</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Formulario de contacto */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Escríbenos</h2>
          
          {submitStatus === 'success' && (
            <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
              ¡Mensaje enviado correctamente! Te contactaremos pronto.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
              Error al enviar el mensaje. Por favor, intenta nuevamente.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Nombre *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Mensaje *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
            </button>
          </form>
        </div>

        {/* Información de contacto */}
        <div>
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-semibold mb-4">Información de contacto</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Dirección</h3>
                <p className="text-gray-600">San Luis 3069, Santa Fe, Argentina</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Teléfonos</h3>
                <p className="text-gray-600">(0342) 4532214</p>
                <p className="text-gray-600">+54 9 3425 13-2104</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a href="mailto:todogomasantafe@hotmail.com" className="text-blue-600 hover:underline">
                  todogomasantafe@hotmail.com
                </a>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Horarios</h3>
                <p className="text-gray-600">
                  Lunes a viernes: 8:00 - 12:00 y 15:30 - 19:00<br />
                  Sábados: 8:30 - 12:30
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

