'use client'
import { useEffect, useRef } from 'react'

export default function EasterEgg() {
  const bufferRef = useRef('')

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      // build rolling 4-char buffer
      bufferRef.current = (bufferRef.current + e.key).slice(-4).toLowerCase()
      if (bufferRef.current === 'love') {
        spawnHearts()
        bufferRef.current = ''
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  function spawnHearts() {
    const count = 12
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        const el = document.createElement('span')
        el.className = 'heart-particle'
        el.textContent = ['🤍', '🩷', '💛', '🩵', '🤎'][Math.floor(Math.random() * 5)]
        el.style.left = `${20 + Math.random() * 60}vw`
        el.style.bottom = `${10 + Math.random() * 15}vh`
        document.body.appendChild(el)
        setTimeout(() => el.remove(), 1200)
      }, i * 60)
    }
  }

  return null
}
