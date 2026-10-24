---
layout: default
title: Projects
description: "VeltoWeb projects, including LinguaPilot, AI Writing Assistant, Finance Manager, YouTube Hunter, and Dzisiaj nie palę."
permalink: /en/projects/
lang: en-US
body_class: projects-page
image: /assets/images/veltoweb-og.jpg
image_alt: VeltoWeb logo on a dark blue background
---

<header class="projects-hero section-shell">
  <p class="eyebrow"><span></span> VeltoWeb portfolio</p>
  <h1>Projects</h1>
  <p>Explore the problems I identified, the tools I built in response, and the current stage of each project.</p>
</header>

<section class="projects-showcase section-shell" aria-label="Project list">
  <article class="showcase-project showcase-project-hunter">
    <div class="showcase-copy">
      <span class="showcase-type">Windows app</span>
      <h2>YouTube <span>Hunter</span></h2>
      <p class="showcase-lead">Videos to review, decisions in one place</p>
      <p>Define the topic and criteria, review candidates with supporting clues, and save your own judgment.</p>
      <p class="showcase-status"><span aria-hidden="true"></span><strong>In testing</strong><small>Video analysis fixes are complete. I am testing the full workflow.</small></p>
      <a class="showcase-link" href="{{ '/en/projects/youtube-hunter/' | relative_url }}">See how it works <span aria-hidden="true">→</span></a>
    </div>
    <figure class="showcase-art hunter-showcase-art"><img src="{{ '/assets/projects/youtube-hunter/list.png' | relative_url }}" alt="YouTube Hunter interface concept with a list of videos to review" width="1448" height="1086" fetchpriority="high" decoding="async"><figcaption>Illustration of the app interface</figcaption></figure>
  </article>

  <article class="showcase-project showcase-project-writing">
    <div class="showcase-copy">
      <span class="showcase-type">Mobile app</span>
      <h2>AI Writing <span>Assistant</span></h2>
      <p class="showcase-lead">Clearer messages in less time</p>
      <p>Dictate messages, fix speech recognition errors, and translate text at the keyboard in different apps.</p>
      <p class="showcase-status"><span aria-hidden="true"></span><strong>Page under construction</strong><small>I am refining the project and its presentation.</small></p>
      <a class="showcase-link" href="{{ '/en/projects/writing-assistant-android/' | relative_url }}">Check page status <span aria-hidden="true">→</span></a>
    </div>
    <figure class="showcase-art">
      <img src="{{ '/assets/projects/writing-assistant-android/list.png' | relative_url }}" alt="AI Writing Assistant phone concept with tools for editing and translating text" loading="lazy" width="1448" height="1086" decoding="async">
    </figure>
  </article>

  <article class="showcase-project showcase-project-smoke-free">
    <div class="showcase-copy">
      <span class="showcase-type">Mobile site</span>
      <h2>Dzisiaj <span>nie palę</span></h2>
      <p class="showcase-lead">A simple way to quit smoking</p>
      <p>A mobile site with motivational materials to turn to during difficult moments and help stay smoke free.</p>
      <p class="showcase-status"><span aria-hidden="true"></span><strong>Site in progress</strong><small>I am preparing the materials and project presentation.</small></p>
      <a class="showcase-link" href="{{ '/en/projects/dzisiaj-nie-pale/' | relative_url }}">Explore the idea <span aria-hidden="true">→</span></a>
    </div>
    <figure class="showcase-art showcase-art-smoke-free"><img src="{{ '/assets/projects/dzisiaj-nie-pale/list.png' | relative_url }}" alt="Dzisiaj nie palę mobile site concept with motivational reading" loading="lazy" width="1448" height="1086" decoding="async"></figure>
  </article>

  <article class="showcase-project showcase-project-lingua">
    <div class="showcase-copy">
      <span class="showcase-type">Mobile app</span>
      <h2>Lingua<span>Pilot</span></h2>
      <p class="showcase-lead">AI flashcards for everyday situations</p>
      <p>Create your own flashcard sets and learn languages in short sessions built around real situations.</p>
      <p class="showcase-status"><span aria-hidden="true"></span><strong>Page under construction</strong><small>I am refining the project and its presentation.</small></p>
      <a class="showcase-link" href="{{ '/en/projects/lingua-pilot/' | relative_url }}">Check page status <span aria-hidden="true">→</span></a>
    </div>
    <figure class="showcase-art">
      <img src="{{ '/assets/images/projects-linguapilot-showcase.webp' | relative_url }}" srcset="{{ '/assets/images/projects-linguapilot-showcase-724.webp' | relative_url }} 724w, {{ '/assets/images/projects-linguapilot-showcase.webp' | relative_url }} 1448w" sizes="(max-width: 760px) 100vw, 720px" alt="Three LinguaPilot screens for practice, the home screen, and creating flashcards" width="1448" height="1086" loading="lazy" decoding="async">
    </figure>
  </article>

  <article class="showcase-project showcase-project-finance">
    <div class="showcase-copy">
      <span class="showcase-type">Windows app</span>
      <h2>Finance <span>Manager</span></h2>
      <p class="showcase-lead">Financial data that supports better decisions</p>
      <p>One private place for tracking transactions, budgets, savings, and the real profitability of side projects.</p>
      <p class="showcase-status"><span aria-hidden="true"></span><strong>Page under construction</strong><small>I am refining the project and its presentation.</small></p>
      <a class="showcase-link" href="{{ '/en/projects/finance-manager/' | relative_url }}">Check page status <span aria-hidden="true">→</span></a>
    </div>
    <figure class="showcase-art">
      <img src="{{ '/assets/projects/finance-manager/finance-manager-list.png' | relative_url }}" alt="Finance Manager concept with a financial dashboard, monthly budget, and savings goal" loading="lazy" width="1000" height="1000" decoding="async">
    </figure>
  </article>

  <aside class="projects-upcoming" aria-label="More projects coming soon">
    <span class="projects-upcoming-icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M12 2.75 21.25 12 12 21.25 2.75 12 12 2.75Zm0 3.54L6.29 12 12 17.71 17.71 12 12 6.29Z"/></svg></span>
    <div><h2>More projects coming soon</h2><p>I will add more apps and tools when they are ready to be presented publicly.</p></div>
    <span class="projects-question" aria-hidden="true">?</span>
  </aside>
  {% include project-access-note.html %}
</section>
