// Utilidad para combinar clases de Tailwind - necesaria para shadcn/ui
// En JavaScript sería más simple, pero TypeScript requiere tipado
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Función para combinar clases de manera inteligente
// Evita conflictos entre clases de Tailwind
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

