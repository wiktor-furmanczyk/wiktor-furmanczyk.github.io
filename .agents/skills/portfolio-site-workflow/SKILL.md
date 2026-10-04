---
name: portfolio-site-workflow
description: Add or update a project in the public Jekyll portfolio using only that project's approved Workspace public-documentation directory, without reading application files or mutating Workspace.
metadata:
  short-description: Build portfolio pages from approved public docs
---

# Portfolio Site Workflow

Use this skill for project pages, homepage project cards, and approved project media in this repository.

## Resolve the source cheaply

The target repository is always `C:\Repozytories\wiktor-furmanczyk.github.io`.

Identify one project under `C:\Repozytories\Workspace\projects\` from the user's name, slug, or path. If discovery is needed, inspect directory names only until the matching `public-documentation/` is found. Do not open application files to identify it.

Once selected, the complete allowed source boundary is:

```text
<selected-project>/public-documentation/**
```

Read no other file from that project or Workspace. If a fact is absent, ask the user; do not infer it from private implementation.

## Build the public change

Read the current public `index.md`, the target `projects/<slug>/index.md` when it exists, and only the layouts/styles needed for the requested design change.

Use `github/project-page.md` as the factual content source. Derive a concise homepage card from it. `facebook.txt` may inform tone but must not be copied into the public repository. Copy only selected assets from `public-documentation/images/` to `assets/projects/<slug>/`.

Adapt content to the existing Jekyll structure and VeltoWeb visual system. Preserve unrelated homepage content, project order, pages, navigation, and owner information unless the user asks to change them.

## Verify the boundary

Before handoff, confirm:

- all private reads stayed inside the selected `public-documentation/`,
- all writes stayed inside the public repository,
- the diff contains only intended website files,
- no private code, internal docs, configuration, secret, log, customer data, build output, or `facebook.txt` was added,
- links, images, alternative text, front matter, HTML structure, and responsive behavior are valid,
- `git diff --check` passes.

Use Git only in the public repository. Commit, push, and PR publication require the user's explicit request for this repository.
