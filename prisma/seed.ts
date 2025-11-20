// Script de seed - Poblar la base de datos con datos iniciales
// Se ejecuta con: npm run db:seed

import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Iniciando seed...')

  // Crear categorías
  const categories = [
    { name: 'Ruedas', slug: 'ruedas', description: 'Ruedas industriales y comerciales' },
    { name: 'ECOCUR ARGENTINA', slug: 'ecocur-argentina', description: 'Pisos de caucho reciclado' },
    { name: 'Pisos de goma y PVC.', slug: 'pisos-goma-pvc', description: 'Pisos de goma y PVC' },
    { name: 'Perfiles de goma', slug: 'perfiles-goma', description: 'Perfiles de goma para diversos usos' },
    { name: 'Mangueras', slug: 'mangueras', description: 'Mangueras industriales y de riego' },
    { name: 'Correas', slug: 'correas', description: 'Correas industriales' },
    { name: 'Herramientas', slug: 'herramientas', description: 'Herramientas y equipos' },
    { name: 'De todo y más', slug: 'de-todo-y-mas', description: 'Productos varios' },
    { name: 'Jardin, accesorios y acoples', slug: 'jardin-accesorios-acoples', description: 'Productos para jardín' },
  ]

  console.log('📦 Creando categorías...')
  for (const categoryData of categories) {
    await prisma.category.upsert({
      where: { slug: categoryData.slug },
      update: {},
      create: categoryData,
    })
  }

  // Obtener categorías creadas para asociar productos
  const ruedasCategory = await prisma.category.findUnique({ where: { slug: 'ruedas' } })
  const herramientasCategory = await prisma.category.findUnique({ where: { slug: 'herramientas' } })
  const deTodoCategory = await prisma.category.findUnique({ where: { slug: 'de-todo-y-mas' } })
  const pisosCategory = await prisma.category.findUnique({ where: { slug: 'pisos-goma-pvc' } })
  const ecocurCategory = await prisma.category.findUnique({ where: { slug: 'ecocur-argentina' } })

  // Crear productos de ejemplo
  console.log('🛍️ Creando productos...')
  const products = [
    {
      name: 'GRUPOS ELECTROGENOS DE 2.2 KVA 3.3 KVA, 6.8KVA Y 9.0 KVA',
      slug: 'grupos-electrogenos',
      description: 'Grupos electrógenos de diferentes potencias para uso industrial y comercial.',
      categoryId: herramientasCategory?.id || '',
      stock: 5,
      featured: true,
    },
    {
      name: 'BOMBAS CENTRIFUGAS 0.5 HP .0.75HP, 1 HP Y 1 1/2HP.',
      slug: 'bombas-centrifugas',
      description: 'Bombas centrífugas de diferentes potencias.',
      categoryId: herramientasCategory?.id || '',
      stock: 8,
      featured: true,
    },
    {
      name: 'SOLDADORAS MIG/MMA 130-160AMP',
      slug: 'soldadoras-mig-mma',
      description: 'Soldadoras MIG/MMA profesionales.',
      categoryId: herramientasCategory?.id || '',
      stock: 3,
      featured: true,
    },
    {
      name: 'SOLDADORAS LASER GREAT LINEA PROFESIONAL 180 Y 200 AMP.',
      slug: 'soldadoras-laser-great',
      description: 'Soldadoras láser de línea profesional.',
      categoryId: herramientasCategory?.id || '',
      stock: 2,
      featured: true,
    },
    {
      name: 'ESPUMA POLIPROPILENO PARA BAJO PILETAS',
      slug: 'espuma-polipropileno',
      description: 'Espuma de polipropileno para instalación bajo piletas.',
      categoryId: deTodoCategory?.id || '',
      stock: 20,
    },
    {
      name: 'GOMA EN PLANCHA NATURAL, SANITARIA Y CARAMELO',
      slug: 'goma-plancha',
      description: 'Goma en plancha en diferentes variedades.',
      categoryId: pisosCategory?.id || '',
      stock: 15,
    },
    {
      name: 'PISOS DE CAUCHO RECICLADO',
      slug: 'pisos-caucho-reciclado',
      description: 'Pisos de caucho reciclado ECOCUR.',
      categoryId: ecocurCategory?.id || '',
      stock: 10,
      featured: true,
    },
  ]

  // Crear productos
  for (const productData of products) {
    if (productData.categoryId) {
      await prisma.product.upsert({
        where: { slug: productData.slug },
        update: {},
        create: productData,
      })
    }
  }

  // Crear producto ejemplo: CÁMARAS PARA RUEDAS con variantes (como en el sitio original)
  console.log('🛞 Creando producto ejemplo: Cámaras para ruedas...')
  if (ruedasCategory?.id) {
    const camarasProduct = await prisma.product.upsert({
      where: { slug: 'camaras-para-ruedas-rodado-4-y-8' },
      update: {},
      create: {
        name: 'CAMARAS PARA RUEDAS RODADO 4 Y 8.',
        slug: 'camaras-para-ruedas-rodado-4-y-8',
        description: 'CAMARAS PARA TODOS LOS MODELOS EN RODADO 4 Y 8.',
        categoryId: ruedasCategory.id,
        stock: 140, // Stock total (suma de todas las variantes)
        featured: true,
      },
    })

    // Crear variantes de cámaras (exactamente como en el sitio original)
    const variants = [
      { code: '9558', diameter: '200', description: '200 x 50 Pico curvo', stock: 20 },
      { code: '9559', diameter: '220', description: '2.50-4" Pico curvo', stock: 20 },
      { code: '9560', diameter: '250', description: '3.50-4" Pico curvo', stock: 20 },
      { code: '9561', diameter: '250', description: '3.50-4" Pico recto', stock: 20 },
      { code: '9562', diameter: '350', description: '3.00-8" Pico recto', stock: 20 },
      { code: '9569', diameter: '375', description: '3.50-8" Pico recto', stock: 20 },
      { code: '9563', diameter: '400', description: '4.00-8" Pico recto', stock: 20 },
    ]

    console.log('📋 Creando variantes de cámaras...')
    for (const variantData of variants) {
      // Buscar si ya existe una variante con este código para este producto
      const existing = await prisma.productVariant.findFirst({
        where: {
          productId: camarasProduct.id,
          code: variantData.code,
        },
      })

      if (!existing) {
        await prisma.productVariant.create({
          data: {
            productId: camarasProduct.id,
            code: variantData.code,
            diameter: variantData.diameter,
            description: variantData.description,
            stock: variantData.stock,
          },
        })
      } else {
        // Actualizar si existe
        await prisma.productVariant.update({
          where: { id: existing.id },
          data: {
            diameter: variantData.diameter,
            description: variantData.description,
            stock: variantData.stock,
          },
        })
      }
    }
  }

  // Crear usuario admin de ejemplo
  console.log('👤 Creando usuario admin...')
  const hashedPassword = await bcrypt.hash('admin123', 10) // Contraseña por defecto: admin123

  await prisma.user.upsert({
    where: { email: 'admin@todogoma.com' },
    update: {},
    create: {
      email: 'admin@todogoma.com',
      password: hashedPassword,
      name: 'Administrador',
      role: 'ADMIN',
    },
  })

  console.log('✅ Seed completado!')
}

main()
  .catch((e) => {
    console.error('❌ Error en seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

