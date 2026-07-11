"use client"

import { useEffect, useState } from "react"
import { MeshGradient } from "@paper-design/shaders-react"

const STATIC_FALLBACK_STYLE = {
  backgroundImage:
    "radial-gradient(60% 60% at 75% 30%, rgba(139, 92, 246, 0.22), transparent 65%), radial-gradient(50% 55% at 20% 80%, rgba(167, 139, 250, 0.14), transparent 70%)",
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

const NODES = [
  { x: 60, y: 16, r: 0.9, delay: "0s" },
  { x: 82, y: 10, r: 0.6, delay: "0.6s" },
  { x: 93, y: 32, r: 0.75, delay: "1.2s" },
  { x: 69, y: 44, r: 1.1, delay: "0.3s" },
  { x: 89, y: 60, r: 0.6, delay: "1.8s" },
  { x: 58, y: 70, r: 0.7, delay: "0.9s" },
  { x: 78, y: 83, r: 0.6, delay: "2.1s" },
  { x: 40, y: 88, r: 0.5, delay: "1.5s" },
]

const EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [0, 3],
  [2, 3],
  [3, 4],
  [3, 5],
  [4, 6],
  [5, 6],
  [5, 7],
]

/**
 * Full-bleed hero background: an animated violet mesh gradient plus a
 * drifting constellation (echoing the CV/network theme), scrimmed so the
 * hero text on the left always stays legible. Falls back to a static
 * gradient under prefers-reduced-motion or when WebGL is unavailable.
 */
export function HeroBackground() {
  const [canAnimate, setCanAnimate] = useState(false)

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    setCanAnimate(!reduceMotion && webglAvailable())
  }, [])

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-background">
      <div className="absolute inset-0" style={STATIC_FALLBACK_STYLE} />

      {canAnimate && (
        <MeshGradient
          className="absolute inset-0 h-full w-full opacity-90"
          colors={["#0b0a12", "#1c1829", "#8b5cf6", "#a78bfa"]}
          speed={0.3}
          distortion={0.85}
          swirl={0.35}
          fit="cover"
        />
      )}

      <svg
        className="absolute inset-0 h-full w-full opacity-70"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <g stroke="#a78bfa" strokeOpacity="0.35" strokeWidth="0.15">
          {EDGES.map(([a, b], i) => (
            <line key={i} x1={NODES[a].x} y1={NODES[a].y} x2={NODES[b].x} y2={NODES[b].y} />
          ))}
        </g>
        {NODES.map((n, i) => (
          <circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill="#a78bfa"
            className="hero-node"
            style={{ animationDelay: n.delay }}
          />
        ))}
      </svg>

      {/* scrim: keeps the left-aligned text legible over the animated bg */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(90deg, var(--background) 0%, rgba(11,10,18,0.78) 30%, rgba(11,10,18,0.3) 58%, transparent 82%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(0deg, var(--background) 0%, transparent 20%, transparent 80%, var(--background) 100%)",
        }}
      />
    </div>
  )
}
