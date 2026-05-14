'use client'
import { useRef } from 'react'

export default function ScrollRow({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    if (!ref.current) return
    ref.current.scrollBy({ left: dir === 'right' ? 310 : -310, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      {/* Left arrow */}
      <button
        onClick={() => scroll('left')}
        aria-label="Scroll left"
        className="absolute left-0 top-[45%] z-10 -translate-x-4 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-bg text-muted shadow-sm transition-all hover:bg-hover hover:text-fg hover:shadow-md"
      >
        ←
      </button>

      {/* The scrollable row */}
      <div ref={ref} className="scroll-row">
        {children}
      </div>

      {/* Right arrow */}
      <button
        onClick={() => scroll('right')}
        aria-label="Scroll right"
        className="absolute right-0 top-[45%] z-10 translate-x-4 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-bg text-muted shadow-sm transition-all hover:bg-hover hover:text-fg hover:shadow-md"
      >
        →
      </button>
    </div>
  )
}
