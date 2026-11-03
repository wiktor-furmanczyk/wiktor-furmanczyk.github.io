---
layout: default
title: Projekty
description: Projekty VeltoWeb, w tym LinguaPilot, AI Writing Assistant, Finance Manager, YouTube Hunter i Dzisiaj nie palę.
permalink: /projects/
body_class: projects-page
image: /assets/images/veltoweb-og.jpg
image_alt: Logo VeltoWeb na granatowym, neonowym tle
---

<header class="projects-hero section-shell">
  <p class="eyebrow"><span></span> Portfolio VeltoWeb</p>
  <h1>Projekty</h1>
  <p>Poznaj problemy, które zauważyłem, narzędzia stworzone w odpowiedzi na nie oraz obecny etap każdego projektu.</p>
</header>

<section class="projects-showcase section-shell" aria-label="Lista projektów">
  <article class="showcase-project showcase-project-hunter">
    <div class="showcase-copy">
      <span class="showcase-type">Aplikacja Windows</span>
      <h2>YouTube <span>Hunter</span></h2>
      <p class="showcase-lead">Filmy warte sprawdzenia, decyzje w jednym miejscu</p>
      <p>Ustal temat i kryteria, przejrzyj kandydatów z przesłankami wyboru, a potem zapisz własną ocenę.</p>
      <p class="showcase-status"><span aria-hidden="true"></span><strong>W fazie testów</strong><small>Poprawki analizy filmów są gotowe. Testuję teraz pełny przebieg pracy.</small></p>
      <a class="showcase-link" href="{{ '/projects/youtube-hunter/' | relative_url }}">Zobacz, jak działa <span aria-hidden="true">→</span></a>
    </div>
    <figure class="showcase-art hunter-showcase-art"><img src="{{ '/assets/projects/youtube-hunter/list.webp' | relative_url }}" alt="Wizualizacja interfejsu YouTube Hunter z listą filmów do oceny" width="1448" height="1086" fetchpriority="high" decoding="async"></figure>
  </article>

  <article class="showcase-project showcase-project-writing">
    <div class="showcase-copy">
      <span class="showcase-type">Aplikacja mobilna</span>
      <h2>AI Writing <span>Assistant</span></h2>
      <p class="showcase-lead">Lepsze wiadomości w kilka sekund</p>
      <p>Dyktuj wiadomości, poprawiaj rozpoznany tekst i tłumacz go przy klawiaturze w różnych aplikacjach.</p>
      <p class="showcase-status"><span aria-hidden="true"></span><strong>W fazie testów</strong><small>Interfejs, tryby poprawy i odsłuch nagrań są gotowe. Testuję nowe funkcje.</small></p>
      <a class="showcase-link" href="{{ '/projects/writing-assistant-android/' | relative_url }}">Poznaj projekt <span aria-hidden="true">→</span></a>
    </div>
    <figure class="showcase-art">
      <img src="{{ '/assets/projects/writing-assistant-android/list.webp' | relative_url }}" alt="Wizualizacja AI Writing Assistant na telefonie z narzędziami do poprawiania i tłumaczenia tekstu" loading="lazy" width="1448" height="1086" decoding="async">
    </figure>
  </article>

  <article class="showcase-project showcase-project-smoke-free">
    <div class="showcase-copy">
      <span class="showcase-type">Strona mobilna</span>
      <h2>Dzisiaj <span>nie palę</span></h2>
      <p class="showcase-lead">Prosta metoda jak rzucić palenie</p>
      <p>Mobilna strona z materiałami motywującymi, które pomagają wytrwać bez papierosa w słabszej chwili.</p>
      <p class="showcase-status"><span aria-hidden="true"></span><strong>Strona w przygotowaniu</strong><small>Przygotowuję materiały i prezentację projektu.</small></p>
      <a class="showcase-link" href="{{ '/projects/dzisiaj-nie-pale/' | relative_url }}">Poznaj pomysł <span aria-hidden="true">→</span></a>
    </div>
    <figure class="showcase-art showcase-art-smoke-free"><img src="{{ '/assets/projects/dzisiaj-nie-pale/list.webp' | relative_url }}" alt="Wizualizacja mobilnej strony Dzisiaj nie palę z materiałami motywującymi" loading="lazy" width="1448" height="1086" decoding="async"></figure>
  </article>

  <article class="showcase-project showcase-project-lingua">
    <div class="showcase-copy">
      <span class="showcase-type">Aplikacja mobilna</span>
      <h2>Lingua<span>Pilot</span></h2>
      <p class="showcase-lead">Fiszki AI na każdą sytuację</p>
      <p>Twórz własne zestawy fiszek i ucz się języków w krótkich sesjach dopasowanych do codziennych sytuacji.</p>
      <p class="showcase-status"><span aria-hidden="true"></span><strong>Strona w przygotowaniu</strong><small>Dopracowuję projekt i jego prezentację.</small></p>
      <a class="showcase-link" href="{{ '/projects/lingua-pilot/' | relative_url }}">Sprawdź status strony <span aria-hidden="true">→</span></a>
    </div>
    <figure class="showcase-art">
      <img src="{{ '/assets/images/projects-linguapilot-showcase.webp' | relative_url }}" srcset="{{ '/assets/images/projects-linguapilot-showcase-724.webp' | relative_url }} 724w, {{ '/assets/images/projects-linguapilot-showcase.webp' | relative_url }} 1448w" sizes="(max-width: 760px) 100vw, 720px" alt="Trzy ekrany aplikacji LinguaPilot: ćwiczenie, ekran główny i tworzenie zestawu fiszek" width="1448" height="1086" loading="lazy" decoding="async">
    </figure>
  </article>

  <article class="showcase-project showcase-project-finance">
    <div class="showcase-copy">
      <span class="showcase-type">Aplikacja Windows</span>
      <h2>Finance <span>Manager</span></h2>
      <p class="showcase-lead">Finanse, które pomagają podejmować decyzje</p>
      <p>Jedno prywatne miejsce do kontroli transakcji, budżetów, oszczędności oraz opłacalności dodatkowych zleceń.</p>
      <p class="showcase-status"><span aria-hidden="true"></span><strong>Strona w przygotowaniu</strong><small>Dopracowuję projekt i jego prezentację.</small></p>
      <a class="showcase-link" href="{{ '/projects/finance-manager/' | relative_url }}">Sprawdź status strony <span aria-hidden="true">→</span></a>
    </div>
    <figure class="showcase-art">
      <img src="{{ '/assets/projects/finance-manager/finance-manager-list.webp' | relative_url }}" alt="Wizualizacja Finance Manager z pulpitem finansowym, budżetem miesięcznym i celem oszczędnościowym" loading="lazy" width="1000" height="1000" decoding="async">
    </figure>
  </article>

  {% include project-access-note.html %}
</section>
