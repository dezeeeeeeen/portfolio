import Link from 'next/link'
import CaseStudyImage from '@/components/CaseStudyImage'
import { config } from '@/data/config'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'
export const dynamicParams = true

type Props = { params: Promise<{ slug: string }> }

const allProjects = [...config.featuredWork, ...config.sideProjects]

function getProject(slug: string) {
  return allProjects.find(p => p.slug === slug)
}

export function generateStaticParams() {
  return allProjects.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const p = getProject(slug)
  if (!p) return {}
  return { title: `${p.titleFull} — ${config.name.lower}` }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const isSide = config.sideProjects.some(p => p.slug === slug)

  return (
    <>
      <main style={{ paddingTop: 'var(--offset)' }}>

        {/* ── Top bar ── */}
        <div className="mx-auto flex w-full max-w-site items-center justify-between border-b border-border px-6 py-4">
          <Link
            href={isSide ? '/sideprojects' : '/design'}
            className="text-[13px] text-muted transition-colors hover:text-fg"
          >
            ← Back
          </Link>
          <div className="flex items-center gap-3">
            {project.badge && (
              <span className="hidden items-center gap-1.5 rounded-full border border-border px-2.5 py-0.5 text-[11px] text-muted sm:inline-flex">
                {project.badge.emoji} {project.badge.text}
              </span>
            )}
            <span className="font-mono text-[12px] text-subtle">{project.year}</span>
          </div>
        </div>

        {/* ── Project header ── */}
        <div className="mx-auto w-full max-w-site px-6 pb-6 pt-8">
          <h1
            className="mb-3 font-light leading-tight tracking-[-0.03em] text-fg"
            style={{ fontSize: 'clamp(26px, 5vw, 52px)' }}
          >
            {project.titleFull}
          </h1>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        <CaseStudyImage slug={slug} title={project.titleFull} />

        {/* ── Prev / Next nav ── */}
        <div className="mx-auto w-full max-w-site border-t border-border px-6 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-[13px] text-muted transition-colors hover:text-fg">
              ← All Work
            </Link>
            <span className="font-mono text-[12px] text-subtle">{project.year}</span>
          </div>
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="mx-auto w-full max-w-site border-t border-border px-6 py-10">
        <div className="flex items-center justify-between">
          <span className="text-[12px] text-subtle">{config.footer.copyright}</span>
          <div className="flex gap-5">
            {config.footer.social.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                 className="text-[13px] text-muted transition-colors hover:text-fg">
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  )
}
