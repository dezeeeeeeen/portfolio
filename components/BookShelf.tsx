'use client'
import { useState } from 'react'
import BookCard from './BookCard'
import { config } from '@/data/config'
import clsx from 'clsx'

export default function BookShelf() {
  const [activeTab, setActiveTab] = useState('current')
  const tabs = config.books.tabs
  const filtered = config.books.items.filter(b => b.tab === activeTab)

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-2 pb-6">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={clsx(
              'flex items-center gap-1.5 rounded-full border px-3.5 py-1 text-[12.5px] transition-all duration-150',
              activeTab === tab.id
                ? 'border-fg bg-fg text-bg'
                : 'border-border bg-transparent text-muted hover:border-muted hover:text-fg'
            )}
          >
            {tab.label}
            <span className={clsx(
              'text-[11px]',
              activeTab === tab.id ? 'text-bg/60' : 'text-subtle'
            )}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {filtered.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <p className="py-12 text-center text-[13px] text-muted">
          No books added for this tab yet — add them in{' '}
          <code className="rounded bg-card px-1 py-0.5 text-[12px]">data/config.ts</code>
        </p>
      )}
    </div>
  )
}
