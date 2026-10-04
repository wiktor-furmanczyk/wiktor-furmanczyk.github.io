# Public portfolio instructions

## Responsibility

This repository is the public VeltoWeb portfolio hosted by GitHub Pages with Jekyll. It is independent from the private `Workspace` repository. All website edits, commits, pushes, and pull requests happen only here.

Do not write to, stage, commit, or push the sibling Workspace during a portfolio task. Do not run a Workspace publishing or synchronization script.

## Private source boundary

For a project page or homepage card, the only permitted private source is the selected project's directory:

```text
C:\Repozytories\Workspace\projects\...\<project>\public-documentation\
```

Read only that exact `public-documentation/` tree. Do not inspect application source, internal `docs/`, README files outside the public directory, manifests, configuration, tests, logs, build output, Git history, or sibling projects. If the approved public material does not contain a required fact, ask the user instead of opening private project files.

Use `facebook.txt` only as an optional messaging reference; do not publish it as a website file. Use images only from `public-documentation/images/`.

## Architecture

- `_config.yml` contains site identity, URL, language, permalinks, and layout defaults.
- `_layouts/default.html` is the shared document shell.
- `_layouts/project.html` wraps standard project pages.
- `assets/css/style.scss` is the stylesheet source. Never create or edit generated `style.css` or `_site/`.
- `assets/js/site.js` controls responsive navigation.
- `index.md` owns the public homepage, About content, skills, and project cards.
- `projects/index.md` builds the project list.
- `projects/<slug>/index.md` contains a public project page.

Preserve the existing dark cosmic VeltoWeb system and reuse current components and breakpoints before adding variants. Keep pages accessible, responsive, and limited to one meaningful `h1`.

## Portfolio workflow

Use `.agents/skills/portfolio-site-workflow/SKILL.md` whenever adding or updating a project from Workspace public documentation.

Treat approved source material as factual input, not as a file synchronization target. Adapt it to the current website structure and preserve unrelated homepage and project content.

## Safety and Git

The public diff may contain only intended website files. It must not contain private source, internal documentation, `solution-brief.md`, configuration, secrets, logs, customer data, build output, or `facebook.txt`.

Before a requested push, verify that `origin` is `wiktor-furmanczyk/wiktor-furmanczyk.github.io`, review the committed diff, and confirm no Workspace path is staged. Push or open a PR only when explicitly requested.

Ignore every `_private` directory unless the user explicitly requests it.
