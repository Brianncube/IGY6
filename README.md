# IGY6 x GWAR Crew App

A mobile-first gaming crew website built with Next.js App Router, Tailwind CSS, and Framer Motion. It is designed for Vercel deployment and optimized around smartphone use first.

## Run locally

```bash
npm install
npm run dev
```

If PowerShell blocks `npm`, use:

```bash
npm.cmd install
npm.cmd run dev
```

## Project structure

- `app/` App Router pages and layout
- `components/` reusable UI building blocks
- `data/` local JSON content for clips and squad members
- `lib/` shared constants and utilities

## Features

- Mobile-first layout from `320px` upward
- Sticky bottom navigation for key pages
- Global crew mode toggle for `IGY6` and `GWAR`
- Responsive YouTube Shorts-style embeds
- Vertical clips feed on mobile, grid on desktop
- Squad cards and community CTA optimized for touch
- `420 Radar` with live countdowns and `CANNONBALL` overlay
- Dark, glassmorphism UI with lightweight motion

## Deploy to Vercel

1. Push the project to a Git repository.
2. Import the repository into Vercel.
3. Vercel will detect Next.js automatically.
4. Keep the default build settings:
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output: `.next`
5. Deploy.

No extra environment variables are required for this version.
