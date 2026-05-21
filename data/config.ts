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
  ticker: ['Product Designer', 'Engineer', 'Researcher', 'Builder', 'Dreamer'],

  // ── Nav ──────────────────────────────────────────────────
  resumeUrl: 'https://drive.google.com/file/d/1FF7vAtSJYXluPgUydPB99DEVJM8iVSMN/view?usp=sharing',

  // ── Footer ───────────────────────────────────────────────
  footer: {
    bio: [
      'Amrita is a product designer, researcher and builder based in Bangalore, open to full-time and freelance opportunities anywhere in the world.',
      'Previously: Samsung Research, United Nations Academic Impact, IDC School of Design, IIT Bombay. NID alum.',
      'Off the clock: travelling, photography, books, music, dance, movies, math.',
    ],
    email:     'amritadas1302@gmail.com',
    tagline:   'Made with love, VS Code and a lot of chai',
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
      slug:       'gp',
      number:     '01',
      badge:      { text: 'Masters Thesis' },
      titleShort: 'grad project at Samsung',
      titleFull:  'Samsung : Agentic AI in Visual Experience',
      tags:       ['Human Agent Interaction', 'UX Research', 'Agentic AI' ,'UX Design'],
      year:       '2025',
    },
    {
  slug:       'agent',          // must match your image filename exactly
  number:     '02',
  badge:       { text: 'Internship at Samsung' },
  titleShort: 'Samsung Internship',
  titleFull:  'Samsung: Interactions in the Age of Agentic AI',
  tags:       ['Human Agent Interaction', 'UX Research', 'Agentic AI' , 'Framework for AI'],
  year:       '2025',
},
    {
      slug:       'mudra',
      number:     '03',
      badge:      { text: 'Published paper in IndiaHCI' },
      titleShort: 'HCI Research at IIT Bombay',
      titleFull:  'HCI at IIT Bombay : Gesture Based Text Input',
      tags:       ['Human Computer Interaction', 'Machine Learning', 'Language Tech', 'UX Research'],
      year:       '2024',
    },
    {
      slug:       'ethno',
      number:     '04',
      badge:      null,
      titleShort: 'Sensory Ethnography',
      titleFull:  'Sensory Ethnography : Brick Kiln Workers',
      tags:       ['Ethnography', 'UX Research', 'Field Studies', 'Coding and Categorisation'],
      year:       '2025',
    },
    {
      slug:       'aura',
      number:     '05',
      badge:      null,
      titleShort: 'Healthcare Design',
      titleFull:  'Aura : A Wellness Aid for PCOD(PMOS) Patients',
      tags:       ['Health Tech', 'UX Research', 'Product Design', 'UX Design'],
      year:       '2024',
    },
    {
      slug:       'rupee',
      number:     '06',
      badge:       { text: 'Monsoon Course in HCI at IIT Bombay' },
      titleShort: 'Rupeebook: Personal Finance',
      titleFull:  'RupeeBook: Personal Finance Management for the Indian Middle Class',
      tags:       ['UX Design', 'UX Research', 'Human Computer Interaction'],
      year:       '2023',
    },
  ],

  // ── Side Projects (Playground) ────────────────────────────
  sideProjects: [
    {
      slug:       'skincancer',
      number:     '01',
      badge:      { text: 'Published in IEEE' },
      titleShort: 'AR and AI Solution for Skin Cancer',
      titleFull:  'DermaDetect: AI for Early Skin Cancer Detection',
      tags:       ['Artificial Intelligence', 'Health Tech', 'Augmented Reality', 'UX Design'],
      year:       '2023',
    },
    {
      slug:       'susjam',
      number:     '02',
      badge:      { text: 'Displayed at UofToronto and OCAD' },
      titleShort: 'Intac',
      titleFull:  'International Art Collaboration on Sustainability',
      tags:       ['Sustainability', 'Art', 'Vibe Coding'],
      year:       '2025',
    },
    {
      slug:       'glibits',
      number:     '03',
      badge:      null,
      titleShort: "glibits",
      titleFull:  "Glibits: How to find your glasses",
      tags:       ['Design Thinking', 'Extreme Users', 'Accessory'],
      year:       '2024',
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
