---
layout: default
title: Projekty
description: Case studies aplikacji mobilnych VeltoWeb — LinguaPilot i AI Writing Assistant, wraz z technologiami i aktualnym statusem prac.
permalink: /projects/
body_class: projects-page
image: /assets/images/veltoweb-og.jpg
image_alt: Logo VeltoWeb na granatowym, neonowym tle
---

<header class="projects-hero section-shell">
  <p class="eyebrow"><span></span> Portfolio VeltoWeb</p>
  <h1>Projekty</h1>
  <p>Publiczne case studies aplikacji tworzonych z myślą o konkretnych potrzebach użytkowników. Każdy opis jasno pokazuje problem, sposób działania i aktualny etap prac.</p>
</header>

<section class="projects-catalog section-shell" aria-label="Lista projektów">
  <article class="catalog-card">
    <div class="catalog-visual catalog-visual-lingua" role="img" aria-label="Podgląd ekranu ćwiczenia w aplikacji LinguaPilot">
      <div class="catalog-phone"><img src="{{ '/assets/projects/lingua-pilot/linguapilot-practice.jpg' | relative_url }}" alt="" loading="lazy" width="922" height="2049"></div>
    </div>
    <div class="catalog-copy">
      <div class="catalog-heading">
        <span class="icon-box" aria-hidden="true">LP</span>
        <div><p class="section-kicker">Aplikacja mobilna</p><h2>LinguaPilot</h2></div>
      </div>
      <p>Wsparcie nauki języków w krótkich sesjach dopasowanych do bieżącego tematu lub sytuacji.</p>
      <div class="tech-list" aria-label="Technologie"><span>Android</span><span>Kotlin</span><span>Jetpack Compose</span><span>Firebase</span></div>
      <p class="project-status"><strong>Status:</strong> wczesne testy i przygotowanie do publikacji w Google Play.</p>
      <a class="button button-primary" href="{{ '/projects/lingua-pilot/' | relative_url }}">Zobacz case study <span aria-hidden="true">→</span></a>
    </div>
  </article>

  <article class="catalog-card catalog-card-reverse">
    <div class="catalog-visual catalog-visual-writing" role="img" aria-label="Stylizowany podgląd narzędzi AI Writing Assistant">
      <div class="writing-window" aria-hidden="true">
        <span class="writing-label">AI Writing Assistant</span>
        <strong>Improve your text</strong>
        <span>✓ Grammar</span><span>↔ Translate</span><span>↶ Undo</span>
      </div>
    </div>
    <div class="catalog-copy">
      <div class="catalog-heading">
        <span class="icon-box" aria-hidden="true">AI</span>
        <div><p class="section-kicker">Aplikacja mobilna</p><h2>AI Writing Assistant</h2></div>
      </div>
      <p>Podręczne działania przy klawiaturze, które ułatwiają poprawianie i tłumaczenie tekstu bez ciągłego przełączania aplikacji.</p>
      <div class="tech-list" aria-label="Zakres projektu"><span>Android</span><span>AI</span><span>Produktywność</span><span>Wielojęzyczność</span></div>
      <p class="project-status"><strong>Status:</strong> projekt rozwijany i testowany; zakres może zmieniać się po kolejnych testach.</p>
      <a class="button button-primary" href="{{ '/projects/writing-assistant-android/' | relative_url }}">Zobacz case study <span aria-hidden="true">→</span></a>
    </div>
  </article>
</section>
