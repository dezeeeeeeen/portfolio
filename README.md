# Portfolio — Setup & Deploy Guide

Built with **Next.js 14**, **Tailwind CSS**, and **TypeScript**.
One config file controls all content. Deploy to Vercel in 5 minutes, free.

---

## QUICK ANSWER: Is Vercel free and public?
**Yes.** Vercel's free Hobby tier gives you:
- A public URL like `yourname.vercel.app` — anyone on the internet can visit it
- Custom subdomain (e.g. `judyhu.vercel.app`) at no cost
- Auto-redeploy every time you push to GitHub
- Optional: connect a real domain (e.g. `yourname.me`) you buy for ~$10/yr

---

## PART 1 — Run Locally (Preview on Your Computer)

### Step 1 — Install Node.js (one time only)
Download from https://nodejs.org → choose the **LTS** version → install it.
Verify it works: open Terminal and run `node -v` — you should see a version number.

### Step 2 — Unzip and open
Unzip `portfolio.zip` anywhere on your computer.
Open Terminal and navigate into the folder:
```bash
cd path/to/portfolio
# e.g. on Mac: cd ~/Downloads/portfolio
```

### Step 3 — Install dependencies
```bash
npm install
```
This downloads all the packages (takes ~30 seconds, only needed once).

### Step 4 — Start the dev server
```bash
npm run dev
```
Open your browser at **http://localhost:3000** — you'll see the site live with hot reload.
Every time you save a file, the browser updates instantly.

---

## PART 2 — Edit Your Content

### The ONE file to edit: `data/config.ts`
Everything — your name, projects, books, links, footer — lives here.
Open it in any text editor (VS Code recommended: https://code.visualstudio.com).

**Change your name:**
```ts
name: {
  display: 'Your Name',   // shown in the big hero heading
  lower:   'your name',   // shown in the nav logo (lowercase)
},
```

**Change the ticker text:**
```ts
ticker: ['Your City', 'Your Region', 'Product Designer', 'Your Degree'],
```

**Change the clock timezone:**
```ts
timezone:      'Asia/Kolkata',   // or 'America/New_York', 'Europe/London', etc.
timezoneLabel: 'IST',
```

**Change projects:**
```ts
featuredWork: [
  {
    slug:       'my-project',           // becomes the URL: yoursite.com/my-project
    number:     '01',
    badge:      { emoji: '🏆', text: 'Award Name' },  // or: badge: null
    titleShort: 'Company, Project Name',
    titleFull:  'Company — Project Name',
    tags:       ['Tag 1', 'Tag 2', 'Tag 3'],
    year:       '2025',
  },
  // ... more projects
],
```

**Change footer info:**
```ts
footer: {
  bio: [
    'Your Name is a designer based in Your City...',
    'Previously: Company A, Company B.',
    'Off the clock: hobbies here.',
  ],
  email: 'you@email.com',
  social: [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/yourhandle' },
    { label: 'YouTube',  href: 'https://youtube.com/@yourchannel' },
    { label: 'GitHub',   href: 'https://github.com/yourhandle' },
  ],
},
```

---

## PART 3 — Add Your Images

### Book covers → `/public/book-covers/`
Name each file exactly as written in `config.ts` under `cover:`.
Example: `cover: 'my-book.jpg'` → put file at `public/book-covers/my-book.jpg`
Recommended size: **300 × 450px** (2:3 ratio), JPG at 85% quality.
Find covers at: https://openlibrary.org (free, public domain covers)

### Case study images → `/public/project-images/`
For each project with `slug: 'syft'`, put your file at `public/project-images/syft.jpg`
This is your long-form case study image — export it from Figma or Notion as one tall PNG/JPG.
Recommended: full-width, any height. JPG at 85% quality.

Supported formats: `.jpg` `.jpeg` `.png` `.webp`

### OG image → `/public/og.png`
This is the thumbnail shown when someone shares your link on social.
Size: **1200 × 630px**, PNG.
Replace the placeholder with a screenshot of your site or a branded graphic.

### Favicon → `/public/favicon.ico`
32×32px icon shown in browser tabs. Replace with your own initials or logo.

---

## PART 4 — Deploy to Vercel (Live Public URL with Your Name)

### Step 1 — Create a GitHub account
Go to https://github.com → Sign up (free).

### Step 2 — Install Git (if you don't have it)
Download from https://git-scm.com/downloads → install.
Check it works: `git --version`

### Step 3 — Push your code to GitHub
In Terminal, inside the portfolio folder:
```bash
git init
git add .
git commit -m "my portfolio"
git branch -M main
```
Go to https://github.com/new → create a repo called `portfolio` → set to **Public** → click **Create repository** (do NOT initialize with README).
Then back in Terminal:
```bash
git remote add origin https://github.com/YOURUSERNAME/portfolio.git
git push -u origin main
```
Replace `YOURUSERNAME` with your actual GitHub username.

### Step 4 — Deploy on Vercel
1. Go to https://vercel.com → click **Sign Up** → choose **Continue with GitHub**
2. Click **Add New… → Project**
3. Find your `portfolio` repo → click **Import**
4. Leave ALL settings as default (Vercel auto-detects Next.js)
5. Click **Deploy**

After ~60 seconds you get a live URL like `portfolio-abc123.vercel.app`.

### Step 5 — Get YOUR NAME in the URL (free)
In the Vercel dashboard for your project:
1. Go to **Settings → Domains**
2. You'll see your auto-generated URL
3. Click **Edit** on it → change to `yourname.vercel.app`
4. Click **Save**

Now your site is live at **yourname.vercel.app** — shareable immediately. ✅

### Optional: Buy a real domain (e.g. yourname.me)
- Buy at https://porkbun.com (~$3–10/year is cheapest)
- In Vercel → **Settings → Domains** → type your domain → click **Add**
- Follow the DNS instructions Vercel shows you (takes ~10 minutes to go live)

---

## PART 5 — Update Your Site After Changes

Every future edit is just:
```bash
# After saving your changes in the editor:
git add .
git commit -m "updated projects"
git push
```
Vercel auto-detects the push and redeploys in ~30 seconds. Your live URL updates automatically.

---

## FILE REFERENCE

```
portfolio/
├── data/
│   └── config.ts          ← EDIT THIS — all your content lives here
├── public/
│   ├── book-covers/       ← Drop book cover images here
│   ├── project-images/    ← Drop case study images here (slug.jpg)
│   ├── og.png             ← Social share thumbnail (1200×630)
│   └── favicon.ico        ← Browser tab icon
├── app/
│   ├── page.tsx           ← Home page layout (edit for layout changes)
│   ├── design/page.tsx    ← Design listing page
│   ├── sideprojects/page.tsx
│   ├── [slug]/page.tsx    ← Case study page (shows your image)
│   └── globals.css        ← Global styles
├── components/            ← UI components (rarely need editing)
│   ├── Nav.tsx
│   ├── Ticker.tsx
│   ├── Clock.tsx
│   ├── WorkCard.tsx
│   ├── BookShelf.tsx
│   ├── BookCard.tsx
│   ├── EmailCopy.tsx
│   └── EasterEgg.tsx      ← Type 'love' on keyboard ;)
└── tailwind.config.ts     ← Change colors here
```

## Change Colors
Open `tailwind.config.ts`:
```ts
colors: {
  bg:     '#F8F8F4',   // page background
  fg:     '#111111',   // main text
  muted:  '#888888',   // secondary text
  subtle: '#C0C0BB',   // faint text
  border: '#E5E5E0',   // lines
  hover:  '#EEEEEA',   // card hover bg
  card:   '#F0F0EB',   // card background
},
```

## Change Font
Open `app/layout.tsx` and swap the import:
```ts
// Current:
import { GeistSans } from 'geist/font/sans'
// Alternative options (install the npm package first):
// import { Inter } from 'next/font/google'
// import { DM_Sans } from 'next/font/google'
```

---

## Troubleshooting

**`npm install` fails** → Make sure Node.js is installed: `node -v`

**Images not showing** → Filename must match exactly (case-sensitive). Check spelling in `config.ts`.

**Build fails on Vercel** → Run `npm run build` locally first to catch errors before pushing.

**Clock shows wrong time** → Edit `timezone` in `config.ts`. Full list: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones

**`git push` asks for password** → Use a GitHub Personal Access Token instead of your password. Create one at: https://github.com/settings/tokens
