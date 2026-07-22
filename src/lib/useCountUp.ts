import { useEffect, useRef, useState, type RefObject } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

// Counts from 0 to `target` once the element scrolls into view, easing out
// so the motion settles rather than stopping abruptly. Reduced-motion users
// (and the initial reduced-motion render) get the final value immediately,
// no ticking.
export function useCountUp<T extends HTMLElement = HTMLDivElement>(target: number, duration = 1400) {
  const ref = useRef<T>(null)
  const inView = useInView(ref as RefObject<Element>, { once: true, margin: '-80px 0px' })
  const shouldReduceMotion = useReducedMotion()
  const [value, setValue] = useState(shouldReduceMotion ? target : 0)

  useEffect(() => {
    if (!inView) return
    if (shouldReduceMotion) {
      setValue(target)
      return
    }
    const start = performance.now()
    let raf: number
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, shouldReduceMotion, target, duration])

  return { ref, value }
}
