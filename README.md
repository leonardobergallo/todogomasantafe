# Todo Goma Santa Fe

Sitio web moderno para Todo Goma Santa Fe, desarrollado con Next.js, TypeScript y Prisma. Réplica exacta del sitio original pero con tecnología moderna.

## Tecnologías

- **Next.js 14** - Framework React con App Router (renderizado del lado del servidor)
- **TypeScript** - Tipado estático para mayor seguridad y productividad
- **Prisma** - ORM para base de datos PostgreSQL
- **NextAuth.js** - Sistema de autenticación seguro
- **Tailwind CSS** - Framework de estilos utility-first
- **shadcn/ui** - Componentes UI modernos y accesibles
- **Lucide React** - Iconos modernos y ligeros
- **Radix UI** - Componentes primitivos accesibles

## Características

- ✅ Página de inicio con hero, categorías y últimos productos
- ✅ Catálogo de productos con filtros por categoría
- ✅ Páginas individuales de productos
- ✅ Sistema de autenticación (login/logout)
- ✅ Formulario de contacto
- ✅ Página de preguntas frecuentes
- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ Base de datos con Prisma ORM
- ✅ API REST para productos y categorías

## Instalación

### 1. Instalar dependencias

```bash
npm install
```

**Nota:** El proyecto ahora incluye componentes de shadcn/ui. Si encuentras algún error, asegúrate de que todas las dependencias estén instaladas correctamente.

### 2. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto (puedes copiar `.env.example`):

```env
# Base de datos PostgreSQL
DATABASE_URL="postgresql://usuario:password@localhost:5432/todogomasantafe?schema=public"

# NextAuth.js - Genera un secret aleatorio (puedes usar: openssl rand -base64 32)
NEXTAUTH_SECRET="tu-secret-key-super-segura-aqui"
NEXTAUTH_URL="http://localhost:3000"
```

### 3. Configurar la base de datos

Asegúrate de tener PostgreSQL instalado y corriendo. Luego:

```bash
# Generar el cliente de Prisma
npm run db:generate

# Crear las tablas en la base de datos
npm run db:push

# Poblar la base de datos con datos iniciales
npm run db:seed
```

### 4. Iniciar servidor de desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Scripts Disponibles

- `npm run dev` - Inicia servidor de desarrollo en modo hot-reload
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia servidor de producción (después de build)
- `npm run lint` - Ejecuta el linter de ESLint
- `npm run db:generate` - Genera el cliente de Prisma
- `npm run db:push` - Sincroniza el esquema con la base de datos (sin migraciones)
- `npm run db:migrate` - Crea y aplica migraciones de base de datos
- `npm run db:studio` - Abre Prisma Studio (interfaz visual para la BD)
- `npm run db:seed` - Pobla la base de datos con datos iniciales

## Estructura del Proyecto

```
todogomasantafe/
├── app/                    # App Router de Next.js 14
│   ├── api/               # API Routes
│   ├── producto/          # Páginas dinámicas de productos
│   ├── tienda/            # Página de catálogo
│   ├── contacto/          # Página de contacto
│   └── layout.tsx         # Layout principal
├── components/            # Componentes React reutilizables
├── lib/                   # Utilidades y configuraciones
│   ├── prisma.ts         # Cliente de Prisma
│   └── auth.ts           # Configuración de NextAuth
├── prisma/                # Esquema y migraciones de Prisma
│   ├── schema.prisma     # Esquema de la base de datos
│   └── seed.ts           # Script para poblar datos iniciales
└── types/                 # Tipos TypeScript personalizados
```

## Usuario Admin por Defecto

Después de ejecutar el seed, puedes iniciar sesión con:

- **Email:** admin@todogoma.com
- **Contraseña:** admin123

⚠️ **Importante:** Cambia esta contraseña en producción.

## Diferencias con JavaScript

Este proyecto usa TypeScript, que añade:

1. **Tipado estático:** Detecta errores antes de ejecutar el código
2. **Autocompletado mejorado:** El IDE sugiere propiedades y métodos disponibles
3. **Refactoring seguro:** Cambiar nombres de variables/funciones es más seguro
4. **Documentación implícita:** Los tipos documentan qué espera cada función

Ejemplo:
- **JavaScript:** `function getUser(id) { ... }` - No sabemos qué tipo es `id`
- **TypeScript:** `function getUser(id: string) { ... }` - Sabemos que `id` es un string

## Próximos Pasos

- [ ] Integrar sistema de pagos
- [ ] Implementar carrito de compras completo
- [ ] Agregar panel de administración
- [ ] Integrar Google Maps en la página de contacto
- [ ] Agregar sistema de búsqueda de productos
- [ ] Implementar reviews/calificaciones
- [ ] Agregar sistema de wishlist

## Soporte

Para más información, contacta a: todogomasantafe@hotmail.com

