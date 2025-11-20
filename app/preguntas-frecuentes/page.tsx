// Página de Preguntas Frecuentes

'use client' // Client Component para interactividad de acordeón

import { useState } from 'react'

// Tipo para las preguntas - en JavaScript esto sería un objeto simple
interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: '¿Hacen envíos a todo el país?',
    answer: 'Sí, realizamos envíos a todo el país a través de tu transporte de confianza.',
  },
  {
    question: '¿Qué medios de pago aceptan?',
    answer: 'Aceptamos tarjeta de crédito/débito, transferencia bancaria y efectivo.',
  },
  {
    question: '¿Cuáles son los horarios de atención?',
    answer: 'Lunes a viernes de 8:00 a 12:00 y de 15:30 a 19:00. Sábados de 8:30 a 12:30.',
  },
  {
    question: '¿Tienen stock de todos los productos?',
    answer: 'Contamos con un stock amplio, pero te recomendamos contactarnos para confirmar disponibilidad de productos específicos.',
  },
  {
    question: '¿Ofrecen asesoramiento técnico?',
    answer: 'Sí, estamos capacitados para ofrecerle un asesoramiento personalizado sobre nuestros productos.',
  },
]

export default function PreguntasFrecuentesPage() {
  // Estado para controlar qué pregunta está abierta
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // Toggle para abrir/cerrar preguntas
  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Preguntas Frecuentes</h1>

      <div className="max-w-3xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Pregunta - clickeable */}
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Respuesta - se muestra/oculta */}
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Sección de contacto adicional */}
        <div className="mt-8 bg-blue-50 p-6 rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-2">¿No encontraste tu respuesta?</h2>
          <p className="text-gray-700 mb-4">
            Contáctanos y te ayudaremos con cualquier consulta.
          </p>
          <a
            href="/contacto"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Contactarnos
          </a>
        </div>
      </div>
    </div>
  )
}

