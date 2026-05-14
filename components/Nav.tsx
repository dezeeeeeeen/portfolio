'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { config } from '@/data/config'

export default function Nav() {
  const path = usePathname()

  const links = [
    { href: '/',             label: 'Home' },
    { href: '/design',       label: 'Design' },
    { href: '/sideprojects', label: 'Side Projects' },
  ]

  return (
    <nav
      style={{ height: 'var(--nav-h)' }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center border-b border-border bg-bg/80 backdrop-blur-md"
    >
      <div className="mx-auto flex w-full max-w-site items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-[13px] font-normal tracking-[-0.01em] text-fg hover:opacity-70 transition-opacity"
        >
          {config.name.lower}
        </Link>

        {/* Links */}
        <ul className="flex items-center gap-7">
          {links.map(({ href, label }) => {
            const active = path === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`nav-link text-[13px] transition-colors ${
                    active ? 'active text-fg' : 'text-muted hover:text-fg'
                  }`}
                >
                  {label}
                </Link>
              </li>
            )
          })}
          <li>
            <a
              href={config.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link text-[13px] text-muted hover:text-fg transition-colors"
            >
              Resume ↗
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
