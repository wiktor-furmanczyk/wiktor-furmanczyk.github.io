---
layout: project
title: YouTube Hunter
description: Aplikacja Windows, która porządkuje wyszukiwanie filmów, pokazuje kandydatów do sprawdzenia i zapisuje ręczne oceny.
permalink: /projects/youtube-hunter/
body_class: project-body hunter-project
image: /assets/images/veltoweb-og.jpg
image_alt: Logo VeltoWeb na granatowym tle
---

<section class="product-hero hunter-hero section-shell" aria-labelledby="product-title">
  <div class="product-copy">
    <p class="product-eyebrow"><span aria-hidden="true"></span> Portfolio / YouTube Hunter</p>
    <h1 id="product-title">YouTube <span class="text-gradient">Hunter</span></h1>
    <p class="product-lead">Mniej przypadkowego przeglądania, więcej świadomych decyzji.</p>
    <p class="product-description">Szukanie konkretnego materiału często kończy się długą listą podobnych filmów. Zbudowałem YouTube Hunter, aby zebrać kryteria wyszukiwania, kandydatów do obejrzenia i historię własnych ocen w jednym miejscu. Aplikacja pomaga wybrać, od czego zacząć, a ostateczną decyzję pozostawia użytkownikowi.</p>
    <p class="project-role">Moja rola: rozpoznanie problemu we własnej pracy, określenie zakresu, projekt doświadczenia użytkownika, zbudowanie aplikacji i dalsze doskonalenie.</p>
    <div class="tag-row product-tags" aria-label="Obszary projektu"><span>Aplikacja Windows</span><span>Wyszukiwanie</span><span>Organizacja pracy</span></div>
    <div class="button-row product-actions">
      <a class="button button-primary" href="#problemy">Poznaj problem <span aria-hidden="true">↓</span></a>
      <a class="button button-secondary" href="#status">Etapy rozwoju <span aria-hidden="true">↓</span></a>
    </div>
  </div>
  <figure class="hunter-hero-visual">
    {% include youtube-hunter-preview.html %}
    <figcaption>Wizualizacja sposobu pracy, bez danych z rzeczywistych poszukiwań.</figcaption>
  </figure>
</section>

<div class="product-content section-shell hunter-content">
  <section id="problemy" class="finance-features" aria-labelledby="features-title">
    <div class="finance-features-heading">
      <p class="section-kicker">Problemy do rozwiązania</p>
      <h2 id="features-title">Co utrudnia znalezienie właściwego filmu</h2>
      <p>Wynik wyszukiwania to dopiero kandydat. Trzeba go jeszcze sprawdzić i zapamiętać podjętą decyzję.</p>
    </div>
    <ul class="finance-feature-list writing-problem-list">
      <li><span aria-hidden="true">01</span><div class="problem-response-copy"><h3>Za dużo podobnych wyników</h3><p class="problem-statement">Ogólne wyszukiwanie zwraca wiele filmów tylko luźno związanych z tematem.</p><p class="solution-statement">Frazy i filtry pomagają zawęzić listę kandydatów.</p></div></li>
      <li><span aria-hidden="true">02</span><div class="problem-response-copy"><h3>Niepewna zawartość filmu</h3><p class="problem-statement">Obiecujący tytuł nie potwierdza, że nagranie zawiera potrzebny fragment.</p><p class="solution-statement">Aplikacja pokazuje przesłanki, a ocenę pozostawia użytkownikowi.</p></div></li>
      <li><span aria-hidden="true">03</span><div class="problem-response-copy"><h3>Powtarzanie pracy</h3><p class="problem-statement">Po przerwie trudno pamiętać, które filmy zostały już sprawdzone.</p><p class="solution-statement">Historia i zapisane oceny pozwalają wrócić do wcześniejszych decyzji.</p></div></li>
      <li><span aria-hidden="true">04</span><div class="problem-response-copy"><h3>Różne tematy i języki</h3><p class="problem-statement">Jeden zestaw fraz nie pasuje do wszystkich poszukiwań.</p><p class="solution-statement">Edytowalne profile porządkują kryteria dla poszczególnych tematów.</p></div></li>
    </ul>
  </section>

  <section class="video-section" aria-labelledby="video-title">
    <div class="video-copy"><p class="section-kicker">Prezentacja działania</p><h2 id="video-title">Wyszukiwanie, przegląd, decyzja</h2><p>Przygotuję krótkie nagranie pokazujące pełny przebieg pracy w aplikacji.</p></div>
    <div class="video-device video-device--monitor" data-video-slot="youtube-hunter">
      <div class="video-screen video-screen--pending">
        {% include youtube-hunter-preview.html %}
        <span class="video-pending">Wkrótce nagranie</span>
      </div>
    </div>
  </section>

  <section id="status" class="project-progress" aria-labelledby="status-title">
    <div class="project-progress-intro"><p class="section-kicker">Postęp projektu</p><h2 id="status-title">Etapy <span class="text-gradient">rozwoju projektu</span></h2><p>Sprawdź, co już zostało zrobione, nad czym pracuję i jakie są kolejne kroki.</p></div>
    <div class="project-status-bar"><div class="project-status-heading"><span class="project-status-indicator" aria-hidden="true"></span><div><p class="section-kicker">Aktualny etap</p><h3>Działa do własnego użytku</h3></div></div><p>Pierwsza działająca wersja powstała 16 października 2026. Planuję dalsze testy, poprawki błędów analizy filmów i sprawdzenie innych metod zbierania danych z YouTube.</p></div>
    <ol class="milestone-list">
      <li class="milestone--done"><span class="milestone-number">01</span><strong>Problem i zakres</strong><small>Zrobione</small></li>
      <li class="milestone--done"><span class="milestone-number">02</span><strong>Działający obieg pracy</strong><small>Zrobione</small></li>
      <li class="milestone--done"><span class="milestone-number">03</span><strong>Profile tematyczne</strong><small>Zrobione</small></li>
      <li class="milestone--done"><span class="milestone-number">04</span><strong>Osobne obszary pracy</strong><small>Zrobione</small></li>
      <li class="milestone--current"><span class="milestone-number">05</span><strong>Wygoda i jakość wyników</strong><small>W trakcie</small></li>
    </ol>
    <a class="text-link milestone-link" href="{{ '/roadmap/#roadmap-hunter' | relative_url }}">Zobacz plan na roadmapie <span aria-hidden="true">→</span></a>
  </section>
</div>
