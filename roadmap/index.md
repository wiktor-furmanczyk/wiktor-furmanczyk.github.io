---
layout: default
title: Plany, postępy i zmiany
description: Roadmapa projektów VeltoWeb oraz historia najważniejszych zmian w LinguaPilot, AI Writing Assistant i rozwijanych narzędziach.
permalink: /roadmap/
body_class: roadmap-page
image: /assets/images/portfolio-og.png
image_alt: VeltoWeb - roadmapa projektów i historia zmian
---

<header class="roadmap-hero section-shell">
  <p class="eyebrow"><span></span> Rozwój projektów</p>
  <h1>Plany, postępy i <span class="text-gradient">zmiany</span></h1>
  <p>Tutaj znajdziesz roadmapę moich projektów oraz historię najważniejszych zmian. Regularnie aktualizuję tę stronę, aby pokazać, nad czym pracuję i jak projekty się rozwijają.</p>
  <nav class="roadmap-tabs" aria-label="Sekcje strony">
    <a class="roadmap-tab is-active" href="#roadmap" aria-current="location"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"/></svg>Roadmap</a>
    <a class="roadmap-tab" href="#changelog"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 7v5l3 2m6-2a9 9 0 1 1-9-9 9 9 0 0 1 9 9Z"/></svg>Changelog</a>
  </nav>
</header>

<div class="roadmap-layout section-shell">
  <aside class="roadmap-periods" aria-label="Okres changelogu">
    <strong>2026</strong>
    <a class="is-current" href="#zmiany-pazdziernik" aria-current="date">Październik</a>
    <a href="#zmiany-wrzesien">Wrzesień</a>
    <span class="roadmap-older">Starsze</span>
  </aside>

  <div class="roadmap-main">
    <section id="roadmap" class="roadmap-section" aria-labelledby="roadmap-title">
      <div class="roadmap-section-heading">
        <h2 id="roadmap-title">Roadmap</h2>
        <p>Najbliższe plany i kierunki rozwoju projektów.</p>
      </div>

      <div class="roadmap-projects">
        <article class="roadmap-project">
          <div class="roadmap-project-intro">
            <div><h3><a href="{{ '/projects/lingua-pilot/' | relative_url }}">Lingua<span>Pilot</span></a></h3><p>Nauka języków w krótkich sesjach dopasowanych do bieżących potrzeb.</p><div class="roadmap-tags"><span>Aplikacja mobilna</span><span>Android</span><span>Kotlin</span></div></div>
          </div>
          <ul class="roadmap-tasks">
            <li class="is-progress"><span>Optymalizacja kosztów generowania fiszek dla wielu użytkowników</span><em>W trakcie</em></li>
            <li class="is-progress"><span>Baza poznanych fiszek, która zapobiega powtórzeniom, oraz krótsze polecenia dla AI obniżające koszt generowania nowych materiałów</span><em>W trakcie</em></li>
            <li><span>System nagród i ranking</span><em>Planowane</em></li>
            <li><span>Nowe tryby nauki</span><em>Planowane</em></li>
          </ul>
        </article>

        <article class="roadmap-project">
          <div class="roadmap-project-intro">
            <div><h3><a href="{{ '/projects/writing-assistant-android/' | relative_url }}">AI Writing Assistant</a></h3><p>Narzędzie do pisania, poprawiania i tłumaczenia tekstów z wykorzystaniem AI.</p><div class="roadmap-tags"><span>Aplikacja mobilna</span><span>AI</span><span>Produktywność</span></div></div>
          </div>
          <ul class="roadmap-tasks">
            <li class="is-progress"><span>Przebudowa interfejsu</span><em>W trakcie</em></li>
            <li class="is-progress"><span>Więcej trybów poprawy</span><em>W trakcie</em></li>
            <li class="is-progress"><span>Więcej języków</span><em>W trakcie</em></li>
            <li class="is-progress"><span>Lepsza kompatybilność z aplikacjami</span><em>W trakcie</em></li>
          </ul>
        </article>

        <article class="roadmap-project">
          <div class="roadmap-project-intro">
            <div><h3><a href="{{ '/projects/finance-manager/' | relative_url }}">Finance Manager</a></h3><p>Narzędzie do zarządzania finansami i analizy wydatków.</p><div class="roadmap-tags"><span>Aplikacja desktopowa</span><span>Finanse</span><span>Automatyzacje</span></div></div>
          </div>
          <ul class="roadmap-tasks">
            <li class="is-progress"><span>Analiza potrzeb i wymagań</span><em>W trakcie</em></li>
            <li><span>Dobór technologii</span><em>Planowane</em></li>
            <li><span>Projekt architektury systemu</span><em>Planowane</em></li>
            <li><span>Import transakcji</span><em>Planowane</em></li>
            <li><span>Automatyczna kategoryzacja</span><em>Planowane</em></li>
          </ul>
        </article>
      </div>
    </section>

    <section id="changelog" class="roadmap-section changelog-section" aria-labelledby="changelog-title">
      <div class="roadmap-section-heading">
        <h2 id="changelog-title">Ostatnie zmiany</h2>
        <p>Najważniejsze aktualizacje w moich projektach.</p>
      </div>

      <div id="zmiany-pazdziernik" class="change-month">
        <h3>Październik 2026</h3>
        <ol class="change-list">
          <li class="is-current"><time datetime="2026-10-06">06.10.2026</time><div class="change-content"><div class="change-meta"><span class="change-project">LinguaPilot</span><span class="change-type">Optymalizacja</span></div><h4>Optymalizacja kosztów generowania fiszek</h4><p>Wprowadzono mechanizm ograniczający ponowne generowanie tych samych materiałów, co zmniejsza zużycie tokenów i obniża koszty.</p></div></li>
          <li><time datetime="2026-10-04">04.10.2026</time><div class="change-content"><div class="change-meta"><span class="change-project">LinguaPilot</span><span class="change-type">Security</span></div><h4>Zabezpieczenie kluczy API</h4><p>Dodano dodatkowe zabezpieczenia przechowywania kluczy API oraz poprawiono sposób ich obsługi w aplikacji.</p></div></li>
          <li><time datetime="2026-10-02">02.10.2026</time><div class="change-content"><div class="change-meta"><span class="change-project change-project-violet">AI Writing Assistant</span><span class="change-type">Improvement</span></div><h4>Poprawa działania w różnych aplikacjach</h4><p>Usprawniono działanie narzędzia w różnych polach tekstowych oraz poprawiono kompatybilność z popularnymi aplikacjami.</p></div></li>
        </ol>
      </div>

      <div id="zmiany-wrzesien" class="change-month">
        <h3>Wrzesień 2026</h3>
        <ol class="change-list">
          <li><time datetime="2026-09-23">23.09.2026</time><div class="change-content"><div class="change-meta"><span class="change-project">LinguaPilot</span><span class="change-type">Rozwój</span></div><h4>Dodanie większej liczby języków</h4><p>Rozszerzono plany projektu o kolejne, również mniej popularne języki, aby ułatwić naukę przed podróżą, na przykład do Włoch lub Rumunii.</p></div></li>
          <li><time datetime="2026-09-17">17.09.2026</time><div class="change-content"><div class="change-meta"><span class="change-project">Finance Manager</span><span class="change-type">Analiza</span></div><h4>Rozpoczęcie analizy potrzeb</h4><p>Rozpoczęto zbieranie i porządkowanie wymagań. Kolejnym etapem będzie dobór technologii i przygotowanie architektury systemu.</p></div></li>
          <li><time datetime="2026-09-12">12.09.2026</time><div class="change-content"><div class="change-meta"><span class="change-project change-project-violet">AI Writing Assistant</span><span class="change-type">Kompatybilność</span></div><h4>Rozwiązanie problemu z aplikacjami bankowymi</h4><p>Usunięto problem, przez który włączony AI Writing Assistant blokował przejście do aplikacji bankowej. Poprawiono współpracę narzędzia z bankowością mobilną.</p></div></li>
        </ol>
      </div>
    </section>
  </div>
</div>
