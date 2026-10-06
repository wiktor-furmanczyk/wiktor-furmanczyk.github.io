---
layout: default
title: Projekty
description: Opisy projektów VeltoWeb. LinguaPilot, AI Writing Assistant i Finance Manager wraz z technologiami i aktualnym etapem prac.
permalink: /projects/
body_class: projects-page
image: /assets/images/veltoweb-og.jpg
image_alt: Logo VeltoWeb na granatowym, neonowym tle
---

<header class="projects-hero section-shell">
  <p class="eyebrow"><span></span> Portfolio VeltoWeb</p>
  <h1>Projekty</h1>
  <p>Poznaj aplikacje, które samodzielnie zaprojektowałem i stworzyłem, od pierwszego pomysłu po działające rozwiązanie.</p>
</header>

<section class="projects-showcase section-shell" aria-label="Lista projektów">
  <article class="showcase-project showcase-project-lingua">
    <div class="showcase-copy">
      <span class="showcase-type">Aplikacja mobilna</span>
      <h2>Lingua<span>Pilot</span></h2>
      <p class="showcase-lead">Fiszki AI na każdą sytuację</p>
      <p>Twórz własne zestawy fiszek i ucz się języków w krótkich sesjach dopasowanych do codziennych sytuacji.</p>
      <div class="showcase-tags" aria-label="Technologie projektu">
        <span>Kotlin</span><span>Jetpack Compose</span>
      </div>
      <p class="showcase-status"><span aria-hidden="true"></span><strong>W przygotowaniu do Google Play</strong><small>Obecnie korzystam z aplikacji na własny użytek i dopracowuję ją przed planowaną publikacją w Google Play.</small></p>
      <a class="showcase-link" href="{{ '/projects/lingua-pilot/' | relative_url }}">Zobacz, jak działa <span aria-hidden="true">→</span></a>
    </div>
    <figure class="showcase-art">
      <img src="{{ '/assets/images/projects-linguapilot-showcase.webp' | relative_url }}" srcset="{{ '/assets/images/projects-linguapilot-showcase-724.webp' | relative_url }} 724w, {{ '/assets/images/projects-linguapilot-showcase.webp' | relative_url }} 1448w" sizes="(max-width: 760px) 100vw, 720px" alt="Trzy ekrany aplikacji LinguaPilot: ćwiczenie, ekran główny i tworzenie zestawu fiszek" width="1448" height="1086" fetchpriority="high" decoding="async">
    </figure>
  </article>

  <article class="showcase-project showcase-project-writing">
    <div class="showcase-copy">
      <span class="showcase-type">Aplikacja mobilna</span>
      <h2>AI Writing <span>Assistant</span></h2>
      <p class="showcase-lead">Lepsze wiadomości w kilka sekund</p>
      <p>Dyktuj wiadomości, poprawiaj rozpoznany tekst i tłumacz go przy klawiaturze w różnych aplikacjach.</p>
      <div class="showcase-tags" aria-label="Technologie projektu">
        <span>Kotlin</span><span>Jetpack Compose</span>
      </div>
      <p class="showcase-status"><span aria-hidden="true"></span><strong>Do użytku własnego</strong><small>Aplikację stworzyłem do własnego użytku i nadal rozwijam ją o nowe funkcje oraz usprawnienia.</small></p>
      <a class="showcase-link" href="{{ '/projects/writing-assistant-android/' | relative_url }}">Zobacz, jak działa <span aria-hidden="true">→</span></a>
    </div>
    <figure class="showcase-art">
      <img src="{{ '/assets/images/projects-writing-showcase.webp' | relative_url }}" srcset="{{ '/assets/images/projects-writing-showcase-724.webp' | relative_url }} 724w, {{ '/assets/images/projects-writing-showcase.webp' | relative_url }} 1448w" sizes="(max-width: 760px) 100vw, 720px" alt="AI Writing Assistant działający przy klawiaturze oraz widoki poprawiania i tłumaczenia wiadomości" loading="lazy" width="1448" height="1086" decoding="async">
    </figure>
  </article>

  <article class="showcase-project showcase-project-finance">
    <div class="showcase-copy">
      <span class="showcase-type">Aplikacja desktopowa</span>
      <h2>Finance <span>Manager</span></h2>
      <p class="showcase-lead">Finanse, które pomagają podejmować decyzje</p>
      <p>Jedno prywatne miejsce do kontroli transakcji, budżetów, oszczędności oraz opłacalności dodatkowych zleceń.</p>
      <div class="showcase-tags" aria-label="Obszary projektu">
        <span>Finanse</span><span>Automatyzacje</span><span>AI</span>
      </div>
      <p class="showcase-status"><span aria-hidden="true"></span><strong>Analiza potrzeb i wymagań</strong><small>Trwa porządkowanie wymagań. Następne etapy to projekt architektury, import transakcji i automatyczna kategoryzacja.</small></p>
      <a class="showcase-link" href="{{ '/projects/finance-manager/' | relative_url }}">Poznaj założenia <span aria-hidden="true">→</span></a>
    </div>
    <figure class="showcase-art">
      <img src="{{ '/assets/projects/finance-manager/finance-manager-list.png' | relative_url }}" alt="Wizualizacja Finance Manager z pulpitem finansowym, budżetem miesięcznym i celem oszczędnościowym" loading="lazy" width="1000" height="1000" decoding="async">
    </figure>
  </article>

  <aside class="projects-upcoming" aria-label="Więcej projektów wkrótce">
    <span class="projects-upcoming-icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M12 2.75 21.25 12 12 21.25 2.75 12 12 2.75Zm0 3.54L6.29 12 12 17.71 17.71 12 12 6.29Z"/></svg></span>
    <div><h2>Więcej projektów wkrótce</h2><p>Kolejne aplikacje i narzędzia dodam, gdy będą gotowe do publicznej prezentacji.</p></div>
    <span class="projects-question" aria-hidden="true">?</span>
  </aside>
</section>
