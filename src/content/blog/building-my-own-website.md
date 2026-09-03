---
title: Sometimes You Have to Rip It Down and Start Again
description: Why I rebuilt my website from scratch, how Astro, GitHub, and Netlify actually fit together, and the steps I took to do it myself.
pubDate: 2026-08-30
---

Have you ever been to a flat that was converted from a house? The L-shaped rooms. The plug sockets on the wrong wall. The door that opens the wrong way. Sometimes you can patch around it. And sometimes you have to rip it down and start from scratch.

That's how I'd come to feel about my website.

## Ten years of patching

It had been built up over roughly ten years on WordPress. Over time, I grew frustrated with it. Plugins didn't quite do what I wanted them to — often written by people who'd clearly never thought about accessibility standards, which matters more to me than most. Sometimes the whole thing would go offline for no reason I could find. And underneath it all sat a content management system that felt big and unwieldy for what I actually needed. There had to be a better way.

I'd come across static HTML websites — faster, more secure, none of the constant plugin maintenance. There was even a WordPress plugin that could convert my existing site into static HTML, and I'll admit, it did a genuinely good job. But it also surfaced the real problem: how much redundancy had built up underneath the surface. Pages with outdated content. Old photos. Old copy. Services I wasn't even offering anymore. Converting the mess to a faster format was still a mess. I needed to take the plunge and start from scratch.

## A confession

Here's something most people who book me as a speaker don't know: in a former life, I was a software developer for almost a decade, writing programs in Natural/DB2. That background is exactly why I felt confident enough to take this project on myself rather than handing it to someone else.

Confidence wasn't the same as having all the answers, though. I still had real questions — how would I handle the styling? What would I actually replace the old rotating testimonials with? What tools would even make sense for someone rebuilding a site alone, without a dev team behind them?

For the record: I did this using a paid Claude.ai subscription. I want to be upfront that I don't benefit financially in any way from saying that — it's just genuinely what I used, and it felt honest to say so rather than pretend the whole thing appeared by magic.

## Deciding how to write the content: markdown

The first real decision was how I'd actually write the pages and posts. I settled on markdown — a plain-text way of writing that gets converted into properly formatted HTML behind the scenes. It's a small, simple system:

A level-1 heading is a single `#` before your text: `# My Heading`

Bold text goes between double asterisks: `**text**`

A blockquote — the kind you'd use for a testimonial — is a `>` at the start of the line: `> Like this`

No formatting toolbar, no rich-text editor fighting you. Just plain text with a handful of symbols that mean something specific, which turned out to matter later when a few of those symbols got escaped by accident and broke entire pages — more on that below.

## The three tools, in Lego terms

Once I'd chosen markdown, I needed to understand what was actually going to turn my plain-text files into a real, live website. Three tools do that job, and thinking of it as building a Lego city made the whole thing click.

**Astro** is the instruction booklet and the assembly itself. You hand it loose bricks — markdown pages, a layout template, images — and it's what actually snaps them together into a finished, working model: real HTML, CSS, and JavaScript a browser can display. Write `# My Heading` in a markdown file, and Astro is the thing that knows to turn it into an actual heading in the finished build.

**GitHub** is the display shelf and the photo album. Not the shop window the public sees — it's where the official, agreed version of the site lives, along with a complete photographic history of every stage I've built. Finish something I'm happy with, and I take a snapshot (`git commit`) and place a copy on the shelf (`git push`). Knock a wall down by mistake, and there's always an earlier photo to go back to.

**Netlify** is the shop window on the high street. It watches the GitHub shelf, and the moment a new photo appears there, it automatically rebuilds the entire site from scratch and puts the new version in the window for the public to see. That rebuild-and-redisplay is called a "build" — and it's exactly what a free plan rations with credits. Doesn't matter how small the change was; a new photo on the shelf means a full rebuild in the window.

## Testing locally, without burning credits

That last point is what sent me looking for a way to test changes without spending credits on every tiny tweak. The answer was running the site locally, on my own computer, before ever pushing anything to GitHub.

A few real obstacles came up along the way. Typing `npm` into a terminal returned "not recognized" — I didn't have Node.js installed, the software that actually runs a project like this locally. Installing it (the LTS version from nodejs.org, or `winget install OpenJS.NodeJS.LTS` on Windows) fixed that. Then PowerShell refused to run npm's command at all, blocked by a security setting — switching to Command Prompt sidestepped it entirely rather than my needing to change a system setting I didn't fully understand.

From there, it was two commands:

```
npm install
npm run dev
```

The first downloads everything the project depends on. The second starts a local server — mine opens at `localhost:4321` — that updates live every time I save a file. Suddenly I could edit and see the result instantly, with no deploys, no build minutes, and no credits spent. Only once I'm genuinely happy with a change does it go through `git add`, `git commit`, and `git push` — the moment that actually wakes Netlify up to rebuild the shop window.

## Finding the cracks

Testing locally also meant I could finally see problems that had been sitting there unnoticed. One page was showing raw code as plain text on the screen — things like `layout: ../layouts/Layout.astro` printed out as if they were sentences. It turned out a stray backslash had crept in front of the markdown symbols throughout several pages, which stopped Astro from recognising them as formatting at all. It just dumped everything, unprocessed, straight onto the page. Once I knew what to look for, it was a straightforward fix — but it was only visible once I could actually preview the pages properly, rather than trusting how they looked in a text editor.

## Building something new

With a setup I trusted, I used it to build an actual feature: a testimonial carousel with working Previous and Next buttons, replacing a couple of placeholder links that had been sitting there unfinished for who knows how long. Being able to test it instantly in the browser, before it ever touched the live site, made that a far less nerve-wracking change than pushing straight to production and hoping for the best.

## What I'd tell someone starting from scratch

None of this required me to relearn my old career from twenty years ago. It required patience with error messages, a willingness to actually read what a message says rather than panic at it, and enough curiosity to open the files and look. Every error I hit had an unglamorous, specific fix. None of them needed the whole system understood before I could take the next step.

Which, funnily enough, is the same thing I tell audiences about performing under pressure: you don't need every skill mastered before you start. You need to be willing to meet the next problem as it actually is, not as you're afraid it might be.
