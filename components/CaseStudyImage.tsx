'use client'
import { useState } from 'react'

export default function CaseStudyImage({ slug, title }: { slug: string; title: string }) {
  const [missing, setMissing] = useState(false)

  return (
    <div className="w-full">
      {!missing && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`/project-images/${slug}.png`}
          alt={title}
          className="block h-auto w-full"
          onError={() => setMissing(true)}
        />
      )}

      {missing && (
        <div
          className="flex w-full flex-col items-center justify-center gap-4 bg-card text-center"
          style={{ minHeight: '70vh' }}
        >
          <p className="text-[15px] text-muted">No case study image here yet</p>
          <div className="flex flex-col gap-1.5 rounded-xl border border-border bg-bg px-6 py-4 text-left">
            <p className="text-[12px] font-[500] text-fg">How to add it:</p>
            <p className="text-[12px] text-muted">
              1. Export your case study as one tall JPG or PNG from Figma / Notion
            </p>
            <p className="text-[12px] text-muted">
              2. Rename the file to{' '}
              <code className="rounded bg-card px-1 py-0.5 text-[11px]">{slug}.jpg</code>
            </p>
            <p className="text-[12px] text-muted">
              3. Drop it into{' '}
              <code className="rounded bg-card px-1 py-0.5 text-[11px]">public/project-images/</code>
            </p>
            <p className="text-[12px] text-muted">
              4. The page will show it automatically at full width
            </p>
          </div>
          <p className="text-[11px] text-subtle">
            Also supported: .png .webp — rename the{' '}
            <code className="text-[11px]">src</code> in{' '}
            <code className="text-[11px]">app/[slug]/page.tsx</code> if you use a different extension
          </p>
        </div>
      )}
    </div>
  )
}
