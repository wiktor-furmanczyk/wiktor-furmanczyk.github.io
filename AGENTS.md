# Public portfolio instructions

## Purpose and technology

This repository is the public VeltoWeb portfolio hosted with GitHub Pages and Jekyll. It is a small server-rendered site, not a React or Node application. Preserve the Jekyll structure and avoid adding a frontend framework unless the user explicitly requests an architectural change.

## Architecture

- `_config.yml` contains the site identity, public URL, language, permalink configuration, and default project layout.
- `_layouts/default.html` is the shared document shell: metadata, fonts, stylesheet and script loading, brand header, navigation, `{{ content }}`, and footer.
- `_layouts/project.html` wraps project pages and supplies standard return navigation. LinguaPilot has its own return link inside its product hero.
- `assets/css/style.scss` is the source of all site styling. GitHub Pages compiles it to `/assets/css/style.css` because the file starts with Jekyll front matter. Never create or edit generated `style.css` or `_site/` output.
- `assets/js/site.js` controls only the responsive navigation: open/close state, accessible label, link selection, viewport changes, and Escape handling.
- `index.md` contains the homepage structure: hero, CSS laptop illustration, selected project cards, About section, and skills.
- `projects/index.md` builds the project list from pages whose front matter uses `layout: project`.
- `projects/<slug>/index.md` contains a public project page. LinguaPilot currently uses a custom product layout with CSS-rendered phone mockups.

Pages are Markdown files with YAML front matter, but they may contain semantic HTML when the design needs structured sections. Keep one meaningful `h1`, working internal anchors, and accessible labels.

## Visual system

The current portfolio uses a dark cosmic VeltoWeb presentation style:

- deep navy background,
- cyan and electric-blue accents,
- translucent glass-like panels,
- subtle glow and orbit decorations,
- compact Inter typography,
- responsive desktop, tablet, and mobile layouts.

CSS custom properties at the beginning of `assets/css/style.scss` define the palette and shared dimensions. Reuse the existing components and breakpoints before introducing new variants. The laptop, project previews, and LinguaPilot phones are lightweight HTML/CSS illustrations, not image files.

For pixel-accurate replacements, use only explicitly approved public assets. Expected optional assets are an SVG VeltoWeb logo, a transparent laptop render, and approved LinguaPilot screen captures stored under `assets/projects/<slug>/`.

## Content source and synchronization

The approved content source is the separate private workspace, usually `C:\Workspace`:

- workspace `docs/portfolio-home.md` maps to this repository's `index.md`,
- workspace `projects/veltoweb/android-apps/<slug>/public-documentation/github/project-page.md` maps to `projects/<slug>/index.md`,
- workspace `public-documentation/images/` maps to `assets/projects/<slug>/`.

If homepage or project content changes, update the workspace source and keep it equivalent to the public copy. Layout, SCSS, JavaScript, Jekyll configuration, and shared website components live only in this public repository.

Do not copy private application code, internal documentation, `solution-brief.md`, `facebook.txt`, configuration, secrets, logs, or unapproved images into this repository.

## Verification

Before handoff or PR publication:

1. Run the workspace portfolio validator for every affected project and related project slug.
2. Run `tools/portfolio/Test-PortfolioPublishing.ps1` when the publication mechanism or accepted page structure changes.
3. Run `git diff --check` in both repositories.
4. Check internal links, HTML tag balance, CSS brace balance, and mobile navigation behavior.
5. Build with Jekyll and inspect desktop/mobile rendering when those tools are available. If they are unavailable, state this explicitly and require visual confirmation in the GitHub Pages preview before merge.
6. Confirm that the public diff contains only intended public website files.

The workspace and this website are independent repositories. Never imply that both are committed or published when only one has passed its commit, remote-hash, and PR verification gates.
