// Componente HowToBuy - Sección "Cómo comprar" del sitio original
// Esta sección aparece en el sitio original y la replicamos aquí

export default function HowToBuy() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10 md:mb-12 text-text-primary">
          Cómo comprar
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Paso 1 */}
            <div className="text-center p-6 md:p-7 bg-secondary rounded-lg border-2 border-secondary-darker shadow-soft">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-5 text-xl md:text-2xl font-bold">
                1
              </div>
              <h3 className="font-bold text-base md:text-lg mb-3 text-text-primary">Explora el catálogo</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Navega por nuestras categorías y encuentra el producto que necesitas.
              </p>
            </div>

            {/* Paso 2 */}
            <div className="text-center p-6 md:p-7 bg-secondary rounded-lg border-2 border-secondary-darker shadow-soft">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-5 text-xl md:text-2xl font-bold">
                2
              </div>
              <h3 className="font-bold text-base md:text-lg mb-3 text-text-primary">Consulta disponibilidad</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Contacta con nosotros para confirmar stock y recibir asesoramiento personalizado.
              </p>
            </div>

            {/* Paso 3 */}
            <div className="text-center p-6 md:p-7 bg-secondary rounded-lg border-2 border-secondary-darker shadow-soft">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-5 text-xl md:text-2xl font-bold">
                3
              </div>
              <h3 className="font-bold text-base md:text-lg mb-3 text-text-primary">Realiza tu pedido</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Completa tu compra y coordina el envío o retiro en nuestro local.
              </p>
            </div>
          </div>

          {/* Información adicional - estilo más profesional */}
          <div className="mt-10 md:mt-12 text-center">
            <p className="text-text-secondary text-base md:text-lg">
              ¿Tienes dudas? <a href="/contacto" className="text-primary font-semibold hover:text-primary-dark transition-colors">Contáctanos</a> y te ayudaremos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

