// Componente Calculador - calculadora de superficie y perímetro
// Replica la funcionalidad del sitio original

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function Calculator() {
  const [mode, setMode] = useState<"surface" | "perimeter">("surface")
  const [length, setLength] = useState("")
  const [width, setWidth] = useState("")
  const [result, setResult] = useState<number | null>(null)
  const [sides, setSides] = useState([{ id: 1, value: "" }])

  // Calcular superficie
  const calculateSurface = () => {
    const l = parseFloat(length)
    const w = parseFloat(width)
    if (l > 0 && w > 0) {
      setResult(l * w)
    } else {
      setResult(null)
    }
  }

  // Calcular perímetro
  const calculatePerimeter = () => {
    const validSides = sides
      .map((s) => parseFloat(s.value))
      .filter((v) => !isNaN(v) && v > 0)
    
    if (validSides.length >= 2) {
      const perimeter = validSides.reduce((sum, side) => sum + side, 0)
      setResult(perimeter)
    } else {
      setResult(null)
    }
  }

  const addSide = () => {
    setSides([...sides, { id: Date.now(), value: "" }])
  }

  const updateSide = (id: number, value: string) => {
    setSides(sides.map((s) => (s.id === id ? { ...s, value } : s)))
  }

  const reset = () => {
    setLength("")
    setWidth("")
    setResult(null)
    setSides([{ id: 1, value: "" }])
  }

  return (
    <Card className="p-6 bg-white">
      <h4 className="text-lg font-bold mb-4 text-[#1a2339]">CALCULADOR</h4>
      
      {/* Selector de modo */}
      <div className="flex gap-2 mb-6">
        <Button
          variant={mode === "surface" ? "default" : "outline"}
          onClick={() => {
            setMode("surface")
            reset()
          }}
          className={mode === "surface" ? "bg-[#1a2339] hover:bg-[#1a2339]/90" : ""}
        >
          SUPERFICIE
        </Button>
        <Button
          variant={mode === "perimeter" ? "default" : "outline"}
          onClick={() => {
            setMode("perimeter")
            reset()
          }}
          className={mode === "perimeter" ? "bg-[#1a2339] hover:bg-[#1a2339]/90" : ""}
        >
          PERÍMETRO
        </Button>
      </div>

      {/* Modo Superficie */}
      {mode === "surface" && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Longitud (m):</label>
            <Input
              type="number"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              placeholder="0"
              className="bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Ancho (m):</label>
            <Input
              type="number"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              placeholder="0"
              className="bg-white"
            />
          </div>
          <Button
            onClick={calculateSurface}
            className="w-full bg-[#1a2339] hover:bg-[#1a2339]/90"
          >
            Calcular
          </Button>
          {result !== null && (
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-lg font-bold">
                Superficie: {result.toFixed(2)} m²
              </p>
            </div>
          )}
        </div>
      )}

      {/* Modo Perímetro */}
      {mode === "perimeter" && (
        <div className="space-y-4">
          {sides.map((side, index) => (
            <div key={side.id}>
              <label className="block text-sm font-medium mb-2">
                Lado {index + 1} (m):
              </label>
              <Input
                type="number"
                value={side.value}
                onChange={(e) => updateSide(side.id, e.target.value)}
                placeholder="0"
                className="bg-white"
              />
            </div>
          ))}
          <div className="flex gap-2">
            <Button
              onClick={calculatePerimeter}
              className="flex-1 bg-[#1a2339] hover:bg-[#1a2339]/90"
            >
              Calcular Perímetro
            </Button>
            <Button
              onClick={addSide}
              variant="outline"
              className="flex-1"
            >
              Agregar otro lado
            </Button>
            <Button
              onClick={reset}
              variant="outline"
              className="flex-1"
            >
              Volver a comenzar
            </Button>
          </div>
          {result !== null && (
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-lg font-bold">
                Perímetro: {result.toFixed(2)} m
              </p>
            </div>
          )}
        </div>
      )}
    </Card>
  )
}

