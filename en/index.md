---
layout: default
title: Wiktor Furmańczyk
description: VeltoWeb portfolio featuring mobile and desktop apps, browser extensions, web tools, automation, and AI integrations.
permalink: /en/
lang: en-US
body_class: home-page
image: /assets/images/veltoweb-og.jpg
image_alt: VeltoWeb logo on a dark blue background
---

<section class="hero section-shell" aria-labelledby="hero-title">
  <div class="hero-copy">
    <p class="eyebrow"><span></span> Welcome to my portfolio</p>
    <h1 id="hero-title">Wiktor <span class="text-gradient">Furmańczyk</span></h1>
    <p class="hero-lead">I design and build practical digital products</p>
    <p class="hero-description">I independently develop mobile and desktop apps, web tools, automation, and AI integrations. I take each project from the initial idea and interface design through to a working solution.</p>
    <div class="button-row">
      <a class="button button-primary" href="{{ '/en/projects/' | relative_url }}">Explore projects <span aria-hidden="true">→</span></a>
    </div>
  </div>

  <figure class="hero-art">
    <img src="{{ '/assets/images/hero-devices.webp' | relative_url }}" srcset="{{ '/assets/images/hero-devices-724.webp' | relative_url }} 724w, {{ '/assets/images/hero-devices.webp' | relative_url }} 1448w" sizes="(max-width: 760px) 100vw, 720px" alt="VeltoWeb portfolio on a laptop and the LinguaPilot app on a phone" width="1448" height="1086" fetchpriority="high" decoding="async">
  </figure>
</section>

<section class="expertise-strip section-shell" aria-label="What I do">
  <div><img src="{{ '/assets/images/expertise-mobile.png' | relative_url }}" alt="" aria-hidden="true" width="256" height="256">Mobile apps</div>
  <div><img src="{{ '/assets/images/expertise-desktop.png' | relative_url }}" alt="" aria-hidden="true" width="256" height="256">Desktop apps</div>
  <div><img src="{{ '/assets/images/expertise-extension.png' | relative_url }}" alt="" aria-hidden="true" width="256" height="256">Chrome extensions</div>
  <div><img src="{{ '/assets/images/expertise-web.png' | relative_url }}" alt="" aria-hidden="true" width="256" height="256">Web tools</div>
  <div><img src="{{ '/assets/images/expertise-automation.png' | relative_url }}" alt="" aria-hidden="true" width="256" height="256">Automation</div>
  <div><img src="{{ '/assets/images/expertise-ai.png' | relative_url }}" alt="" aria-hidden="true" width="256" height="256">AI integrations</div>
</section>

<section id="projects" class="projects-section section-shell" aria-labelledby="projects-title">
  <div class="section-heading">
    <div>
      <p class="section-kicker">Selected work</p>
      <h2 id="projects-title">My <span class="text-gradient">projects</span></h2>
      <p>Selected projects I independently develop from the initial idea to a working application.</p>
    </div>
    <a class="text-link projects-desktop-link" href="{{ '/en/projects/' | relative_url }}">View all projects <span aria-hidden="true">→</span></a>
  </div>

  <div class="project-grid">
    <article class="project-card project-card-featured">
      <div class="project-card-visual">
        <img class="project-card-image" src="{{ '/assets/images/project-linguapilot.jpg' | relative_url }}" alt="LinguaPilot screens for creating flashcards and learning vocabulary" loading="lazy" width="1200" height="900">
      </div>
      <div class="project-card-body">
        <div class="card-meta-row"><span class="status-badge">Preparing for Google Play</span></div>
        <h3>LinguaPilot</h3>
        <p>Learn languages in short sessions with flashcards tailored to your goals.</p>
        <div class="tag-row" aria-label="Project type and technologies"><span>Mobile app</span><span>Kotlin</span><span>Jetpack Compose</span></div>
        <a class="card-link" href="{{ '/en/projects/lingua-pilot/' | relative_url }}">See how it works <span aria-hidden="true">→</span></a>
      </div>
    </article>

    <article class="project-card">
      <div class="project-card-visual">
        <img class="project-card-image" src="{{ '/assets/images/project-writing-assistant.jpg' | relative_url }}" alt="AI Writing Assistant for editing, rewriting, and translating text" loading="lazy" width="1200" height="900">
      </div>
      <div class="project-card-body">
        <div class="card-meta-row"><span class="status-badge status-violet">For personal use</span></div>
        <h3>AI Writing Assistant</h3>
        <p>Dictate, edit, and translate messages from the keyboard in different apps.</p>
        <div class="tag-row" aria-label="Project type and technologies"><span>Mobile app</span><span>Kotlin</span><span>Jetpack Compose</span></div>
        <a class="card-link" href="{{ '/en/projects/writing-assistant-android/' | relative_url }}">See how it works <span aria-hidden="true">→</span></a>
      </div>
    </article>

    <article class="project-card project-card-upcoming">
      <div class="upcoming-visual">
        <img class="project-card-image" src="{{ '/assets/images/project-upcoming.jpg' | relative_url }}" alt="" loading="lazy" width="1200" height="751">
      </div>
      <div class="project-card-body">
        <span class="status-badge status-muted">In development</span>
        <h3>More projects coming soon</h3>
        <p>New tools and experiments will appear here when they are ready to share.</p>
      </div>
    </article>
  </div>
  <a class="text-link projects-mobile-link" href="{{ '/en/projects/' | relative_url }}">View all projects <span aria-hidden="true">→</span></a>
</section>

<section class="roadmap-banner section-shell" aria-labelledby="roadmap-banner-title">
  <div class="roadmap-banner-copy">
    <p class="eyebrow"><span></span> Project development</p>
    <h2 id="roadmap-banner-title">Plans, progress, and <span class="text-gradient">updates</span></h2>
    <p>See what I am working on now, what comes next, and the most important changes across my projects.</p>
    <div class="roadmap-banner-actions">
      <a class="button button-primary" href="{{ '/en/roadmap/' | relative_url }}">View the roadmap <span aria-hidden="true">→</span></a>
      <a class="roadmap-banner-secondary" href="{{ '/en/roadmap/#changelog' | relative_url }}">Latest updates <span aria-hidden="true">→</span></a>
    </div>
  </div>
  <figure class="roadmap-banner-art">
    <img src="{{ '/assets/images/roadmap-changelog-card.webp' | relative_url }}" alt="Neon changelog interface showing new features, improvements, and fixes" width="1448" height="1086" loading="lazy" decoding="async">
  </figure>
</section>

<section id="blog" class="blog-section section-shell" aria-labelledby="blog-title">
  <a class="blog-art" href="https://www.facebook.com/VeltoWeb" target="_blank" rel="noopener noreferrer" aria-label="Visit the VeltoWeb blog on Facebook, opens in a new tab">
    <img src="{{ '/assets/images/veltoweb-blog-showcase.webp' | relative_url }}" srcset="{{ '/assets/images/veltoweb-blog-showcase-724.webp' | relative_url }} 724w, {{ '/assets/images/veltoweb-blog-showcase.webp' | relative_url }} 1448w" sizes="(max-width: 760px) 100vw, 720px" alt="VeltoWeb blog with posts about LinguaPilot, AI automation, and project development" loading="lazy" width="1448" height="1086" decoding="async">
  </a>

  <div class="blog-copy">
    <p class="section-kicker">VeltoWeb blog</p>
    <h2 id="blog-title">How I work and build <span class="text-gradient">projects</span></h2>
    <p>I share progress, ideas, experiments, and lessons from building my own projects. Follow what I am working on and see how each solution takes shape.</p>
    <div class="blog-topics" aria-label="Blog topics">
      <span><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 20V10m7 10V4m7 16v-7"/></svg>Growth</span>
      <span><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M9 18h6m-5 3h4M8.5 14.5a7 7 0 1 1 7 0c-.9.6-1.5 1.4-1.5 2.5h-4c0-1.1-.6-1.9-1.5-2.5Z"/></svg>Projects</span>
      <span><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0-5v2m0 14v2M3 12h2m14 0h2M5.6 5.6 7 7m10 10 1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4"/></svg>Behind the scenes</span>
    </div>
  </div>
  <a class="button button-primary blog-cta" href="https://www.facebook.com/VeltoWeb" target="_blank" rel="noopener noreferrer">Visit VeltoWeb on Facebook <span aria-hidden="true">↗</span></a>
</section>
