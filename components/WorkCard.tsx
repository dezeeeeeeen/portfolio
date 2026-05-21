import Link from 'next/link'
import Image from 'next/image'
import type { WorkItem, SideProject } from '@/data/config'

type Props = { item: WorkItem | SideProject }

export default function WorkCard({ item }: Props) {
  return (
    <Link
      href={`/${item.slug}`}
      className="work-card group flex items-start gap-5 rounded-xl px-4 py-4 transition-colors duration-150 hover:bg-hover"
    >
      {/* Number */}
      <span className="w-6 shrink-0 pt-0.5 text-[12px] text-subtle font-mono">
        {item.number}
      </span>

      {/* Body */}
      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        {/* Badge */}
        {item.badge && (
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-border bg-bg px-2.5 py-0.5 text-[11px] text-muted">
            <span>{item.badge.text}</span>
          </span>
        )}

        {/* Title with hover swap */}
        <div className="relative h-[1.5em]">
          <span className="work-card-title-default block text-[16px] font-[450] leading-snug tracking-[-0.015em] text-fg">
            {item.titleShort}
          </span>
          <span className="work-card-title-hover text-[16px] font-[450] leading-snug tracking-[-0.015em] text-fg">
            {item.titleFull}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        {/* ── Thumbnail ── */}
        <div className="mt-2 overflow-hidden rounded-lg border border-border">
          <Image
            src={`/project-thumbnails/${item.slug}.png`}
            alt={item.titleShort}
            width={1200}
            height={800}
            className="w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      </div>

      {/* Year + arrow */}
      <div className="relative flex shrink-0 flex-col items-end gap-1 pt-0.5">
        <span className="text-[12px] text-subtle font-mono whitespace-nowrap">{item.year}</span>
        <span className="work-arrow absolute -bottom-1 right-0 text-[13px] text-muted">↗</span>
      </div>
    </Link>
  )
}