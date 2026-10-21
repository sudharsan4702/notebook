# Notebook

> A quiet corner of the internet for things that enter the mind and things that come out of it.

Built with [Astro](https://astro.build), Markdown, and minimalist typography.

---

## How to Run

### 1. Start the Development Server
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:4321
```

### 2. Build for Production (Static HTML)
```bash
npm run build
```
The output will be placed in `dist/` — pure static HTML and CSS with zero JavaScript overhead.

---

## How to Add New Entries

Every thought, article, link, or note is a simple `.md` file inside:
```
src/content/entries/
```

### Basic File Format
Create a file, e.g. `src/content/entries/2026-10-22-my-new-note.md`:

```markdown
---
title: "Your Title Goes Here"
date: 2026-10-22
tags: ["philosophy", "java", "thoughts"]
description: "A short 1-line summary shown on the stream list (optional)."
link: "" # optional external URL if preserving a link
---

Your content goes here in plain Markdown.

You can use paragraphs, quotes, code blocks, lists, and headings:

### Subheading
A thought or reflection.

```java
public class Hello {
    // Code blocks are automatically syntax-highlighted
}
```
```

As soon as you save the `.md` file, it will automatically appear in your chronological stream list!

---

## Project Structure

```text
notebook/
├── src/
│   ├── content/
│   │   ├── config.ts       # Content collection schema
│   │   └── entries/        # Your markdown files live here
│   ├── layouts/
│   │   └── BaseLayout.astro # Clean editorial HTML wrapper & navigation
│   ├── pages/
│   │   ├── index.astro     # Hacker News-style chronological stream
│   │   ├── about.astro     # Colophon & personal manifesto
│   │   └── entries/
│   │       └── [slug].astro # Minimalist, distraction-free reader page
│   └── styles/
│       └── global.css      # Warm paper palette & typography
├── astro.config.mjs
└── package.json
```
