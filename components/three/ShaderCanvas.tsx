"use client"

import { Canvas } from "@react-three/fiber"
import { ShaderPlane, EnergyRing } from "@/components/ui/background-paper-shaders"

/**
 * Minimal Canvas host for the ported ShaderPlane/EnergyRing primitives.
 * Not wired into any page by default; mount where a raw r3f scene is wanted.
 */
export function ShaderCanvas({ className }: { className?: string }) {
  return (
    <Canvas
      className={className}
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 3], fov: 50 }}
      gl={{ alpha: true, antialias: true }}
    >
      <ShaderPlane position={[0, 0, 0]} />
      <EnergyRing radius={1.4} position={[0, 0, 0.1]} />
    </Canvas>
  )
}
