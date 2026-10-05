---
layout: default
title: Wiktor Furmańczyk
description: Portfolio VeltoWeb — aplikacje mobilne i desktopowe, rozszerzenia, narzędzia webowe, automatyzacje i integracje AI.
permalink: /
body_class: home-page
image: /assets/images/veltoweb-og.jpg
image_alt: Logo VeltoWeb na granatowym, neonowym tle
---

<section class="hero section-shell" aria-labelledby="hero-title">
  <div class="hero-copy">
    <p class="eyebrow"><span></span> Witam na moim portfolio</p>
    <h1 id="hero-title">Wiktor <span class="text-gradient">Furmańczyk</span></h1>
    <p class="hero-lead">Projektuję i rozwijam praktyczne produkty cyfrowe</p>
    <p class="hero-description">Od aplikacji mobilnych i desktopowych po narzędzia webowe, automatyzacje i integracje AI — tworzę rozwiązania, które upraszczają codzienną pracę.</p>
    <div class="button-row">
      <a class="button button-primary" href="{{ '/projects/' | relative_url }}">Zobacz projekty <span aria-hidden="true">→</span></a>
      <a class="button button-secondary" href="https://github.com/wiktor-furmanczyk" target="_blank" rel="noopener noreferrer">
        <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 .7A11.5 11.5 0 0 0 8.36 23.1c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.57-.29-5.27-1.28-5.27-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.16 1.18A10.98 10.98 0 0 1 12 6.1c.98 0 1.95.13 2.87.39 2.19-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.71 5.39-5.29 5.68.42.36.79 1.06.79 2.14v3.27c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z"/></svg>
        GitHub <span aria-hidden="true">↗</span>
      </a>
    </div>
  </div>

  <figure class="hero-art">
    <img src="{{ '/assets/images/hero-devices.png' | relative_url }}" alt="Laptop z portfolio VeltoWeb oraz telefon z aplikacją LinguaPilot" width="1448" height="1086">
  </figure>
</section>

<section class="expertise-strip section-shell" aria-label="Obszary działania">
  <div><img src="{{ '/assets/images/expertise-mobile.png' | relative_url }}" alt="" aria-hidden="true" width="256" height="256">Aplikacje mobilne</div>
  <div><img src="{{ '/assets/images/expertise-desktop.png' | relative_url }}" alt="" aria-hidden="true" width="256" height="256">Aplikacje desktopowe</div>
  <div><img src="{{ '/assets/images/expertise-extension.png' | relative_url }}" alt="" aria-hidden="true" width="256" height="256">Rozszerzenia Chrome</div>
  <div><img src="{{ '/assets/images/expertise-web.png' | relative_url }}" alt="" aria-hidden="true" width="256" height="256">Narzędzia webowe</div>
  <div><img src="{{ '/assets/images/expertise-automation.png' | relative_url }}" alt="" aria-hidden="true" width="256" height="256">Automatyzacje</div>
  <div><img src="{{ '/assets/images/expertise-ai.png' | relative_url }}" alt="" aria-hidden="true" width="256" height="256">AI i integracje</div>
</section>

<section id="projekty" class="projects-section section-shell" aria-labelledby="projects-title">
  <div class="section-heading">
    <div>
      <p class="section-kicker">Realne projekty</p>
      <h2 id="projects-title">Moje <span class="text-gradient">projekty</span></h2>
      <p>Wybrane produkty tworzone od pomysłu po działający prototyp.</p>
    </div>
    <a class="text-link projects-desktop-link" href="{{ '/projects/' | relative_url }}">Zobacz wszystkie projekty <span aria-hidden="true">→</span></a>
  </div>

  <div class="project-grid">
    <article class="project-card project-card-featured">
      <div class="project-card-visual">
        <img class="project-card-image" src="{{ '/assets/images/project-linguapilot.jpg' | relative_url }}" alt="Ekrany aplikacji LinguaPilot do tworzenia fiszek i nauki słownictwa" loading="lazy" width="1200" height="900">
      </div>
      <div class="project-card-body">
        <div class="card-meta-row"><span class="status-badge">W przygotowaniu do Google Play</span></div>
        <h3>LinguaPilot</h3>
        <p>Ucz się języków w krótkich sesjach z fiszkami dopasowanymi do Twojego celu.</p>
        <div class="tag-row" aria-label="Typ i technologie projektu"><span>Aplikacja mobilna</span><span>Kotlin</span><span>Jetpack Compose</span></div>
        <a class="card-link" href="{{ '/projects/lingua-pilot/' | relative_url }}">Zobacz case study <span aria-hidden="true">→</span></a>
      </div>
    </article>

    <article class="project-card">
      <div class="project-card-visual">
        <img class="project-card-image" src="{{ '/assets/images/project-writing-assistant.jpg' | relative_url }}" alt="Interfejs AI Writing Assistant z funkcjami poprawiania, przeredagowywania i tłumaczenia tekstu" loading="lazy" width="1200" height="900">
      </div>
      <div class="project-card-body">
        <div class="card-meta-row"><span class="status-badge status-violet">Do użytku własnego</span></div>
        <h3>AI Writing Assistant</h3>
        <p>Dyktuj, poprawiaj i tłumacz wiadomości przy klawiaturze w różnych aplikacjach.</p>
        <div class="tag-row" aria-label="Typ i technologie projektu"><span>Aplikacja mobilna</span><span>Kotlin</span><span>Jetpack Compose</span></div>
        <a class="card-link" href="{{ '/projects/writing-assistant-android/' | relative_url }}">Zobacz case study <span aria-hidden="true">→</span></a>
      </div>
    </article>

    <article class="project-card project-card-upcoming">
      <div class="upcoming-visual">
        <img class="project-card-image" src="{{ '/assets/images/project-upcoming.jpg' | relative_url }}" alt="" loading="lazy" width="1200" height="751">
      </div>
      <div class="project-card-body">
        <span class="status-badge status-muted">W przygotowaniu</span>
        <h3>Więcej projektów wkrótce</h3>
        <p>Kolejne własne narzędzia i eksperymenty pojawią się tutaj, gdy będą gotowe do publicznej prezentacji.</p>
        <a class="card-link" href="https://github.com/wiktor-furmanczyk" target="_blank" rel="noopener noreferrer">Obserwuj na GitHubie <span aria-hidden="true">↗</span></a>
      </div>
    </article>
  </div>
  <a class="text-link projects-mobile-link" href="{{ '/projects/' | relative_url }}">Zobacz wszystkie projekty <span aria-hidden="true">→</span></a>
</section>

<section id="blog" class="blog-section section-shell" aria-labelledby="blog-title">
  <a class="blog-art" href="https://www.facebook.com/VeltoWeb" target="_blank" rel="noopener noreferrer" aria-label="Odwiedź blog VeltoWeb na Facebooku (otwiera się w nowej karcie)">
    <img src="{{ '/assets/images/veltoweb-blog-showcase.png' | relative_url }}" alt="Wizualizacja bloga VeltoWeb z wpisami o LinguaPilot, automatyzacji z AI i rozwoju portfolio" loading="lazy" width="1448" height="1086">
  </a>

  <div class="blog-copy">
    <p class="section-kicker">Blog VeltoWeb</p>
    <h2 id="blog-title">Kulisy pracy i rozwój <span class="text-gradient">projektów</span></h2>
    <p>Na VeltoWeb dzielę się postępami prac, pomysłami, eksperymentami i krótkimi wnioskami z rozwijania własnych projektów. Pokazuję, nad czym aktualnie pracuję i jak moje rozwiązania powstają krok po kroku.</p>
    <div class="blog-topics" aria-label="Tematy bloga">
      <span><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 20V10m7 10V4m7 16v-7"/></svg>Rozwój</span>
      <span><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M9 18h6m-5 3h4M8.5 14.5a7 7 0 1 1 7 0c-.9.6-1.5 1.4-1.5 2.5h-4c0-1.1-.6-1.9-1.5-2.5Z"/></svg>Projekty</span>
      <span><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0-5v2m0 14v2M3 12h2m14 0h2M5.6 5.6 7 7m10 10 1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4"/></svg>Kulisy pracy</span>
    </div>
  </div>
  <a class="button button-primary blog-cta" href="https://www.facebook.com/VeltoWeb" target="_blank" rel="noopener noreferrer">Odwiedź VeltoWeb na Facebooku <span aria-hidden="true">↗</span></a>
</section>
