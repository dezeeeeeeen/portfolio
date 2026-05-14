import Image from 'next/image'
import type { BookItem } from '@/data/config'

export default function BookCard({ book }: { book: BookItem }) {
  return (
    <div className="book-card group flex flex-col gap-2">
      {/* Cover */}
      <div className="relative overflow-hidden rounded-[6px] bg-card" style={{ aspectRatio: '2/3' }}>
        <Image
          src={`/book-covers/${book.cover}`}
          alt={book.title}
          fill
          className="book-cover-img object-cover"
          sizes="(max-width: 640px) 140px, 180px"
        />

        {/* Label tag on cover (e.g. "curiosity killed the cat") */}
        {book.label && (
          <span className="absolute top-2 left-2 rounded-full bg-fg/85 px-2 py-0.5 text-[10px] text-bg leading-tight backdrop-blur-sm">
            {book.label}
          </span>
        )}

        {/* Note overlay on hover */}
        <div className="book-note-overlay absolute inset-0 flex items-end bg-fg/80 p-3">
          <p className="text-[11.5px] leading-[1.55] text-bg/90">{book.note}</p>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-0.5">
        <span className="text-[13px] font-[450] leading-snug tracking-[-0.01em] text-fg">
          {book.title}
        </span>
        <span className="text-[12px] text-muted">{book.author}</span>
        <span className="mt-0.5 inline-block rounded-[3px] border border-border px-1.5 py-0.5 text-[10.5px] text-subtle w-fit">
          {book.genre}
        </span>
      </div>
    </div>
  )
}
