'use client'
import { useState } from 'react'

export default function HeroImage() {
  const [missing, setMissing] = useState(false)

  if (missing) return null // simply hide if no image provided

  return (
    <div className="hero-img-wrap mb-10 w-full" style={{ maxHeight: '480px' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/hero.jpg"
        alt="Hero cover"
        className="h-full w-full object-cover"
        style={{ maxHeight: '480px' }}
        onError={() => setMissing(true)}
      />
    </div>
  )
}
