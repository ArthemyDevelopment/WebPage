# Content Editing Guide

A map of **what to edit, where, and how** for your Astro portfolio at `arthemy.dev`.

---

## Quick reference

| What you want to change | File(s) to edit |
|-------------------------|-----------------|
| Site name, logo, colors, SEO, sidebar links | `theme.config.ts` |
| Landing page sections (hero, features, FAQ, etc.) | `src/pages/index.astro` |
| Hero headline & buttons | `src/components/Hero.astro` |
| Featured projects on homepage | `src/components/FeaturedProjects.astro` + project MDX files |
| Featured blog posts on homepage | `src/components/FeaturedPosts.astro` |
| Individual projects | `src/content/projects/*.mdx` |
| Project card/detail images | `public/projects/` + portfolio page files |
| Static policy HTML pages | `public/*.html` |
| Footer content | `src/components/Footer.astro` |
| Custom domain | `public/CNAME` |

After any change: `npm run build` locally to verify, then push to `RemakePortfolio` to deploy.

---

## 1. Site-wide settings (name, logo, colors, SEO)

**File:** `theme.config.ts`

```ts
export default defineThemeConfig({
  name: 'Accessible Astro',        // Sidebar + logo text
  logo: logoImage,                 // Logo image (see below)
  seo: {
    title: 'Accessible Astro Starter',
    description: '...',            // Default meta description
    author: 'Incluud',
    image: previewImage,           // Social share preview
  },
  colors: {
    primary: '#d648ff',
    secondary: '#00d1b7',
    // ...
  },
  navigation: { ... },
  socials: [ ... ],
})
```

- **Site name:** `name`
- **Logo:** replace `src/assets/img/logo.svg`, or point `logo` to another image import
- **Brand colors:** `colors` (used as CSS variables in the layout)
- **Browser tab / social preview:** `seo.title`, `seo.description`, `seo.image`
- **Also update** `site` in `astro.config.mjs` to `https://arthemy.dev` if not already done

---

## 2. Sidebar navigation (tabs)

**File:** `theme.config.ts` → `navigation.items`

Each sidebar link is an entry in that array.

### Simple link

```ts
{
  type: 'link',
  label: 'Portfolio',
  href: '/portfolio',
},
```

### Dropdown menu

```ts
{
  label: 'Features',
  type: 'dropdown',
  items: [
    { label: 'Contact', href: '/contact' },
    { label: 'GitHub', href: 'https://github.com/...', external: true },
  ],
},
```

### Icon-only external link (e.g. GitHub)

```ts
{
  type: 'link',
  label: 'Go to GitHub, opens in new tab',  // screen reader text
  href: 'https://github.com/ArthemyDevelopment',
  icon: 'lucide:github',
  external: true,
},
```

Icons use the [Lucide set](https://icones.js.org/collection/lucide) via `lucide:icon-name`.

### Remove a sidebar tab

Delete its object from `navigation.items`.  
Example: remove the Blog block to hide the Blog tab.

### Dark mode toggle

```ts
navigation: {
  darkmode: true,   // set false to hide
  items: [ ... ],
}
```

---

## 3. Landing page content

**File:** `src/pages/index.astro`

The homepage is built from sections. Edit or remove them as needed.

| Section | How to edit |
|---------|-------------|
| **Hero** | Edit `src/components/Hero.astro` or pass props: `<Hero src="/your-image.webp" />` |
| **Features grid** | Edit the `<Feature>` blocks in `index.astro` (icon, title, text) |
| **Image + text blocks** | Edit `<ContentMedia>` sections (`imgSrc`, headings, paragraphs) |
| **Featured projects** | `<FeaturedProjects />` — see section 5 |
| **Featured blog posts** | `<FeaturedPosts />` — see section 6 |
| **FAQ accordion** | Edit `<AccordionItem>` blocks in `index.astro` |
| **Team avatars** | Edit `<Avatar>` entries in `index.astro` |
| **Stats counters** | Edit `<Counter>` values in `index.astro` |

### Hero example

In `src/components/Hero.astro`:

- **Headline:** change the `<h1>` / `<slot>` text
- **Buttons:** edit the two `<Link>` components (labels + `href`)
- **Image:** default `/astronaut-hero-img.webp` — put the file in `public/` and update `src`

### Remove a homepage section

Delete the section or component line from `index.astro`, e.g.:

```astro
<!-- Remove this line to hide featured blog on homepage -->
<FeaturedPosts />
```

---

## 4. Images

### Static images (simple)

Put files in **`public/`** and reference by path:

```astro
<img src="/my-photo.webp" alt="..." />
```

Examples:

- Hero: `public/astronaut-hero-img.webp` → `/astronaut-hero-img.webp`
- Content sections: `public/accessible-components.webp`
- Policy pages: already in `public/` (e.g. `DungeonFaller_PrivacyPolicy.html`)

### Optimized images (Astro)

Put source images in **`src/assets/`** and import:

```astro
import myImage from '@assets/img/logo.svg'
```

### Project images

- **Card thumbnails (homepage):** `src/components/FeaturedProjects.astro` imports from `@assets/images/projects/`
- **Portfolio list/detail:** `src/pages/portfolio/[project].astro` cycles through `/projects/project-image-1.png` etc.
- **Inside project write-ups:** MDX uses `/projects/your-image.png` → file goes in **`public/projects/`**

### Favicon

Replace `public/favicon.svg`.

---

## 5. Projects (portfolio)

### Add / edit / remove a project

**Folder:** `src/content/projects/`

One `.mdx` file per project. Filename becomes the URL slug:

- `my-game.mdx` → `arthemy.dev/portfolio/my-game`

### Frontmatter (required fields)

Pick **one** display mode:

**Itch.io embed**

```yaml
---
title: My Game
displayMode: embed
itchId: 'yourusername/your-game-slug'
skills: ['Unity', 'C#', 'Game Design']
description: Short summary for cards and SEO
---
```

**Video trailer**

```yaml
---
title: My Game
displayMode: media
videoUrl: 'https://example.com/trailer.mp4'
skills: ['Unity', 'Cinematics']
description: Short summary
---
```

**External store link**

```yaml
---
title: My Game
displayMode: link
externalUrl: 'https://play.google.com/store/apps/details?id=...'
skills: ['Unity', 'Android']
description: Short summary
---
```

### Project page body

Below the frontmatter, write normal MDX/Markdown (headings, paragraphs, images, components).

The embed/video/button is rendered automatically by `src/components/ProjectRenderer.astro` above the body content.

### Delete a project

Remove its `.mdx` file from `src/content/projects/`.

### Control homepage featured projects

**File:** `src/components/FeaturedProjects.astro`

```astro
<FeaturedProjects limit={3} title="Featured projects" />
```

- **`limit`** — how many show on the homepage (first N files from the collection)
- **`title`** — section heading
- **Order:** file order in the collection (rename files or add a `sort` field later if you need custom order)
- **Card images:** hardcoded rotation of 3 images in the component — replace imports at the top of the file with your own

### Portfolio listing page

**File:** `src/pages/portfolio/[...page].astro` — lists all projects with pagination. Updates automatically when MDX files change.

---

## 6. Blog

The blog is **demo-style**: posts are fetched from an external API (`JSONPlaceholder`), not local MDX files.

### Blog pages

- List: `src/pages/blog/[...page].astro`
- Post: `src/pages/blog/[post].astro`
- Homepage teaser: `src/components/FeaturedPosts.astro`

### Disable the blog (recommended steps)

**Step 1 — Hide sidebar tab**  
Remove the Blog entry from `theme.config.ts` → `navigation.items`.

**Step 2 — Hide homepage section**  
Remove `<FeaturedPosts />` from `src/pages/index.astro`.

**Step 3 — Stop generating blog pages**  
In `astro.config.mjs`, clear the blog API default:

```js
BLOG_API_URL: envField.string({
  // ...
  default: '',  // empty = no blog pages built
}),
```

Or set `BLOG_API_URL=` in a `.env` file. When unset/empty, build logs `skipping blog generation` and no `/blog/*` routes are created.

**Step 4 (optional)** — Remove demo blog links from `src/components/Footer.astro` and `src/pages/sitemap.astro`.

> To run a **real blog** later, you'd replace the API fetch with Astro content collections (`.mdx` in `src/content/blog/`) — that's a separate upgrade from the current demo setup.

---

## 7. Footer & other pages

| Page | File |
|------|------|
| Contact | `src/pages/contact.astro` |
| Footer CTA + links | `src/components/Footer.astro` + `src/components/CallToAction.astro` |
| Accessibility statement | `src/pages/accessibility-statement.mdx` |
| Static policy HTML | `public/DungeonFaller_PrivacyPolicy.html` etc. → `arthemy.dev/DungeonFaller_PrivacyPolicy.html` |

---

## 8. Local preview & deploy

```bash
# Live editing with hot reload
npm run dev

# Test production build
npm run build
npm run preview

# Deploy (if workflow triggers on push)
git add .
git commit -m "content: update homepage copy"
git push origin RemakePortfolio
```

Use **`npm run preview`**, not opening `dist/index.html` directly in the browser.

---

## Common tasks cheat sheet

| Task | Action |
|------|--------|
| Change site title in sidebar | `theme.config.ts` → `name` |
| Add sidebar link | Add object to `navigation.items` |
| Remove Blog tab | Delete Blog from `navigation.items` + remove `<FeaturedPosts />` |
| Change hero text | `src/components/Hero.astro` |
| Add a game project | New `.mdx` in `src/content/projects/` |
| Change project order on homepage | Reorder/rename MDX files or adjust `FeaturedProjects` |
| Add privacy policy page | Drop HTML in `public/YourApp_Policy.html` |
| Change logo | Replace `src/assets/img/logo.svg` |
| Change accent colors | `theme.config.ts` → `colors` |
