"use client"

import { useEffect, useState } from "react"
import { MeshGradient } from "@paper-design/shaders-react"

const STATIC_FALLBACK_STYLE = {
  backgroundImage:
    "radial-gradient(circle at 30% 25%, rgba(139, 92, 246, 0.16), transparent 60%)",
}

function webglAvailable() {
  try {
    const canvas = document.createElement("canvas")
    return !!(
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl")
    )
  } catch {
    return false
  }
}

/**
 * The hero visual panel: a bounded square card that replaces the earlier
 * SVG network-graph placeholder with an animated violet mesh gradient.
 * Falls back to a static gradient under prefers-reduced-motion or when
 * WebGL isn't available, so the hero never breaks.
 */
export function HeroShaderPanel() {
  const [canAnimate, setCanAnimate] = useState(false)

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    setCanAnimate(!reduceMotion && webglAvailable())
  }, [])

  return (
    <div className="relative aspect-square rounded-[24px] border border-border overflow-hidden bg-card">
      <div className="absolute inset-0" style={STATIC_FALLBACK_STYLE} />
      {canAnimate && (
        <MeshGradient
          className="absolute inset-0 h-full w-full"
          colors={["#0b0a12", "#1c1829", "#8b5cf6", "#a78bfa"]}
          speed={0.35}
          distortion={0.8}
          swirl={0.3}
          fit="cover"
        />
      )}
    </div>
  )
}
