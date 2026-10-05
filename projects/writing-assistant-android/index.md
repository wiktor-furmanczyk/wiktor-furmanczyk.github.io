---
layout: project
title: AI Writing Assistant
description: Asystent poprawiania i tłumaczenia tekstu na Androidzie, dostępny bezpośrednio przy klawiaturze.
permalink: /projects/writing-assistant-android/
body_class: project-body writing-project
image: /assets/images/project-writing-assistant.jpg
image_alt: AI Writing Assistant pomagający poprawiać i tłumaczyć wiadomości podczas pisania
---

<section class="product-hero writing-hero section-shell" aria-labelledby="product-title">
  <div class="product-copy">
    <p class="product-eyebrow"><span aria-hidden="true"></span> Portfolio / AI Writing Assistant</p>
    <h1 id="product-title">AI Writing <span class="text-gradient">Assistant</span></h1>
    <p class="product-lead">Podręczne wsparcie podczas pisania na Androidzie — bez ciągłego przełączania się między aplikacjami.</p>
    <p class="product-description">Poprawiaj i tłumacz wiadomości bezpośrednio przy klawiaturze. Pracuj nad tekstem w aktualnie otwartej aplikacji, zastosuj wybraną zmianę albo wróć do poprzedniej wersji.</p>
    <div class="tag-row product-tags" aria-label="Technologie">
      <span>Android</span><span>Kotlin</span><span>Jetpack Compose</span><span>Firebase</span>
    </div>
    <div class="button-row product-actions">
      <a class="button button-primary" href="https://www.facebook.com/reel/2406684763155156" target="_blank" rel="noopener noreferrer">Zobacz prezentację <span aria-hidden="true">↗</span></a>
      <a class="button button-secondary" href="#status">Aktualny etap <span aria-hidden="true">↓</span></a>
    </div>
  </div>

  <figure class="writing-hero-visual">
    <img src="{{ '/assets/images/projects-writing-showcase.png' | relative_url }}" alt="AI Writing Assistant na ekranie telefonu z przykładami korekty i tłumaczenia wiadomości" width="1448" height="1086">
  </figure>
</section>

<div class="product-content section-shell writing-content">
  <section class="problem-grid" aria-label="Problem i rozwiązanie">
    <article class="content-panel">
      <p class="section-kicker">Wyzwanie</p>
      <h2>Poprawki wymagające przełączania aplikacji</h2>
      <p>Korekta wiadomości lub przygotowanie jej w innym języku często oznacza kopiowanie tekstu do dodatkowego narzędzia, a potem powrót do miejsca, w którym się pisze.</p>
    </article>
    <article class="content-panel">
      <p class="section-kicker">Rozwiązanie</p>
      <h2>Pomoc dostępna przy klawiaturze</h2>
      <p>Asystent udostępnia podręczne działania w aktualnie otwartej aplikacji. Możesz zastosować wybraną zmianę lub szybko wrócić do poprzedniej wersji tekstu.</p>
    </article>
  </section>

  <section class="project-tech-section" aria-labelledby="tech-title">
    <div class="project-tech-heading">
      <p class="section-kicker">Technologie</p>
      <h2 id="tech-title">Aplikacja stworzona z użyciem</h2>
      <p>Technologie używane do budowy aplikacji na Androida.</p>
    </div>
    <ul class="project-tech-list" aria-label="Technologie projektu">
      <li><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7.1 7.9 5.8 5.7a.55.55 0 0 1 .95-.56L8.1 7.2a9.7 9.7 0 0 1 7.8 0l1.35-2.06a.55.55 0 1 1 .92.6l-1.27 2.15A7.8 7.8 0 0 1 20 14H4a7.8 7.8 0 0 1 3.1-6.1ZM8 10.1a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6Zm8 0a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6ZM5 15h14v3.2a2 2 0 0 1-2 2h-.8v1.1a1.2 1.2 0 0 1-2.4 0v-1.1h-3.6v1.1a1.2 1.2 0 0 1-2.4 0v-1.1H7a2 2 0 0 1-2-2V15Z"/></svg><span>Android</span></li>
      <li><svg aria-hidden="true" viewBox="0 0 24 24"><defs><linearGradient id="writing-kotlin-mark" x1="3" y1="21" x2="21" y2="3" gradientUnits="userSpaceOnUse"><stop stop-color="#E44857"/><stop offset=".48" stop-color="#7F52FF"/><stop offset="1" stop-color="#0095D5"/></linearGradient></defs><path fill="url(#writing-kotlin-mark)" d="M3 3h18L3 21V3Zm9 9h9v9H3l9-9Z"/></svg><span>Kotlin</span></li>
      <li><svg aria-hidden="true" viewBox="0 0 24 24"><path fill="#4285F4" d="m12 2 9 5.1v9.8L12 22l-9-5.1V7.1L12 2Zm0 2.5L5.2 8.3v7.4l6.8 3.9 6.8-3.9V8.3L12 4.5Z"/><path fill="#34A853" d="m12 5.1 6 3.4v6.9l-6 3.5-6-3.5V8.5l6-3.4Zm0 3-3.4 1.9v3.9l3.4 1.9 3.4-1.9V10L12 8.1Z"/><path fill="#FBBC04" d="m12 8.1 3.4 1.9v3.9L12 15.8l-3.4-1.9V10L12 8.1Z"/></svg><span>Jetpack Compose</span></li>
      <li><svg aria-hidden="true" viewBox="0 0 24 24"><path fill="#FFCA28" d="M12.8 1.5c.35 3.1-1.55 4.95-3.2 6.6-1.2 1.2-2.3 2.3-2.3 4.15 0 1.05.42 1.9 1.15 2.5-.08-1.45.65-2.45 1.55-3.4.75-.8 1.6-1.7 1.95-3.05 2.9 2.05 5.25 4.7 5.25 8.1a6.7 6.7 0 0 1-13.4 0c0-3.1 1.65-5.45 4.1-7.8 2.05-1.95 4.3-4.05 4.9-7.1Z"/><path fill="#F57C00" d="M12.2 12c-.2 1.25-.85 2-1.45 2.7-.65.75-1.25 1.45-1.25 2.6a2.5 2.5 0 0 0 5 0c0-1.85-1.05-3.55-2.3-5.3Z"/></svg><span>Firebase</span></li>
    </ul>
  </section>

  <section class="process-section project-process" aria-labelledby="process-title">
    <div class="section-heading">
      <div><p class="section-kicker">Jak to działa</p><h2 id="process-title">Trzy kroki do gotowej wiadomości</h2></div>
    </div>
    <ol class="process-steps">
      <li><span>1</span><strong>Napisz tekst</strong><small>Pracuj w aplikacji, w której tworzysz wiadomość.</small></li>
      <li><span>2</span><strong>Wybierz działanie</strong><small>Popraw tekst lub przygotuj jego tłumaczenie.</small></li>
      <li><span>3</span><strong>Zastosuj zmianę</strong><small>Użyj nowej wersji albo wróć do poprzedniego tekstu.</small></li>
    </ol>
  </section>

  <section class="writing-gallery" aria-labelledby="writing-gallery-title">
    <div class="section-heading">
      <div><p class="section-kicker">Przykładowe użycie</p><h2 id="writing-gallery-title">Wsparcie podczas pisania</h2></div>
    </div>
    <figure>
      <img src="{{ '/assets/images/project-writing-assistant.jpg' | relative_url }}" alt="Widoki AI Writing Assistant: poprawianie gramatyki, zmiana stylu wypowiedzi i tłumaczenie wiadomości" loading="lazy" width="1200" height="900">
      <figcaption>Poprawiaj i tłumacz wiadomości bez opuszczania aplikacji, w której piszesz.</figcaption>
    </figure>
  </section>

  <section id="status" class="project-status-bar" aria-labelledby="status-title">
    <div class="project-status-heading"><span class="project-status-indicator" aria-hidden="true"></span><div><p class="section-kicker">Aktualny etap</p><h2 id="status-title">Do użytku własnego</h2></div></div>
    <p>Korzystam z aplikacji prywatnie i nadal rozwijam ją o nowe pomysły oraz usprawnienia.</p>
  </section>
</div>
