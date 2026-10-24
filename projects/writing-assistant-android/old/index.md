---
layout: project
title: AI Writing Assistant
description: Asystent poprawiania i tłumaczenia tekstu na Androidzie, dostępny przy klawiaturze w różnych aplikacjach.
permalink: /projects/writing-assistant-android/old/
body_class: project-body writing-project
image: /assets/images/portfolio-og.png
image_alt: Portfolio VeltoWeb prezentujące projekt AI Writing Assistant
---

<section class="product-hero writing-hero section-shell" aria-labelledby="product-title">
  <div class="product-copy">
    <p class="product-eyebrow"><span aria-hidden="true"></span> Portfolio / AI Writing Assistant</p>
    <h1 id="product-title">AI Writing <span class="text-gradient">Assistant</span></h1>
    <p class="product-lead">Dyktuj, poprawiaj i tłumacz tekst bezpośrednio przy klawiaturze.</p>
    <p class="product-description">Podyktuj wiadomość mikrofonem klawiatury, a asystent pomoże poprawić tekst rozpoznany z mowy. Możesz korzystać z tych funkcji w różnych aplikacjach, wszędzie tam, gdzie piszesz na klawiaturze Androida.</p>
    <p class="project-role">Moja rola: koncepcja, projekt interfejsu, implementacja i dalszy rozwój aplikacji.</p>
    <div class="tag-row product-tags" aria-label="Typ projektu"><span>Aplikacja mobilna</span></div>
    <div class="button-row product-actions">
      <a class="button button-primary" href="#problemy">Poznaj problem <span aria-hidden="true">↓</span></a>
      <a class="button button-secondary" href="#status">Etapy rozwoju <span aria-hidden="true">↓</span></a>
    </div>
  </div>

  <figure class="writing-hero-visual">
    <img src="{{ '/assets/projects/writing-assistant-android/hero.png' | relative_url }}" alt="Wizualizacja AI Writing Assistant z korektą, zmianą stylu i tłumaczeniem wiadomości" width="1672" height="941" fetchpriority="high" decoding="async">
  </figure>
</section>

<div class="product-content section-shell writing-content">
  <section id="problemy" class="finance-features" aria-labelledby="features-title">
    <div class="finance-features-heading">
      <p class="section-kicker">Problemy do rozwiązania</p>
      <h2 id="features-title">Co przerywa pisanie wiadomości</h2>
      <p>Problemy, które zauważyłem podczas dyktowania i poprawiania tekstu na telefonie.</p>
    </div>
    <ul class="finance-feature-list writing-problem-list">
      <li><span aria-hidden="true">01</span><div class="problem-response-copy"><h3>Przełączanie aplikacji</h3><p class="problem-statement">Poprawa wiadomości w osobnym narzędziu wymaga kopiowania tekstu tam i z powrotem.</p><p class="solution-statement">Asystent działa przy klawiaturze w aktualnie używanej aplikacji.</p></div></li>
      <li><span aria-hidden="true">02</span><div class="problem-response-copy"><h3>Błędy po dyktowaniu</h3><p class="problem-statement">Rozpoznawanie mowy zostawia błędne słowa, interpunkcję i nieczytelne zdania.</p><p class="solution-statement">Jedno działanie poprawia tekst w tym samym polu.</p></div></li>
      <li><span aria-hidden="true">03</span><div class="problem-response-copy"><h3>Powtarzanie poleceń</h3><p class="problem-statement">Za każdym razem trzeba od nowa opisywać, jak poprawić tekst.</p><p class="solution-statement">Gotowe działania pozwalają wybrać korektę, zmianę stylu lub tłumaczenie.</p></div></li>
      <li><span aria-hidden="true">04</span><div class="problem-response-copy"><h3>Mało miejsca na ekranie</h3><p class="problem-statement">Duży panel zasłania rozmowę i utrudnia ocenę poprawionej wiadomości.</p><p class="solution-statement">Prosty interfejs zostawia widoczny kontekst rozmowy.</p></div></li>
    </ul>
  </section>

  <section class="project-tech-section" aria-labelledby="tech-title">
    <div class="project-tech-heading">
      <p class="section-kicker">Technologie</p>
      <h2 id="tech-title">Technologie wykorzystane w projekcie</h2>
    </div>
    <ul class="project-tech-list" aria-label="Technologie projektu">
      <li><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7.1 7.9 5.8 5.7a.55.55 0 0 1 .95-.56L8.1 7.2a9.7 9.7 0 0 1 7.8 0l1.35-2.06a.55.55 0 1 1 .92.6l-1.27 2.15A7.8 7.8 0 0 1 20 14H4a7.8 7.8 0 0 1 3.1-6.1ZM8 10.1a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6Zm8 0a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6ZM5 15h14v3.2a2 2 0 0 1-2 2h-.8v1.1a1.2 1.2 0 0 1-2.4 0v-1.1h-3.6v1.1a1.2 1.2 0 0 1-2.4 0v-1.1H7a2 2 0 0 1-2-2V15Z"/></svg><span>Android</span></li>
      <li><svg aria-hidden="true" viewBox="0 0 24 24"><defs><linearGradient id="writing-kotlin-mark" x1="3" y1="21" x2="21" y2="3" gradientUnits="userSpaceOnUse"><stop stop-color="#E44857"/><stop offset=".48" stop-color="#7F52FF"/><stop offset="1" stop-color="#0095D5"/></linearGradient></defs><path fill="url(#writing-kotlin-mark)" d="M3 3h18L3 21V3Zm9 9h9v9H3l9-9Z"/></svg><span>Kotlin</span></li>
      <li><svg aria-hidden="true" viewBox="0 0 24 24"><path fill="#4285F4" d="m12 2 9 5.1v9.8L12 22l-9-5.1V7.1L12 2Zm0 2.5L5.2 8.3v7.4l6.8 3.9 6.8-3.9V8.3L12 4.5Z"/><path fill="#34A853" d="m12 5.1 6 3.4v6.9l-6 3.5-6-3.5V8.5l6-3.4Zm0 3-3.4 1.9v3.9l3.4 1.9 3.4-1.9V10L12 8.1Z"/><path fill="#FBBC04" d="m12 8.1 3.4 1.9v3.9L12 15.8l-3.4-1.9V10L12 8.1Z"/></svg><span>Jetpack Compose</span></li>
    </ul>
  </section>

  <section class="video-section" aria-labelledby="video-title">
    <div class="video-copy">
      <p class="section-kicker">Prezentacja działania</p>
      <h2 id="video-title">Od dyktowania do gotowej wiadomości</h2>
      <p>Przygotowuję nagranie pokazujące dyktowanie, poprawę tekstu i powrót do rozmowy.</p>
    </div>
    <div class="video-device video-device--phone" data-video-slot="writing-assistant-android">
      <div class="video-screen video-screen--pending">
        <img src="{{ '/assets/images/writing-assistant-phone.svg' | relative_url }}" alt="Przykładowy ekran AI Writing Assistant bez danych osobowych" loading="lazy">
        <span class="video-pending">Wkrótce nagranie</span>
      </div>
    </div>
  </section>

  <section id="status" class="project-progress" aria-labelledby="status-title">
    <div class="project-progress-intro"><p class="section-kicker">Postęp projektu</p><h2 id="status-title">Etapy <span class="text-gradient">rozwoju projektu</span></h2><p>Sprawdź, co już zostało zrobione, nad czym pracuję i jakie są kolejne kroki.</p></div>
    <div class="project-status-bar">
      <div class="project-status-heading"><span class="project-status-indicator" aria-hidden="true"></span><div><p class="section-kicker">Aktualny etap</p><h3>Do użytku własnego</h3></div></div>
      <p>Aplikacja działa do mojego użytku. Pracuję nad interfejsem, dodatkowymi trybami i zgodnością z innymi aplikacjami.</p>
    </div>
    <ol class="milestone-list">
      <li class="milestone--done"><span class="milestone-number">01</span><strong>Problem i koncepcja</strong><small>Zrobione</small></li>
      <li class="milestone--done"><span class="milestone-number">02</span><strong>Wersja do własnego użytku</strong><small>Zrobione</small></li>
      <li class="milestone--current"><span class="milestone-number">03</span><strong>Przebudowa interfejsu</strong><small>W trakcie</small></li>
      <li class="milestone--current"><span class="milestone-number">04</span><strong>Więcej trybów i języków</strong><small>W trakcie</small></li>
      <li class="milestone--current"><span class="milestone-number">05</span><strong>Zgodność z aplikacjami</strong><small>W trakcie</small></li>
    </ol>
    <a class="text-link milestone-link" href="{{ '/roadmap/#roadmap-writing' | relative_url }}">Zobacz plan na roadmapie <span aria-hidden="true">→</span></a>
  </section>
</div>
