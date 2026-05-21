'use client'
import Link from 'next/link'
import type { WorkItem, SideProject } from '@/data/config'

type Props = { item: WorkItem | SideProject }

export default function WorkCardThumb({ item }: Props) {
  return (
    <Link
      href={`/${item.slug}`}
      className="work-thumb-card group flex flex-col rounded-2xl overflow-hidden bg-card border border-border"
    >
      {/* ── Thumbnail image ──────────────────────────────────────────
          File goes in: public/project-images/[slug]-thumb.jpg
          Recommended size: 580 × 360px
          If the file is missing, shows a neutral placeholder.
      ─────────────────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden bg-hover" style={{ aspectRatio: '16/10' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/project-thumbnails/${item.slug}.png`}
          alt={item.titleFull}
          className="thumb-img w-full h-full object-cover"
          onError={e => { e.currentTarget.style.display = 'none' }}
        />
        {/* Number badge */}
        <span className="absolute top-3 left-3 rounded-full bg-bg/80 px-2.5 py-0.5 text-[11px] font-mono text-muted backdrop-blur-sm">
          {item.number}
        </span>
      </div>

      {/* ── Card info ── */}
      <div className="flex flex-col gap-2 p-4">
        {item.badge && (
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-border bg-bg px-2.5 py-0.5 text-[10.5px] text-muted">
            {item.badge.text}
          </span>
        )}
        <p className="text-[14.5px] font-[450] leading-snug tracking-[-0.015em] text-fg line-clamp-2">
          {item.titleFull}
        </p>
        <div className="flex flex-wrap gap-1">
          {item.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <span className="mt-1 text-[11px] font-mono text-subtle">{item.year}</span>
      </div>
    </Link>
  )
}
