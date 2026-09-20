# Content sources — Danni Moreno website

Internal documentation. Not shown on the public site. Every factual claim
rendered to visitors (`lib/data.ts` plus any hardcoded copy in
`components/`) should trace back to a row here. If a fact doesn't have a row,
treat it as unverified and do not ship it.

Identity note: there are multiple people who use the name "Danni Moreno"
online, plus an unrelated Spanish electronic act called "Cefeida" and a
different Spotify artist called "Dani Moreno" (no double-n). Every source
below was reached by navigating **from** the verified official profile
itself (Instagram @dannimorenomx → linked Spotify → linked catalog), never
from a bare text-match search result, to avoid conflating her with any of
those.

## Artist identity

| Fact | Source | URL | Verified | Notes |
|---|---|---|---|---|
| Instagram handle @dannimorenomx, bio "Productora, compositora y cantante. México. Escucha mi música. @dmstudiosmx", ~10.3K followers | Official Instagram profile | https://www.instagram.com/dannimorenomx/ | 2026-09-20 | Follower count NOT displayed on site (volatile) |
| Spotify artist page, "cantautora y productora mexicana" | Official Spotify artist page | https://open.spotify.com/artist/7jbMO8GaINf90FkmWvzUAN | 2026-09-20 | Monthly listener count NOT displayed on site (volatile) |
| YouTube channel @DanniMorenoMX | Official YouTube channel | https://www.youtube.com/@DanniMorenoMX | 2026-09-14 (original research) | |
| TikTok @itsdannimoreno | Official TikTok profile | https://www.tiktok.com/@itsdannimoreno | 2026-09-14 (original research) | |
| Apple Music artist page | Official Apple Music page | https://music.apple.com/us/artist/danni-moreno/1433651209 | 2026-09-14 (original research) | |
| Facebook page DanniMorenoMX | Official Facebook page | https://www.facebook.com/DanniMorenoMX/ | 2026-09-14 (original research) | Verified but not linked on site currently |
| Base: Ciudad de México | Instagram bio ("México 📍") + Spotify bio | as above | 2026-09-20 | Country/city-level only; no more specific claim made |
| Label credit: Danni Moreno Music / Warner Music Group | CEFEIDA release credits on Spotify | https://open.spotify.com/album/5tCbUJIL9OSrrKvT4HlB9G | 2026-09-20 | "℗ & © 2026 Danni Moreno Music / Warner Music Group", shown verbatim on release page |
| "Licenciada en Producción Musical" (degree credential); composes/produces/does vocal production for herself and other independent artists from her own home studio | Official media kit, PDF, provided directly by the artist's team, dated 2026 | local file: "Media kit Danni moreno actualizado.pdf" | 2026-09-20 | Primary source — highest priority per the source hierarchy. Studio referred to on-site as "DM Studios," matching the verified Instagram handle @dmstudiosmx |
| Genre framing: pop, danceable, disco influences, 80s and 2000s references | Same official media kit ("¿Quién es?" section) | as above | 2026-09-20 | Used to keep the site's genre framing accurate; the 80s-heavy visual concept is explicitly a creative choice, not a claim that this is her only reference point |

## CEFEIDA (EP)

| Fact | Source | URL | Verified | Notes |
|---|---|---|---|---|
| Title, type (EP), release date (Jan 29, 2026), 7 tracks, 17:30 total | Official Spotify release page | https://open.spotify.com/album/5tCbUJIL9OSrrKvT4HlB9G | 2026-09-20 | Re-checked live during this pass, unchanged from original research |
| Track order & durations: 1. Intro 1:03, 2. Pecar 2:39, 3. Química 2:51, 4. Fuiste Tú 3:09, 5. El amor es real? 2:52, 6. Yorokobi (喜び) 3:20, 7. Outro 1:34 | Same Spotify release page | as above | 2026-09-20 | Kanji corrected to 喜び (U+559C) in this pass — a prior transcription used the wrong character, U+558C, in one non-tracklist copy string |
| Per-track Spotify URLs | Same Spotify release page (individual track links) | as above | 2026-09-14 (original research) | All 15 Spotify URLs in `lib/data.ts` re-tested with `curl`, all return 200 |

## Other releases (catalog)

| Fact | Source | URL | Verified | Notes |
|---|---|---|---|---|
| Signos (EP), 2023-10-06 | Spotify discography | https://open.spotify.com/track/2bSqjf346Ux1viVQKISDFy | 2026-09-14 | Zodiac-themed tracks (Leo, Cáncer, Capricornio, Géminis…) feat. Maya UZ |
| Sanar (Single), 2024-02-22 | Spotify discography | https://open.spotify.com/album/7y025obHy6euEpAXMFto1l | 2026-09-14 | |
| La cagaste (Single), 2024-06-06 | Spotify discography | https://open.spotify.com/album/4tt3mGyVlaUnKctUIzngC7 | 2026-09-14 | |
| Bailemos (Single, feat. D'Khilla), 2024-07-17 | Spotify discography | https://open.spotify.com/track/1PIyiDuNOEVNiRBDf91Pvw | 2026-09-14 | |
| Solamente tú <3 (Single), 2026-05-08 | Spotify discography | https://open.spotify.com/album/42AJg6Hk66teFACorpkplq | 2026-09-14 | |
| Va a Llegar (Single), 2026-08-12 | Spotify discography | https://open.spotify.com/album/08MBTRromgYqKpbCMqdbqN | 2026-09-14 | This is her most recent **release**; CEFEIDA is her most recent **EP** — site copy is worded to keep that distinction accurate |
| Dates above not independently re-verified in this correction pass | — | — | not re-verified 2026-09-20 | Carried over from 2026-09-14 research. Re-check before any future edit that depends on them. |

## Videos

| Fact | Source | URL | Verified | Notes |
|---|---|---|---|---|
| "Pecar (Video Oficial)", YouTube ID rScAq5anc0w | Official YouTube channel @DanniMorenoMX | https://www.youtube.com/watch?v=rScAq5anc0w | 2026-09-14 | Embedded via youtube-nocookie facade, click-to-play |
| "Cefeida (Video Oficial)", YouTube ID 97llOrK9Sqg | Official YouTube channel | https://www.youtube.com/watch?v=97llOrK9Sqg | 2026-09-14 | Video confirmed official; the auto-generated thumbnail frame is NOT used as a "photo of Danni" anywhere on the site as of this pass (see note below) |
| "Yorokobi (喜び) (Video Oficial)", YouTube ID tfb8LgtuGDM | Official YouTube channel | https://www.youtube.com/watch?v=tfb8LgtuGDM | 2026-09-14 | Same caveat as above |

**Photography note:** YouTube's auto-generated `maxresdefault.jpg` thumbnail is an algorithmically-picked frame — it is NOT curated, and in this session's visual QA it did not reliably show Danni's face (one frame showed a different person, likely another performer/actor in the video). As of this correction pass, the two YouTube auto-thumbnails have been **removed from the Visual Archive** and replaced with verified Spotify cover art. They remain in use only as the click-to-play poster in the Featured Transmission (Pecar) section, where they're clearly framed as a video-preview control, not as a Danni portrait.

## Photography (local files, `public/photos/`)

| File | Source | Verified | Notes |
|---|---|---|---|
| `hero-cdmx.jpg`, `portrait-about.jpg`, `archive-grass-01.jpg`, `archive-grass-02.jpg` | Extracted directly from the official 2026 media kit PDF, provided by the artist's team | 2026-09-20 | Real campaign photography, not cover art. `archive-grass-01.jpg`/`-02.jpg` are the same photoshoot used (cropped) for the official "Solamente tú <3" single cover, which is independent visual confirmation that the cover art genuinely depicts Danni. Source master files were ~1600×900–1344×756px as embedded in the PDF; if higher-resolution originals exist, they should replace these. |

## Live performances

| Fact | Source | URL | Verified | Notes |
|---|---|---|---|---|
| Performance at the Marcha del Orgullo LGBT+, Ángel de la Independencia, Ciudad de México, 2026 | Official media kit (long-form bio text) + corroborated by an Instagram Highlight titled "Marcha lgbt🏳️‍🌈" | https://www.instagram.com/dannimorenomx/ | 2026-09-20 | Media kit gives only the year, not an exact date — site displays "2026" only, does not invent a specific day/month |
| "Una noche con Danni Moreno," Queer House, Puebla, México, 2025-08-21 | Instagram Highlights ("Concierto 2025") | https://www.instagram.com/dannimorenomx/ | not re-verified with exact date confirmation 2026-09-20 | Presented on-site only as a past archive entry, never as upcoming. Original date sourced 2026-09-14; the specific date itself was not re-confirmed to the day in this pass — flagging for a follow-up check rather than asserting false confidence. |

## Explicitly NOT included (verified but deliberately left off the site, or could not verify)

- **Follower/stream stats from the official media kit** (TikTok 7.6M fanbase, Spotify 1.5M streams, Instagram 10.2K, YouTube 3.29K suscriptores, +634% oyentes / +533% reproducciones year-over-year) — these ARE from a verified, dated, primary source, but they're exactly the kind of volatile numbers the "no maintenance plan" rule warns about; they will read as stale within weeks. Deliberately not displayed. If the site later gets a process for keeping stats current, these are the source figures to start from (media kit, page 2).
- ">1,000,000 reproducciones" on one unnamed song, and a song co-written with a friend that aired on Televisa during a past Christmas season — both mentioned in the long-form bio text provided directly in this session. Real, but under-specified (no song title, no exact date) — left out of on-site copy to avoid a claim that reads more precise than it is. Worth asking the artist's team for the specific song/date if this should go on the site later.
- Instagram follower count, Spotify monthly listeners, YouTube subscribers, TikTok followers, any stream counts sourced from the platforms directly — same reasoning as above.
- Any awards, chart positions, press quotes, named photographers/directors/producers beyond the label credit above — never found a reliable source, so never added.
- Any upcoming concert dates — none could be verified as of any research pass; the Live section only ever shows verified past dates.
- Any claim that CEFEIDA/1987/broadcast imagery reflects a real historical or spiritual philosophy Danni has stated — the site's cosmic/broadcast language is explicitly creative direction (see `SEÑALES DE OTRO MUNDO`, `TRANSMISIÓN ACTIVA`, etc. in `components/ArtistStatement.tsx` and `components/HeroTransmission.tsx`), never presented as a quote or biographical fact.
