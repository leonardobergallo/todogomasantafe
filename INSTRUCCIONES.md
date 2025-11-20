# Instrucciones Rápidas de Instalación

## Pasos para poner en marcha el proyecto

### 1. Instalar dependencias
```bash
npm install
```

### 2. Configurar base de datos

Crea un archivo `.env` en la raíz con:
```env
DATABASE_URL="postgresql://usuario:password@localhost:5432/todogomasantafe?schema=public"
NEXTAUTH_SECRET="genera-un-secret-aleatorio-aqui"
NEXTAUTH_URL="http://localhost:3000"
```

**Para generar NEXTAUTH_SECRET:**
- Windows PowerShell: `[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Maximum 256 }))`
- Linux/Mac: `openssl rand -base64 32`

### 3. Configurar Prisma
```bash
# Generar cliente
npm run db:generate

# Crear tablas
npm run db:push

# Poblar datos iniciales
npm run db:seed
```

### 4. Iniciar servidor
```bash
npm run dev
```

Abre http://localhost:3000

## Credenciales de Admin

- Email: `admin@todogoma.com`
- Contraseña: `admin123`

⚠️ **Cambiar en producción**

## Estructura Principal

- `app/` - Páginas y rutas (Next.js App Router)
- `components/` - Componentes React reutilizables
- `lib/` - Utilidades (Prisma, Auth)
- `prisma/` - Esquema de base de datos
- `types/` - Tipos TypeScript personalizados

## Comandos Útiles

- `npm run dev` - Desarrollo
- `npm run build` - Build para producción
- `npm run db:studio` - Interfaz visual de la base de datos
- `npm run lint` - Verificar errores de código

