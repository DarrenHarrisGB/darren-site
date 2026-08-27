# darren-site

An [Astro](https://astro.build) site: plain markdown pages and blog posts,
styled through one shared layout.

## Structure

- `src/layouts/Layout.astro` — the shared header, footer, and nav. Edit
  `navLinks` here when you add or rename pages.
- `src/styles/global.css` — all the site's styling (colors, fonts, spacing).
- `src/pages/*.md` — one file per page (`about.md` → `/about/`,
  `services.md` → `/services/`, etc). Copy an existing one to add a new
  page — just change the frontmatter `title`/`description` and write your
  content below the `---`.
- `src/content/blog/*.md` — one file per blog post. Copy an existing one to
  add a new post; it appears automatically on `/blog/` (newest first) and
  gets its own page at `/blog/<filename>/`.
- `src/content.config.ts` — defines what frontmatter a blog post needs
  (`title`, `description`, `pubDate`). You shouldn't need to touch this.

## Adding the rest of your pages

This scaffold includes 4 example pages (home, about, services, contact) to
show the pattern. For your other ~11 pages, copy one of the `.md` files in
`src/pages/` and rename it — the filename becomes the URL. Then add a link
to it in `navLinks` inside `src/layouts/Layout.astro` if it should appear
in the navigation menu.

## Local development

```
npm install
npm run dev
```

Then open the URL it prints (usually `http://localhost:4321`).

## Building and deploying

```
npm run build
```

This outputs a fully static site into `dist/` — that folder is what you'd
drag into Netlify Drop, or what Netlify builds automatically if you connect
this project's GitHub repo (it will pick up `netlify.toml` automatically,
so you don't need to configure the build command by hand).
