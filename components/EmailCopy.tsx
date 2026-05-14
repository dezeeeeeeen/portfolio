'use client'
import { useState } from 'react'
import { config } from '@/data/config'

export default function EmailCopy() {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    await navigator.clipboard.writeText(config.footer.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="group flex items-center gap-2 text-[13px] text-muted transition-colors hover:text-fg"
    >
      <span>{config.footer.email}</span>
      <span className="text-[11px] text-subtle transition-colors group-hover:text-muted">
        {copied ? '✓ copied' : 'Click to copy'}
      </span>
    </button>
  )
}
