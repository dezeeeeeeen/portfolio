import ScrollRow from '@/components/ScrollRow'
import Link from 'next/link'
import Clock from '@/components/Clock'
import WorkCardThumb from '@/components/WorkCardThumb'
import BookShelf from '@/components/BookShelf'
import EmailCopy from '@/components/EmailCopy'
import HeroImage from '@/components/HeroImage'
import { config } from '@/data/config'

function SectionHeader({ title, count, href }: { title: string; count: string; href?: string }) {
  return (
    <div className="flex items-baseline justify-between border-t border-border py-5">
      <span className="text-[12.5px] font-[450] tracking-[0.01em] text-fg">{title}</span>
      <div className="flex items-center gap-4">
        <span className="text-[12px] text-muted">{count}</span>
        {href && (
          <Link href={href} className="text-[12px] text-muted hover:text-fg hover:underline underline-offset-2 transition-colors">
            View all →
          </Link>
        )}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative mx-auto flex w-full max-w-site flex-col justify-center px-6"
        style={{ paddingTop: 'calc(var(--offset) + 56px)', paddingBottom: '72px', minHeight: '100svh' }}
      >
        {/* Hero cover image — add public/hero.jpg to show it */}
        <HeroImage />

        {/* Meta row */}
        <div className="mb-8 flex items-start justify-between">
          <div className="flex flex-col gap-0.5">
            <span className="text-[10.5px] uppercase tracking-[0.08em] text-subtle">Last Updated</span>
            <span className="font-mono text-[13px] text-muted">{config.lastUpdated}</span>
          </div>
          <Clock />
        </div>

        {/* Name heading */}
        <h1
          className="mb-4 font-sans font-light leading-none tracking-[-0.04em] text-fg"
          style={{ fontSize: 'clamp(64px, 10.5vw, 120px)' }}
        >
          {config.name.display}
        </h1>

        {/* Tagline */}
        <p className="max-w-xs text-[17px] font-light leading-relaxed tracking-[-0.01em] text-muted">
          {config.tagline}
        </p>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-6 flex items-center gap-2">
          <span className="text-[11px] tracking-[0.04em] text-subtle">Scroll Down To See My Work</span>
          <span className="animate-scrollBounce text-[13px] text-subtle">↓</span>
        </div>
      </section>

      {/* ── FEATURED WORK — horizontal scroll ── */}
      <section className="mx-auto w-full max-w-site px-6">
        <SectionHeader
          title="Featured Work"
          count={`0${config.featuredWork.length} Case Studies`}
          href="/design"
        />
        
         <ScrollRow>
  {config.featuredWork.map(item => (
    <WorkCardThumb key={item.slug} item={item} />
  ))}
</ScrollRow>
      </section>

      {/* ── PLAYGROUND — horizontal scroll ── */}
      <section className="mx-auto mt-12 w-full max-w-site px-6">
        <SectionHeader
          title="Playground"
          count={`0${config.sideProjects.length} Side Projects`}
          href="/sideprojects"
        />
        <ScrollRow>
  {config.sideProjects.map(item => (
    <WorkCardThumb key={item.slug} item={item} />
  ))}
</ScrollRow>
      </section>

      {/* ── BOOK SHELF ── */}
      <section className="mx-auto mt-12 w-full max-w-site px-6">
        <SectionHeader title="Book Shelf" count={`${config.books.totalCount} Reads`} />
        <BookShelf />
      </section>

      {/* ── FOOTER ── */}
      <footer className="mx-auto mt-12 w-full max-w-site border-t border-border px-6 py-14">
        <div className="flex flex-col gap-12 sm:flex-row sm:justify-between">
          <div className="flex flex-col gap-2">
            <span className="mb-1 text-[10.5px] uppercase tracking-[0.08em] text-subtle">Author&apos;s Note</span>
            {config.footer.bio.map((line, i) => (
              <p key={i} className="flex max-w-md gap-2 text-[13.5px] leading-relaxed text-muted">
                <span className="mt-0.5 shrink-0 text-subtle">—</span>
                {line}
              </p>
            ))}
          </div>
          <div className="flex shrink-0 flex-col items-start gap-5 sm:items-end">
            <span className="text-[12px] text-subtle">{config.footer.copyright}</span>
            <div className="flex flex-col items-start gap-1 sm:items-end">
              <span className="text-[12px] italic text-subtle">{config.footer.tagline}</span>
              <span className="text-[11px] text-subtle/70">{config.footer.easterEgg}</span>
            </div>
            <div className="flex flex-col items-start gap-1.5 sm:items-end">
              <EmailCopy />
              {config.footer.social.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                   className="text-[13px] text-muted transition-colors hover:text-fg">
                  {s.label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
