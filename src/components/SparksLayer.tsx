import { useMemo } from 'react'

/**
 * Small glowing sparks rising from the havan fire, pure CSS keyframe
 * animation (transform + opacity only) — no per-frame JS, GPU-composited,
 * the smoothest motion the browser can give us. Deliberately low-risk
 * next to FlameOverlay's retired attempt: a spark is a soft dot, so it
 * never needs to match a silhouette the way a flame does.
 */
const SPARK_COUNT = 16

function makeSparks(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    leftPct: 50 + (Math.random() - 0.5) * 7, // tight spread over the pit
    topPct: 56 + Math.random() * 4,
    driftPx: (Math.random() - 0.5) * 60,
    risePx: 220 + Math.random() * 260,
    size: 2 + Math.random() * 3,
    duration: 3.5 + Math.random() * 3,
    delay: -Math.random() * 7, // negative delay staggers starting mid-cycle
  }))
}

export function SparksLayer() {
  const sparks = useMemo(() => makeSparks(SPARK_COUNT), [])

  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      <style>{`
        @keyframes spark-rise {
          0%   { opacity: 0;   transform: translate(0, 0) scale(0.7); }
          12%  { opacity: 1; }
          80%  { opacity: 0.9; }
          100% { opacity: 0;   transform: translate(var(--drift), calc(var(--rise) * -1)) scale(1); }
        }
      `}</style>
      {sparks.map((s) => (
        <span
          key={s.id}
          style={
            {
              position: 'absolute',
              left: `${s.leftPct}%`,
              top: `${s.topPct}%`,
              width: s.size,
              height: s.size,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,224,170,0.95) 0%, rgba(255,150,60,0.6) 55%, rgba(255,120,40,0) 100%)',
              '--drift': `${s.driftPx}px`,
              '--rise': `${s.risePx}px`,
              animation: `spark-rise ${s.duration}s linear ${s.delay}s infinite`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}
