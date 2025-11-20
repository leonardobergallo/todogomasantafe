// Componente Hero - Sección principal de la página de inicio
// Replica la sección "Frente" del sitio original con imagen del local
// En TypeScript, no necesitamos tipar el componente si no recibe props

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="w-full bg-white">
      {/* Imagen del frente del local - replicando exactamente el diseño del sitio original */}
      <div className="relative w-full h-[350px] md:h-[450px] lg:h-[500px] bg-gradient-to-br from-secondary to-secondary-dark overflow-hidden">
        {/* Placeholder para imagen del frente - estilo más parecido al original */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-white via-secondary to-white">
          <div className="text-center px-4 z-10">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-3">
              <span className="text-primary">San Luis 3069, Santa Fe</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-text-secondary italic font-medium">
              Frente
            </p>
          </div>
          {/* Overlay sutil para mejor legibilidad */}
          <div className="absolute inset-0 bg-white/20"></div>
        </div>
        {/* 
          Cuando tengas la imagen del frente, reemplaza el div anterior con:
          <Image
            src="/images/frente.jpg"
            alt="Frente - San Luis 3069, Santa Fe"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/10"></div>
        */}
      </div>

      {/* Texto descriptivo debajo de la imagen - exactamente como el sitio original */}
      <div className="container mx-auto px-4 py-10 md:py-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-base md:text-lg lg:text-xl text-text-secondary leading-relaxed italic font-normal">
            Somos una empresa que se dedica a la comercialización de una gran variedad 
            de artículos de goma, contamos con un stock muy amplio de ruedas y correas industriales.
          </p>
        </div>
      </div>
    </section>
  )
}

