import WorkCard from '@/components/WorkCard'
import ScrollReveal from '@/components/ScrollReveal'
import { config } from '@/data/config'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: `Design — ${config.name.lower}` }

export default function DesignPage() {
  return (
    <main
      className="mx-auto w-full max-w-site px-6"
      style={{ paddingTop: 'calc(var(--offset) + 56px)', paddingBottom: '100px' }}
    >
      {/* Page header */}
      <div className="mb-12 border-b border-border pb-8">
        <h1
          className="mb-2 font-light leading-none tracking-[-0.04em] text-fg"
          style={{ fontSize: 'clamp(40px, 7vw, 80px)' }}
        >
          Design
        </h1>
        <p className="text-[14px] text-muted">
          0{config.featuredWork.length} Case Studies
        </p>
      </div>

      <div className="flex flex-col gap-0.5">
        {config.featuredWork.map((item, i) => (
          <ScrollReveal key={item.slug} delay={i * 50}>
            <WorkCard item={item} />
          </ScrollReveal>
        ))}
      </div>
    </main>
  )
}
