/**
 * Verified source data for the Danni Moreno (@dannimorenomx) transmission site.
 *
 * Every fact here was cross-checked across her official Spotify, Instagram,
 * YouTube, TikTok and Apple Music profiles in September 2026. Cover art is
 * NOT stored in this repo — it is hot-linked live from Spotify's own CDN
 * (the same mechanism Spotify's oEmbed widgets use), and video stills are
 * hot-linked from YouTube's official thumbnail CDN. Nothing here is
 * fabricated; unverifiable claims (upcoming shows, awards, credits) are
 * simply left out.
 */

export const artist = {
  name: "Danni Moreno",
  handle: "@dannimorenomx",
  instagram: "https://www.instagram.com/dannimorenomx/",
  tiktok: "https://www.tiktok.com/@itsdannimoreno",
  youtube: "https://www.youtube.com/@DanniMorenoMX",
  spotify: "https://open.spotify.com/artist/7jbMO8GaINf90FkmWvzUAN",
  appleMusic: "https://music.apple.com/us/artist/danni-moreno/1433651209",
  facebook: "https://www.facebook.com/DanniMorenoMX/",
  city: "Ciudad de México",
  roles: ["Cantautora", "Productora", "Creadora audiovisual"],
  label: "Danni Moreno Music / Warner Music Group",
};

export type Track = {
  index: number;
  title: string;
  duration: string;
  spotifyTrackUrl?: string;
  cover: string;
  /** Duotone accent used on tracks that share the EP cover, so each still reads as distinct. */
  accent: "signal" | "magenta" | "cobalt" | "violet";
};

// CEFEIDA — verified via Spotify (open.spotify.com/album/5tCbUJIL9OSrrKvT4HlB9G)
// EP, released January 29, 2026. 7 tracks, 17:30 total.
export const cefeida = {
  title: "CEFEIDA",
  type: "EP",
  year: 2026,
  releaseDate: "2026-01-29",
  totalDuration: "17:30",
  spotifyUrl: "https://open.spotify.com/album/5tCbUJIL9OSrrKvT4HlB9G",
  cover:
    "https://image-cdn-ak.spotifycdn.com/image/ab67616d0000b273a77b69c3afab20902a6764b0",
  credit: "℗ & © 2026 Danni Moreno Music / Warner Music Group",
  tracks: [
    {
      index: 1,
      title: "Intro",
      duration: "1:03",
      spotifyTrackUrl: "https://open.spotify.com/track/4BeMHredaNspMX1GIc7zad",
      cover:
        "https://image-cdn-ak.spotifycdn.com/image/ab67616d0000b273a77b69c3afab20902a6764b0",
      accent: "violet",
    },
    {
      index: 2,
      title: "Pecar",
      duration: "2:39",
      spotifyTrackUrl: "https://open.spotify.com/track/0iVjOO5WYVPMLbLKHLGQUi",
      cover:
        "https://image-cdn-ak.spotifycdn.com/image/ab67616d0000b273204995038f7d4cc2a069f1ef",
      accent: "signal",
    },
    {
      index: 3,
      title: "Química",
      duration: "2:51",
      spotifyTrackUrl: "https://open.spotify.com/track/4w4IYfWl4xS9FwMriFKUeU",
      cover:
        "https://image-cdn-ak.spotifycdn.com/image/ab67616d0000b273a77b69c3afab20902a6764b0",
      accent: "magenta",
    },
    {
      index: 4,
      title: "Fuiste Tú",
      duration: "3:09",
      spotifyTrackUrl: "https://open.spotify.com/track/5zqv5eYTFc1wy4uGsQnTGw",
      cover:
        "https://image-cdn-ak.spotifycdn.com/image/ab67616d0000b273a77b69c3afab20902a6764b0",
      accent: "cobalt",
    },
    {
      index: 5,
      title: "El amor es real?",
      duration: "2:52",
      spotifyTrackUrl: "https://open.spotify.com/track/27FjcPhqRTjb312xz4SmGm",
      cover:
        "https://image-cdn-ak.spotifycdn.com/image/ab67616d0000b27312472ac60807518cd0d90411",
      accent: "violet",
    },
    {
      index: 6,
      title: "Yorokobi (喜び)",
      duration: "3:20",
      spotifyTrackUrl: "https://open.spotify.com/track/0jtWqvMladRmje21rb5Rdu",
      cover:
        "https://image-cdn-ak.spotifycdn.com/image/ab67616d0000b273131e86d43a7c045f7cde30cf",
      accent: "magenta",
    },
    {
      index: 7,
      title: "Outro",
      duration: "1:34",
      spotifyTrackUrl: "https://open.spotify.com/track/1UcJh9BihtkjNA8ftmeU1w",
      cover:
        "https://image-cdn-ak.spotifycdn.com/image/ab67616d0000b273a77b69c3afab20902a6764b0",
      accent: "signal",
    },
  ] satisfies Track[],
};

export type Release = {
  catNo: string;
  title: string;
  type: "EP" | "Single";
  year: number;
  date: string;
  cover: string;
  spotifyUrl: string;
};

// Verified discography (Spotify + Deezer cross-checked). Curated selection —
// not every minor single is listed, to keep the archive editorial rather
// than exhaustive.
export const catalog: Release[] = [
  {
    catNo: "DM–001",
    title: "Signos",
    type: "EP",
    year: 2023,
    date: "2023-10-06",
    cover:
      "https://image-cdn-ak.spotifycdn.com/image/ab67616d0000b273d31f1b422d039e38466682ed",
    spotifyUrl: "https://open.spotify.com/track/2bSqjf346Ux1viVQKISDFy",
  },
  {
    catNo: "DM–002",
    title: "Sanar",
    type: "Single",
    year: 2024,
    date: "2024-02-22",
    cover:
      "https://image-cdn-ak.spotifycdn.com/image/ab67616d0000b273d0ad175711b1af44f7ac452e",
    spotifyUrl: "https://open.spotify.com/album/7y025obHy6euEpAXMFto1l",
  },
  {
    catNo: "DM–003",
    title: "La cagaste",
    type: "Single",
    year: 2024,
    date: "2024-06-06",
    cover:
      "https://image-cdn-fa.spotifycdn.com/image/ab67616d0000b2738f1a632d4a13f01d077f0084",
    spotifyUrl: "https://open.spotify.com/album/4tt3mGyVlaUnKctUIzngC7",
  },
  {
    catNo: "DM–004",
    title: "Bailemos",
    type: "Single",
    year: 2024,
    date: "2024-07-17",
    cover:
      "https://image-cdn-ak.spotifycdn.com/image/ab67616d0000b273f0c3767cfa6ae622a4fc71fa",
    spotifyUrl: "https://open.spotify.com/track/1PIyiDuNOEVNiRBDf91Pvw",
  },
  {
    catNo: "DM–005",
    title: "CEFEIDA",
    type: "EP",
    year: 2026,
    date: "2026-01-29",
    cover:
      "https://image-cdn-ak.spotifycdn.com/image/ab67616d0000b273a77b69c3afab20902a6764b0",
    spotifyUrl: "https://open.spotify.com/album/5tCbUJIL9OSrrKvT4HlB9G",
  },
  {
    catNo: "DM–006",
    title: "Solamente tú <3",
    type: "Single",
    year: 2026,
    date: "2026-05-08",
    cover:
      "https://image-cdn-fa.spotifycdn.com/image/ab67616d0000b273605c837455ef3bfc124b2ced",
    spotifyUrl: "https://open.spotify.com/album/42AJg6Hk66teFACorpkplq",
  },
  {
    catNo: "DM–007",
    title: "Va a Llegar",
    type: "Single",
    year: 2026,
    date: "2026-08-12",
    cover:
      "https://image-cdn-ak.spotifycdn.com/image/ab67616d0000b2733a956d2210e6870815431eff",
    spotifyUrl: "https://open.spotify.com/album/08MBTRromgYqKpbCMqdbqN",
  },
];

// Verified official videos (YouTube channel: @DanniMorenoMX)
export const videos = {
  pecar: {
    title: "Pecar (Video Oficial)",
    youtubeId: "rScAq5anc0w",
    url: "https://www.youtube.com/watch?v=rScAq5anc0w",
  },
  cefeida: {
    title: "Cefeida (Video Oficial)",
    youtubeId: "97llOrK9Sqg",
    url: "https://www.youtube.com/watch?v=97llOrK9Sqg",
  },
  yorokobi: {
    title: "Yorokobi 喜び (Video Oficial)",
    youtubeId: "tfb8LgtuGDM",
    url: "https://www.youtube.com/watch?v=tfb8LgtuGDM",
  },
};

export const youtubeThumb = (id: string) =>
  `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;

export type PastShow = {
  title: string;
  venue: string;
  city: string;
  /** ISO date, or just a year ("2026") when the source didn't give an exact day. */
  date: string;
  dateIsYearOnly?: boolean;
};

// Verified past performances only — no upcoming dates could be confirmed as
// of this research pass, so this stays a quiet archive rather than a
// promoted "Live" section. Sources: Instagram highlights + the artist's own
// 2026 media kit (see docs/content-sources.md).
export const pastShows: PastShow[] = [
  {
    title: "Marcha del Orgullo LGBT+",
    venue: "Ángel de la Independencia",
    city: "Ciudad de México",
    date: "2026",
    dateIsYearOnly: true,
  },
  {
    title: "Una noche con Danni Moreno",
    venue: "Queer House",
    city: "Puebla, México",
    date: "2025-08-21",
  },
];
