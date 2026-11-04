---
layout: default
title: Projekty
description: Projekty VeltoWeb obejmują YouTube Hunter, AI Writing Assistant i Dzisiaj nie palę.
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



  {% include project-access-note.html %}
</section>
