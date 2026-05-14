import { config } from '@/data/config'

export default function Ticker() {
  // Repeat 4× so the seamless loop always has content visible
  const items = [...config.ticker, ...config.ticker, ...config.ticker, ...config.ticker]

  return (
    <div
      style={{ top: 'var(--nav-h)', height: 'var(--ticker-h)' }}
      className="fixed left-0 right-0 z-40 flex items-center overflow-hidden border-b border-border bg-bg"
      aria-hidden="true"
    >
      <div className="ticker-track flex shrink-0 animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-0 pr-12 text-[11.5px] tracking-[0.05em] text-muted"
          >
            {item}
            <span className="ml-12 text-subtle">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
