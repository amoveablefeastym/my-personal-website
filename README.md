# Yimin Huang — Personal Website

Personal website built with Astro 5, Tailwind CSS v4, and MDX. Deployed on Vercel.

## Stack

- **[Astro 5](https://astro.build/)** — static site generator with Content Collections
- **[Tailwind CSS v4](https://tailwindcss.com/)** + `@tailwindcss/typography` — styling
- **MDX** — content authoring for projects, research, and writing entries
- **Vercel** — deployment (auto-deploys on push to `main`)

## Structure

```
src/
  content/
    projects/     # Project case studies (MDX)
    research/     # Research entries (MDX)
    writing/      # Writing entries — stories, screenplays, plays (MDX)
  pages/
    index.astro
    projects/
    research/
    writing/
  components/
  layouts/
public/
  images/         # Project and writing images
  files/          # PDFs (white papers, screenplays)
```

## Content

**Projects:** ClassHub, CTEC Searcher, Shopify for Students, Drift

**Writing:** short stories, screenplays, stage plays — rendered as full-text pages or PDF embeds depending on `content_type` in frontmatter

## Dev

```bash
npm run dev      # start local dev server
npm run build    # production build
npm run preview  # preview production build
```

## Deploy

Push to `main` — Vercel handles the rest.
