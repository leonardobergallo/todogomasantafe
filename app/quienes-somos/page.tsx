// Página "Quiénes somos" - Información sobre la empresa

export default function QuienesSomosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Quiénes somos</h1>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Nuestra empresa</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Somos una empresa que se dedica a la comercialización de una gran variedad 
            de artículos de goma, contamos con un stock muy amplio de ruedas y correas industriales.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Ofrecemos además una enorme variedad de mangueras, bombas, una completa línea 
            de productos de ferretería, de riego, buceo y natación.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Estamos capacitados para ofrecerle un asesoramiento personalizado y la mejor 
            calidad en nuestros productos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">+20</div>
            <p className="text-gray-600">Años de experiencia</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
            <p className="text-gray-600">Productos en stock</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">Todo</div>
            <p className="text-gray-600">El país</p>
          </div>
        </div>
      </div>
    </div>
  )
}

