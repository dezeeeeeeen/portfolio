// ============================================================
//  DATA / CONFIG.TS  —  EDIT ALL YOUR CONTENT HERE
// ============================================================

export const config = {

  // ── Identity ─────────────────────────────────────────────
  name: {
    display: 'Amrita Das',       // shown in hero heading
    lower:   'amrita das',       // shown in nav logo
  },
  tagline:     'Building with insight, logic, and craft.',
  lastUpdated: '15.05.26',
  timezone:      'Asia/Kolkata',
  timezoneLabel: 'IST',

  // ── Ticker (the scrolling bar under nav) ─────────────────
  ticker: ['Bangalore', 'Product Designer', 'Engineer', 'Researcher', 'Builder', 'Dreamer', "NID"],

  // ── Nav ──────────────────────────────────────────────────
  resumeUrl: 'https://drive.google.com/file/d/1kKvL6Uk1ePnE_XN1Oe4znHIWthBYlQuG/view?usp=sharing',

  // ── Footer ───────────────────────────────────────────────
  footer: {
    bio: [
      'Amrita is a product designer, researcher and builder based in Bangalore, open to full-time and freelance opportunities anywhere in the world.',
      'Previously: Samsung Research, United Nations Academic Impact, IDC School of Design, IIT Bombay. NID alum.',
      'Off the clock: travelling, photography, books, music, dance, movies, math.',
    ],
    email:     'amritadas1302@gmail.com',
    tagline:   'Made with love and VS Code:)',
    easterEgg: "Type 'love' into your keyboard :)",
    copyright: '© 2026 AmritaDas',
    social: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/amrita-das-464149197' },
      { label: 'Behance',  href: 'https://www.behance.net/amritadas8' },
      { label: 'GitHub',   href: 'https://github.com/ummmritaaa' },
      { label: 'Google Scholar',   href: 'https://scholar.google.com/citations?user=4sHYTOgAAAAJ&hl=en' },
    ],
  },

  // ── Featured Work ─────────────────────────────────────────
  // slug       → URL path and matches /public/project-images/[slug].jpg
  // badge      → null if no award
  // titleShort → shown by default on card
  // titleFull  → shown on card hover (with em-dash)
  // tags       → array of strings
  // year       → string, use "2021–2023" for ranges
  featuredWork: [
    {
      slug:       'syft',
      number:     '01',
      badge:      { emoji: '🏆', text: 'GDUSA UI/UX Design Award' },
      titleShort: 'Syft, Dashboard & Landing Page',
      titleFull:  'Syft — Dashboard & Landing Page',
      tags:       ['Startup', 'First Designer', 'Web Experience'],
      year:       '2025',
    },
    {
  slug:       'agent',          // must match your image filename exactly
  number:     '02',
  badge:      null,
  titleShort: 'Samsung Internship',
  titleFull:  'Samsung: Interactions in the Age of Agentic AI',
  tags:       ['Human Agent Interaction', 'AI Design', 'Agentic AI'],
  year:       '2025',
},
    {
      slug:       'united',
      number:     '03',
      badge:      { emoji: '🏆', text: 'NYX Awards Mobile App' },
      titleShort: 'United Airlines, AiR Agent',
      titleFull:  'United Airlines — AiR Agent',
      tags:       ['MHCI+D Capstone', 'Multi-modal System', 'Service'],
      year:       '2024',
    },
    {
      slug:       'pondpatrol',
      number:     '04',
      badge:      null,
      titleShort: 'MHCI+D, PondPatrol',
      titleFull:  'MHCI+D — PondPatrol',
      tags:       ['Game Design', 'Physical Exhibit', 'Environmental Education'],
      year:       '2024',
    },
    {
      slug:       'rotwell',
      number:     '05',
      badge:      null,
      titleShort: 'MHCI+D, Rotwell Composting',
      titleFull:  'MHCI+D — Rotwell Composting',
      tags:       ['Service Design', 'Google Home Tablet', 'Smart Home'],
      year:       '2023',
    },
  ],

  // ── Side Projects (Playground) ────────────────────────────
  sideProjects: [
    {
      slug:       'vlog',
      number:     '01',
      badge:      { emoji: '⭐', text: 'Published on YouTube' },
      titleShort: 'YouTube Vlog Channel',
      titleFull:  'YouTube Vlog Channel',
      tags:       ['Travel & Lifestyle', '73 Videos', 'DaVinci Resolve', 'CapCut'],
      year:       '2016–2026',
    },
    {
      slug:       'songs',
      number:     '02',
      badge:      { emoji: '⭐', text: 'Published on Spotify' },
      titleShort: 'Self Discovery, Published EP',
      titleFull:  'Self Discovery — Published EP',
      tags:       ['Music Production', 'SoundTrap', 'Lo-fi & Ambient'],
      year:       '2025',
    },
    {
      slug:       'uist1',
      number:     '03',
      badge:      null,
      titleShort: "MHCI+D, Apple's Tap-to-pay Analysis",
      titleFull:  "MHCI+D — Apple's Tap-to-pay Analysis",
      tags:       ['Interface Analysis', 'SWOT', 'Contactless Payment'],
      year:       '2024',
    },
    {
      slug:       'medium',
      number:     '04',
      badge:      { emoji: '⭐', text: 'Published on Medium' },
      titleShort: 'Sheridan College, The Spotify Model & Design Collaboration',
      titleFull:  'Sheridan College — The Spotify Model & Design Collaboration',
      tags:       ['Writing', 'Agile Workflow Analysis', 'Spotify'],
      year:       '2021',
    },
    {
      slug:       'snap',
      number:     '05',
      badge:      null,
      titleShort: 'Sheridan College, SNAP Data Analysis & Visualization',
      titleFull:  'Sheridan College — SNAP Data Analysis & Visualization',
      tags:       ['Quantitative Analysis', 'Tableau', 'SNAP Public Policy'],
      year:       '2020',
    },
  ],

  // ── Books ─────────────────────────────────────────────────
  // cover → filename inside /public/book-covers/ (e.g. "let-them.jpg")
  // label → small label that appears on the cover (optional, null to omit)
  // tab   → 'current' | '2026'
  books: {
    tabs: [
      { id: 'current', label: 'Current Reads', count: 3 },
      { id: '2025',    label: '2025',          count: 4 },
    ],
    totalCount: 7,
    items: [
      // ── Current Reads ──
      {
        id:     'moonwalk',
        tab:    'current',
        cover:  'moonwalk.jpg',
        label:  null,
        title:  'Moonwalk',
        author: 'Michael Jackson',
        genre:  'Autobiography',
        note:   'Getting on the Michaelmania after the biopic',
      },
      {
        id:     'fellowship',
        tab:    'current',
        cover:  'jrr.jpg',
        label:  null,
        title:  'The Fellowship of the Ring',
        author: 'J.R.R. Tolkien',
        genre:  'Fantasy',
        note:   "Apparently, hobbits can't swim.",
      },
      {
        id:     'meditations',
        tab:    'current',
        cover:  'meditations.jpg',
        label:  null,
        title:  'Meditations',
        author: 'Marcus Aurelius',
        genre:  'Philosophy',
        note:   'Reads like an old man lecturing me, but every word was one I needed to hear.',
      },
      
      
      // ── 2026 reads — add yours below ──
      {
       id:     'art of doing science and engineering',
       tab:    '2025',
       cover:  'art.jpg',
       label:  null,
       title:  'The Art of Doing Science and Engineering',
       author: 'Richard W Hamming',
       genre:  'Philosophy, Education',
       note:   'Why most people spend their entire careers working on the wrong problems.',
      },
      {
        id:     'creative',
        tab:    '2025',
        cover:  'creative.jpg',
        label:  null,
        title:  'The Creative Act: A Way of Being',
        author: 'Rick Rubin',
        genre:  'Creativity',
        note:   'A blueprint on how to tune your radar to notice what everyone else misses.',
      },
      {
        id:     'chaos',
        tab:    '2025',
        cover:  'chaos.jpg',
        label:  null,
        title:  'Chaos: Making a New Science',
        author: 'James Gleick',
        genre:  'Popular Science',
        note:   "Proof that the universe is beautifully chaotic, yet perfectly patterned.",
      },
      {
        id:     'fountainhead',
        tab:    '2025',
        cover:  'fountainhead.jpg',
        label:  null,
        title:  'The Fountainhead',
        author: 'Ayn Rand',
        genre:  'Philosophical Fiction',
        note:   'The last time I tried reading this was in 8th grade, this time I finished it.',
      },
    ],
  },
}

// Type exports for components
export type WorkItem     = typeof config.featuredWork[number]
export type SideProject  = typeof config.sideProjects[number]
export type BookItem     = typeof config.books.items[number]
