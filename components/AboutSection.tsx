// Componente AboutSection - Sección "Sobre nosotros" / información adicional
// Replica la sección del sitio original con el texto y diseño similar

export default function AboutSection() {
  return (
    <section className="py-12 md:py-16 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Sección principal con imagen y texto - replicando exactamente el diseño */}
        <div className="max-w-6xl mx-auto">
          {/* Imagen destacada con texto - estilo del sitio original */}
          <div className="relative w-full h-[280px] md:h-[380px] lg:h-[420px] bg-gradient-to-br from-white to-secondary mb-10 md:mb-12 rounded-lg overflow-hidden border-2 border-secondary-darker">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-white via-secondary to-white">
              <div className="text-center px-4 z-10">
                <p className="text-xl md:text-2xl lg:text-3xl font-bold text-text-primary italic">
                  Frente
                </p>
              </div>
              <div className="absolute inset-0 bg-white/30"></div>
            </div>
            {/* 
              Cuando tengas la imagen, reemplaza con:
              <Image src="/images/frente-2.jpg" alt="Frente" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/5"></div>
            */}
          </div>

          {/* Texto descriptivo - exactamente como el sitio original */}
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <p className="text-base md:text-lg lg:text-xl text-text-secondary leading-relaxed italic font-normal">
              Ofrecemos además una enorme variedad de mangueras, bombas, una completa línea 
              de productos de ferretería, de riego, buceo y natación.
            </p>
          </div>
        </div>

        {/* Información destacada - diseño más fiel al original */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 md:p-7 rounded-lg border-2 border-secondary-darker text-center shadow-soft">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-base md:text-lg mb-3 text-text-primary">Días y horario de atención</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Lunes a viernes de 8 a 12 y de 15:30 a 19hs.<br />
              Sábados de 8:30 a 12:30 hs.
            </p>
          </div>

          <div className="bg-white p-6 md:p-7 rounded-lg border-2 border-secondary-darker text-center shadow-soft">
            <div className="bg-green-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="font-bold text-base md:text-lg mb-3 text-text-primary">Envíos a todo el país</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              A través de tu transporte de confianza.
            </p>
          </div>

          <div className="bg-white p-6 md:p-7 rounded-lg border-2 border-secondary-darker text-center shadow-soft">
            <div className="bg-purple-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h3 className="font-bold text-base md:text-lg mb-3 text-text-primary">Aceptamos todos los medios de pago</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Tarjeta de crédito/débito, transferencia, efectivo.
            </p>
          </div>
        </div>

        {/* Texto final - igual al sitio original */}
        <div className="max-w-4xl mx-auto text-center mt-12 md:mt-16">
          <p className="text-base md:text-lg lg:text-xl text-text-secondary leading-relaxed italic font-normal">
            Estamos capacitados para ofrecerle un asesoramiento personalizado y la mejor 
            calidad en nuestros productos.
          </p>
        </div>
      </div>
    </section>
  )
}

