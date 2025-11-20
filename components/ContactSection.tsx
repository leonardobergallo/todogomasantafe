// Componente ContactSection - Sección de contacto con mapa y formulario

export default function ContactSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3 text-text-primary">Dónde estamos</h2>
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-10 md:mb-12 text-text-primary">Contacto</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {/* Información de contacto - estilo más profesional */}
          <div>
            <div className="bg-secondary p-6 md:p-8 rounded-lg border-2 border-secondary-darker shadow-soft">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-text-primary">Contacto</h3>
              
              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-md mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-text-primary mb-1">Dirección</p>
                    <p className="text-text-secondary">San Luis 3069, Santa Fe, Argentina</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-md mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-text-primary mb-1">Teléfonos</p>
                    <p className="text-text-secondary">(0342) 4532214</p>
                    <p className="text-text-secondary">+54 9 3425 13-2104</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-md mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-text-primary mb-1">Email</p>
                    <a href="mailto:todogomasantafe@hotmail.com" className="text-primary hover:text-primary-dark transition-colors break-all">
                      todogomasantafe@hotmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa - estilo más profesional */}
          <div className="bg-secondary rounded-lg border-2 border-secondary-darker overflow-hidden shadow-soft">
            <div className="w-full h-96 bg-secondary-dark flex items-center justify-center relative">
              <div className="text-center p-6">
                <svg className="w-16 h-16 text-text-light mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p className="text-text-secondary font-medium">Mapa - Integrar Google Maps aquí</p>
                <p className="text-text-light text-sm mt-2">San Luis 3069, Santa Fe</p>
              </div>
              {/* 
                Para integrar Google Maps, usar:
                <iframe 
                  src="https://www.google.com/maps/embed?pb=..." 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen 
                  loading="lazy"
                  className="absolute inset-0"
                />
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

