"use client"

import { useEffect, useState } from "react"

/** Scrollspy: tracks which section id is currently most in view. */
export function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState(ids[0])

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (!elements.length || !("IntersectionObserver" in window)) return

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length === 0) return
        const top = visible.reduce((a, b) => (a.intersectionRatio > b.intersectionRatio ? a : b))
        setActiveId(top.target.id)
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    )
    elements.forEach((el) => io.observe(el))
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(",")])

  return activeId
}
