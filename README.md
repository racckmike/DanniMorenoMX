# Danni Moreno — CEFEIDA Transmission

Official-style artist landing page for **Danni Moreno** ([@dannimorenomx](https://www.instagram.com/dannimorenomx/)), a Mexican singer-songwriter, producer and audiovisual creator based in Mexico City.

Concept: a lost cosmic broadcast — 1987 analog television, CRT displays and disco energy filtered through a 2026 retro-futurist lens — built around her real CEFEIDA EP and verified catalog.

## Stack

- Next.js 16 (App Router, Turbopack) + TypeScript
- Tailwind CSS v4
- No external animation library — CSS transitions/transforms + small React hooks

## Content & assets

All artist facts (discography, dates, track list, bio, social links) live in [`lib/data.ts`](lib/data.ts) and are sourced and cross-verified from Danni Moreno's official Spotify, Instagram, YouTube, TikTok and Apple Music profiles. Nothing is fabricated — unverifiable claims (e.g. upcoming tour dates) are simply omitted.

**No copyrighted photography is stored in this repo.** Cover art is hot-linked live from Spotify's own image CDN (the same mechanism Spotify's oEmbed widgets use) and video stills are hot-linked from YouTube's official thumbnail CDN — see `next.config.ts` for the allow-listed remote hosts. If official high-resolution masters (portraits, video exports) become available, they can be dropped into `public/` and swapped into the relevant components (`HeroTransmission`, `VisualArchive`, `ArtistBio`, `MusicArchive`) in place of the hot-linked URLs.

## Development

```bash
npm run dev     # start dev server
npm run lint    # eslint
npm run build   # production build + typecheck
```
