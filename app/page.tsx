// Página principal adaptada del código proporcionado
// Usa el nuevo diseño con shadcn/ui y mantiene la funcionalidad de base de datos

"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Menu,
  Search,
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Instagram,
  Facebook,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-[#1a2339] text-white py-4 px-6 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <button 
            className="flex items-center gap-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-5 h-5" />
            <span className="text-sm font-light uppercase">Menu</span>
          </button>
          
          <Link href="/">
            <img
              src="https://ext.same-assets.com/736435192/906506225.png"
              alt="TODO GOMA"
              className="h-8"
            />
          </Link>
          
          <button>
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/20">
            <div className="flex flex-col gap-2 pt-4">
              <Link href="/" className="px-4 py-2 hover:bg-white/10 rounded">Home</Link>
              <Link href="/tienda" className="px-4 py-2 hover:bg-white/10 rounded">Tienda</Link>
              <Link href="/quienes-somos" className="px-4 py-2 hover:bg-white/10 rounded">Quiénes somos</Link>
              <Link href="/preguntas-frecuentes" className="px-4 py-2 hover:bg-white/10 rounded">Preguntas Frecuentes</Link>
              <Link href="/contacto" className="px-4 py-2 hover:bg-white/10 rounded">Contacto</Link>
            </div>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <img
          src="https://ext.same-assets.com/736435192/1240258083.jpeg"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <p className="text-2xl md:text-4xl font-light italic">
              &quot;El lugar,
            </p>
            <p className="text-2xl md:text-4xl font-light italic">
              donde <span className="font-normal">encontrás</span>
            </p>
            <p className="text-2xl md:text-4xl font-light italic">
              todo lo que <span className="font-normal">buscás</span>&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-8 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="relative h-64 overflow-hidden rounded">
            <img
              src="https://ext.same-assets.com/736435192/1240258083.jpeg"
              alt="Store front"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 text-white text-center">
              <p className="text-xl font-light drop-shadow-lg">
                San Luis 3069, Santa Fe
              </p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded">
            <img
              src="https://ext.same-assets.com/736435192/1193587937.jpeg"
              alt="Products"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-64 overflow-hidden rounded">
            <img
              src="https://ext.same-assets.com/736435192/1115846038.jpeg"
              alt="Garden"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 text-white text-center">
              <p className="text-xl font-light drop-shadow-lg">
                Cuidá tu jardín!
              </p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded">
            <img
              src="https://ext.same-assets.com/736435192/4026842929.jpeg"
              alt="Wheels"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-64 overflow-hidden rounded">
            <img
              src="https://ext.same-assets.com/736435192/235408188.jpeg"
              alt="Rubber flooring"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#1a2339] text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-xl md:text-2xl font-light italic leading-relaxed">
            Somos una empresa que se dedica a la comercialización de una gran
            variedad de artículos de goma, contamos con un stock muy amplio de
            ruedas y correas industriales.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full border-2 border-gray-300 mx-auto mb-4"></div>
            <h3 className="text-lg font-medium mb-2">
              Días y horario de atención
            </h3>
            <p className="text-sm text-gray-600">
              Lunes a viernes de 8 a 12 y de 15:30 a 19hs.
            </p>
            <p className="text-sm text-gray-600">
              Sábados de 8:30 a 12:30 hs.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full border-2 border-gray-300 mx-auto mb-4"></div>
            <h3 className="text-lg font-medium mb-2">Envíos a todo el país</h3>
            <p className="text-sm text-gray-600">
              A través de tu transporte de confianza.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full border-2 border-gray-300 mx-auto mb-4"></div>
            <h3 className="text-lg font-medium mb-2">
              Aceptamos todos los medios de pago
            </h3>
            <p className="text-sm text-gray-600">
              Tarjeta de crédito/débito, transferencia, efectivo.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl font-normal text-center mb-8 uppercase tracking-wide">
            Explorar por categoría
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/tienda?categoria=ruedas">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <img
                  src="https://ext.same-assets.com/736435192/1584635554.jpeg"
                  alt="Ruedas"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="font-medium text-sm uppercase mb-1">Ruedas</h3>
                  <p className="text-xs text-gray-500 uppercase">36 Productos</p>
                </div>
              </Card>
            </Link>
            <Link href="/tienda?categoria=ecocur-argentina">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <img
                  src="https://ext.same-assets.com/736435192/3529804783.png"
                  alt="ECOCUR Argentina"
                  className="w-full h-48 object-contain bg-white"
                />
                <div className="p-4 text-center">
                  <h3 className="font-medium text-sm uppercase mb-1">
                    ECOCUR Argentina
                  </h3>
                  <p className="text-xs text-gray-500 uppercase">1 Producto</p>
                </div>
              </Card>
            </Link>
            <Link href="/tienda?categoria=pisos-goma-pvc">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <img
                  src="https://ext.same-assets.com/736435192/3325008651.jpeg"
                  alt="Pisos de goma y PVC"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="font-medium text-sm uppercase mb-1">
                    Pisos de goma y PVC
                  </h3>
                  <p className="text-xs text-gray-500 uppercase">5 Productos</p>
                </div>
              </Card>
            </Link>
            <Link href="/tienda?categoria=perfiles-goma">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <img
                  src="https://ext.same-assets.com/736435192/1407436409.webp"
                  alt="Perfiles de goma"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="font-medium text-sm uppercase mb-1">
                    Perfiles de goma
                  </h3>
                  <p className="text-xs text-gray-500 uppercase">12 Productos</p>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Products Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl font-normal text-center mb-8 uppercase tracking-wide">
            Últimos ingresos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/producto/grupos-electrogenos">
              <Card className="overflow-hidden">
                <img
                  src="https://ext.same-assets.com/736435192/3148928708.jpeg"
                  alt="Grupos electrógenos"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <p className="text-xs text-gray-500 uppercase mb-2">
                    Herramientas
                  </p>
                  <h3 className="font-medium text-sm mb-3">
                    GRUPOS ELECTROGENOS DE 2.2 KVA 3.3 KVA , 6.8KVA Y 9.0 KVA
                  </h3>
                  <Button className="w-full bg-[#1a2339] hover:bg-[#1a2339]/90">
                    Leer más
                  </Button>
                </div>
              </Card>
            </Link>
            <Link href="/producto/bombas-centrifugas">
              <Card className="overflow-hidden">
                <img
                  src="https://ext.same-assets.com/736435192/2358301167.jpeg"
                  alt="Bombas centrífugas"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <p className="text-xs text-gray-500 uppercase mb-2">
                    Herramientas
                  </p>
                  <h3 className="font-medium text-sm mb-3">
                    BOMBAS CENTRIFUGAS 0.5 HP .0.75HP , 1 HP Y 1 1/2HP.
                  </h3>
                  <Button className="w-full bg-[#1a2339] hover:bg-[#1a2339]/90">
                    Leer más
                  </Button>
                </div>
              </Card>
            </Link>
            <Link href="/producto/soldadoras-mig-mma">
              <Card className="overflow-hidden">
                <img
                  src="https://ext.same-assets.com/736435192/30475691.png"
                  alt="Soldadoras"
                  className="w-full h-64 object-contain bg-white"
                />
                <div className="p-4">
                  <p className="text-xs text-gray-500 uppercase mb-2">
                    Herramientas
                  </p>
                  <h3 className="font-medium text-sm mb-3">
                    SOLDADORAS MIG/MMA 130-160AMP
                  </h3>
                  <Button className="w-full bg-[#1a2339] hover:bg-[#1a2339]/90">
                    Leer más
                  </Button>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Secondary Info Section */}
      <section className="bg-[#1a2339] text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-xl md:text-2xl font-light italic leading-relaxed">
            Ofrecemos además una enorme variedad de mangueras, bombas, una
            completa línea de productos de ferretería, de riego, buceo y
            natación.
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl font-normal text-center mb-8 uppercase tracking-wide">
            Dónde estamos
          </h2>
          <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.3847820844975!2d-60.70621692366959!3d-31.619981674148726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b5a9c5c0e0e0e1%3A0x0!2sTODO%20GOMA%20Santa%20Fe!5e0!3m2!1sen!2sar!4v1700000000000!5m2!1sen!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Contact Message Section */}
      <section className="bg-[#1a2339] text-white py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-xl md:text-2xl font-light italic leading-relaxed">
            Estamos capacitados para ofrecerle un asesoramiento personalizado y
            la mejor calidad en nuestros productos.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="bg-gray-100 p-8 rounded">
              <img
                src="https://ext.same-assets.com/736435192/232674438.png"
                alt="TODO GOMA"
                className="h-16 mb-8"
              />
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#1a2339] mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    San Luis 3069, Santa Fe, Argentina
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#1a2339] flex-shrink-0" />
                  <a
                    href="tel:5403424532214"
                    className="text-gray-700 hover:text-[#1a2339]"
                  >
                    (0342) 4532214
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-[#1a2339] flex-shrink-0" />
                  <a
                    href="https://wa.me/5493425132104"
                    className="text-gray-700 hover:text-[#1a2339]"
                  >
                    +54 9 3425 13-2104
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#1a2339] flex-shrink-0" />
                  <a
                    href="mailto:todogomasantafe@hotmail.com"
                    className="text-gray-700 hover:text-[#1a2339]"
                  >
                    todogomasantafe@hotmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Instagram className="w-5 h-5 text-[#1a2339] flex-shrink-0" />
                  <a
                    href="https://www.instagram.com/todogomasanta"
                    className="text-gray-700 hover:text-[#1a2339]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    todogomasanta
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Facebook className="w-5 h-5 text-[#1a2339] flex-shrink-0" />
                  <a
                    href="https://www.facebook.com/todogomasantafe"
                    className="text-gray-700 hover:text-[#1a2339]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    todogomasantafe
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-100 p-8 rounded">
              <h2 className="text-2xl font-normal mb-6 text-[#1a2339] uppercase tracking-wide">
                Contacto
              </h2>
              <form className="space-y-4" action="/api/contact" method="POST">
                <Input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  className="bg-white border-gray-300"
                  required
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Teléfono"
                  className="bg-white border-gray-300"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  className="bg-white border-gray-300"
                  required
                />
                <Textarea
                  name="message"
                  placeholder="Mensaje"
                  rows={5}
                  className="bg-white border-gray-300 resize-none"
                  required
                />
                <Button type="submit" className="bg-[#1a2339] hover:bg-[#1a2339]/90 text-white uppercase px-8 w-full">
                  Enviar
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f1623] text-white py-6 px-4 text-center">
        <p className="text-sm text-gray-400">
          Desarrollado por Grupo Sandoval
        </p>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5493425132104"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110 z-50"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  )
}


