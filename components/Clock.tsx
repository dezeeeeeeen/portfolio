'use client'
import { useEffect, useState } from 'react'
import { config } from '@/data/config'

export default function Clock() {
  const [time, setTime] = useState('—:—:—')

  useEffect(() => {
    function tick() {
      const now = new Date()
      const parts = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kolkata', // Changed from config.timezone to standard India zone
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).formatToParts(now)
      
      const get = (t: string) => parts.find(p => p.type === t)?.value ?? '00'
      setTime(`${get('hour')}:${get('minute')}:${get('second')}`)
    }
    
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="font-mono text-[13px] tabular-nums text-muted">
      {time} IST
    </span>
  )
}