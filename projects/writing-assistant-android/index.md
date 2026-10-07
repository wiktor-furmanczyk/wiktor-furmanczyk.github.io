---
layout: project
title: AI Writing Assistant
description: Asystent poprawiania i tłumaczenia tekstu na Androidzie, dostępny przy klawiaturze w różnych aplikacjach.
permalink: /projects/writing-assistant-android/
body_class: project-body writing-project
image: /assets/images/project-writing-assistant.jpg
image_alt: AI Writing Assistant pomagający poprawiać i tłumaczyć wiadomości podczas pisania
---

<section class="product-hero writing-hero section-shell" aria-labelledby="product-title">
  <div class="product-copy">
    <p class="product-eyebrow"><span aria-hidden="true"></span> Portfolio / AI Writing Assistant</p>
    <h1 id="product-title">AI Writing <span class="text-gradient">Assistant</span></h1>
    <p class="product-lead">Dyktuj, poprawiaj i tłumacz tekst bezpośrednio przy klawiaturze.</p>
    <p class="product-description">Podyktuj wiadomość mikrofonem klawiatury, a asystent pomoże poprawić tekst rozpoznany z mowy. Możesz korzystać z tych funkcji w różnych aplikacjach, wszędzie tam, gdzie piszesz na klawiaturze Androida.</p>
    <p class="project-role">Moja rola: koncepcja, projekt interfejsu, implementacja i dalszy rozwój aplikacji.</p>
    <div class="tag-row product-tags" aria-label="Technologie">
      <span>Android</span><span>Kotlin</span><span>Jetpack Compose</span>
    </div>
    <div class="button-row product-actions">
      <a class="button button-primary" href="https://www.facebook.com/reel/2406684763155156" target="_blank" rel="noopener noreferrer">Zobacz prezentację <span aria-hidden="true">↗</span></a>
      <a class="button button-secondary" href="#status">Aktualny etap <span aria-hidden="true">↓</span></a>
    </div>
  </div>

  <figure class="writing-hero-visual">
    <img src="{{ '/assets/images/projects-writing-showcase.webp' | relative_url }}" srcset="{{ '/assets/images/projects-writing-showcase-724.webp' | relative_url }} 724w, {{ '/assets/images/projects-writing-showcase.webp' | relative_url }} 1448w" sizes="(max-width: 760px) 100vw, 720px" alt="AI Writing Assistant na ekranie telefonu z przykładami korekty i tłumaczenia wiadomości" width="1448" height="1086" fetchpriority="high" decoding="async">
  </figure>
</section>

<div class="product-content section-shell writing-content">
  <section class="problem-grid" aria-label="Problem i rozwiązanie">
    <article class="content-panel">
      <p class="section-kicker">Wyzwanie</p>
      <h2>Poprawki wymagające przełączania aplikacji</h2>
      <p>Dyktowanie przyspiesza pisanie, ale rozpoznany tekst często wymaga poprawek. Kopiowanie go do osobnego narzędzia przerywa pracę i wybija z rytmu.</p>
    </article>
    <article class="content-panel">
      <p class="section-kicker">Rozwiązanie</p>
      <h2>Pomoc dostępna przy klawiaturze</h2>
      <p>AI Writing Assistant poprawia i tłumaczy tekst bezpośrednio przy klawiaturze. Działa w różnych aplikacjach, więc możesz skorygować podyktowaną wiadomość bez przechodzenia do osobnego edytora.</p>
    </article>
  </section>

  <section class="finance-features" aria-labelledby="features-title">
    <div class="finance-features-heading">
      <p class="section-kicker">Problemy do rozwiązania</p>
      <h2 id="features-title">Co utrudnia przygotowanie wiadomości i jak odpowiada na to aplikacja</h2>
      <p>Każdy element aplikacji wynika z konkretnej trudności pojawiającej się podczas pisania. Poniższe zestawienie pokazuje problem, sposób jego rozwiązania oraz efekt, który otrzymuje użytkownik.</p>
    </div>
    <ul class="finance-feature-list writing-problem-list">
      <li><span aria-hidden="true">01</span><div class="problem-response-copy"><h3>Kopiowanie tekstu tworzy niepotrzebne kroki</h3><p><strong>Problem</strong>Poprawa wiadomości w osobnym narzędziu wymaga skopiowania treści, opisania zadania i ponownego wklejenia wyniku.</p><p><strong>Odpowiedź aplikacji</strong>Asystent jest dostępny bezpośrednio przy klawiaturze i pracuje na tekście w aktualnie używanej aplikacji.</p><p class="problem-effect"><strong>Efekt</strong>Krótszy przepływ pracy i mniejsze ryzyko wklejenia niewłaściwej wersji wiadomości.</p></div></li>
      <li><span aria-hidden="true">02</span><div class="problem-response-copy"><h3>Dyktowanie nie daje od razu gotowej wiadomości</h3><p><strong>Problem</strong>Rozpoznawanie mowy może pomijać interpunkcję, błędnie zapisywać słowa lub tworzyć zdania wymagające uporządkowania.</p><p><strong>Odpowiedź aplikacji</strong>Jedno działanie poprawia tekst wprowadzony mikrofonem i przygotowuje czytelną wersję.</p><p class="problem-effect"><strong>Efekt</strong>Użytkownik zachowuje szybkość dyktowania i otrzymuje wiadomość gotową do sprawdzenia.</p></div></li>
      <li><span aria-hidden="true">03</span><div class="problem-response-copy"><h3>Opisanie oczekiwanej poprawy bywa trudne</h3><p><strong>Problem</strong>W ogólnym narzędziu AI użytkownik musi samodzielnie przygotować polecenie i wyjaśnić, jak tekst powinien zostać zmieniony.</p><p><strong>Odpowiedź aplikacji</strong>Gotowe działania pozwalają wybrać korektę, skrócenie, rozwinięcie, uproszczenie lub tłumaczenie.</p><p class="problem-effect"><strong>Efekt</strong>Przewidywalny wynik bez konieczności każdorazowego układania nowego polecenia.</p></div></li>
      <li><span aria-hidden="true">04</span><div class="problem-response-copy"><h3>Ten sam tekst nie pasuje do każdego odbiorcy</h3><p><strong>Problem</strong>Wiadomość do klienta, znajomego lub osoby mówiącej innym językiem wymaga innego tonu i sposobu sformułowania.</p><p><strong>Odpowiedź aplikacji</strong>Użytkownik wybiera styl wypowiedzi oraz język, na który ma zostać przetłumaczona przygotowana treść.</p><p class="problem-effect"><strong>Efekt</strong>Jedna wiadomość może zostać szybko dopasowana do odbiorcy i sytuacji.</p></div></li>
      <li><span aria-hidden="true">05</span><div class="problem-response-copy"><h3>Rozbudowany panel zasłania kontekst rozmowy</h3><p><strong>Problem</strong>Na ekranie telefonu dodatkowe okno może ograniczyć widoczność wiadomości i utrudnić ocenę przygotowanej odpowiedzi.</p><p><strong>Odpowiedź aplikacji</strong>Minimalistyczny interfejs pokazuje tylko wybór działania oraz wynik potrzebny w danym momencie.</p><p class="problem-effect"><strong>Efekt</strong>Treść rozmowy pozostaje widoczna podczas poprawiania tekstu.</p></div></li>
      <li><span aria-hidden="true">06</span><div class="problem-response-copy"><h3>Wiele narzędzi rozprasza treść i zwiększa koszt</h3><p><strong>Problem</strong>Kopiowanie wiadomości między różnymi czatami utrudnia kontrolę nad treścią i może tworzyć niepotrzebnie długie rozmowy z AI.</p><p><strong>Odpowiedź aplikacji</strong>Jeden asystent wykonuje krótkie, konkretne operacje tylko wtedy, gdy użytkownik ich potrzebuje.</p><p class="problem-effect"><strong>Efekt</strong>Bardziej uporządkowany przepływ treści i lepsza kontrola kosztu użycia AI.</p></div></li>
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

  <section class="process-section project-process" aria-labelledby="process-title">
    <div class="section-heading">
      <div><p class="section-kicker">Jak to działa</p><h2 id="process-title">Od wpisanego tekstu do gotowej wiadomości</h2></div>
    </div>
    <ol class="process-steps">
      <li><span>1</span><strong>Napisz lub podyktuj tekst</strong><small>Wprowadź treść w dowolnej aplikacji za pomocą klawiatury albo mikrofonu.</small></li>
      <li><span>2</span><strong>Wybierz potrzebne działanie</strong><small>Otwórz asystenta i zdecyduj, czy chcesz poprawić, przetłumaczyć lub zmienić styl tekstu.</small></li>
      <li><span>3</span><strong>Sprawdź i zastosuj wynik</strong><small>Porównaj przygotowaną wersję z oryginałem, a następnie wstaw ją do tego samego pola tekstowego.</small></li>
    </ol>
  </section>

  <section class="writing-gallery" aria-labelledby="writing-gallery-title">
    <div class="section-heading">
      <div><p class="section-kicker">Przykładowe ekrany</p><h2 id="writing-gallery-title">Dyktowanie i korekta tekstu</h2></div>
    </div>
    <p class="gallery-hint">Przesuń, aby zobaczyć więcej</p>
    <div class="lingua-gallery-grid writing-gallery-grid" role="region" aria-label="Przewijana galeria ekranów AI Writing Assistant" tabindex="0">
      <figure><div class="screen-frame"><img src="{{ '/assets/projects/writing-assistant-android/voice-dictation.jfif' | relative_url }}" alt="Klawiatura Androida w trybie dyktowania głosowego" loading="lazy" width="922" height="2049"></div><figcaption><strong>Dyktowanie głosem</strong><small>Powiedz wiadomość do mikrofonu klawiatury.</small></figcaption></figure>
      <figure><div class="screen-frame"><img src="{{ '/assets/projects/writing-assistant-android/recognized-text.jfif' | relative_url }}" alt="Wiadomość wpisana przez dyktowanie z błędami rozpoznawania mowy" loading="lazy" width="922" height="2049"></div><figcaption><strong>Tekst przed korektą</strong><small>Rozpoznana wypowiedź trafia do pola tekstowego.</small></figcaption></figure>
      <figure><div class="screen-frame"><img src="{{ '/assets/projects/writing-assistant-android/correction-tools.jfif' | relative_url }}" alt="Wiadomość z błędami gotowa do poprawienia przy użyciu asystenta" loading="lazy" width="922" height="2049"></div><figcaption><strong>Korekta przy klawiaturze</strong><small>Popraw tekst bez przełączania aplikacji.</small></figcaption></figure>
      <figure><div class="screen-frame"><img src="{{ '/assets/projects/writing-assistant-android/corrected-message.jfif' | relative_url }}" alt="Poprawiona wiadomość gotowa do wysłania" loading="lazy" width="922" height="2049"></div><figcaption><strong>Gotowa wiadomość</strong><small>Sprawdź poprawioną wersję przed wysłaniem.</small></figcaption></figure>
    </div>
  </section>

  <section id="status" class="project-status-bar" aria-labelledby="status-title">
    <div class="project-status-heading"><span class="project-status-indicator" aria-hidden="true"></span><div><p class="section-kicker">Aktualny etap</p><h2 id="status-title">Do użytku własnego</h2></div></div>
    <p>Aplikację stworzyłem do własnego użytku i nadal rozwijam ją o nowe funkcje oraz usprawnienia.</p>
  </section>
</div>
