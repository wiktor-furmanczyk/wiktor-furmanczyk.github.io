---
layout: project
title: Finance Manager
description: Desktopowa aplikacja do zarządzania finansami osobistymi, budżetami, oszczędnościami i opłacalnością dodatkowych zleceń.
permalink: /projects/finance-manager/
body_class: project-body finance-project
image: /assets/projects/finance-manager/finance-manager-hero.webp
image_alt: Koncepcja interfejsu Finance Manager z bilansem, analizą wydatków i budżetem miesięcznym
---

<section class="product-hero finance-hero section-shell" aria-labelledby="product-title">
  <div class="product-copy">
    <p class="product-eyebrow"><span aria-hidden="true"></span> Portfolio / Finance Manager</p>
    <h1 id="product-title">Finance <span class="text-gradient">Manager</span></h1>
    <p class="product-lead">Jedno miejsce do porządkowania finansów i podejmowania lepszych decyzji.</p>
    <p class="product-description">Desktopowa aplikacja ma łączyć finanse osobiste i dodatkowe źródła dochodu, automatyzować pracę z transakcjami oraz pokazywać, co naprawdę dzieje się z budżetem.</p>
    <p class="project-role">Moja rola: analiza potrzeb, koncepcja produktu, projekt interfejsu, a następnie implementacja i dalszy rozwój aplikacji.</p>
    <div class="tag-row product-tags" aria-label="Obszary projektu">
      <span>Aplikacja desktopowa</span><span>Finanse</span><span>Automatyzacje</span><span>AI</span>
    </div>
    <div class="button-row product-actions">
      <a class="button button-primary" href="#widoki">Zobacz planowane widoki <span aria-hidden="true">↓</span></a>
      <a class="button button-secondary" href="#status">Aktualny etap <span aria-hidden="true">↓</span></a>
    </div>
  </div>

  <figure class="finance-hero-visual">
    <img src="{{ '/assets/projects/finance-manager/finance-manager-hero.webp' | relative_url }}" srcset="{{ '/assets/projects/finance-manager/finance-manager-hero-724.webp' | relative_url }} 724w, {{ '/assets/projects/finance-manager/finance-manager-hero.webp' | relative_url }} 1254w" sizes="(max-width: 760px) calc(100vw - 28px), 610px" alt="Koncepcja aplikacji Finance Manager z ekranem finansów, kartą budżetu, celem oszczędnościowym i wskazówką dotyczącą wydatków" width="1254" height="1254" fetchpriority="high" decoding="async">
  </figure>
</section>

<div class="product-content section-shell finance-content">
  <section class="problem-grid" aria-label="Problem i rozwiązanie">
    <article class="content-panel">
      <p class="section-kicker">Wyzwanie</p>
      <h2>Dane rozproszone między arkuszami i kontami</h2>
      <p>Ręczne przepisywanie historii bankowej, pilnowanie opłat, kategoryzowanie zakupów i osobne liczenie zysków ze zleceń zabiera czas. Dane łatwo się rozjeżdżają, a arkusz pokazuje liczby bez pełnego kontekstu.</p>
    </article>
    <article class="content-panel">
      <p class="section-kicker">Rozwiązanie</p>
      <h2>Finanse zebrane, uporządkowane i wyjaśnione</h2>
      <p>Finance Manager ma importować transakcje, rozpoznawać sprzedawców, zapamiętywać reguły kategorii i łączyć bieżące wydatki z budżetami, celami oraz rzeczywistą opłacalnością dodatkowych zleceń.</p>
    </article>
  </section>

  <section class="finance-decisions" aria-labelledby="decisions-title">
    <div class="section-heading">
      <div><p class="section-kicker">Decyzje projektowe</p><h2 id="decisions-title">Założenia wynikające z problemu, nie z samej technologii</h2></div>
    </div>
    <div class="finance-decision-grid">
      <article><span>01</span><h3>Aplikacja desktopowa zamiast kolejnego arkusza online</h3><p>Finanse są prowadzone w jednym narzędziu przeznaczonym do regularnej pracy, bez uzależniania podstawowych funkcji od przeglądarki i wielu rozproszonych plików.</p></article>
      <article><span>02</span><h3>Dane finansowe przechowywane lokalnie</h3><p>Prywatność ma pierwszeństwo przed wygodą obowiązkowej chmury. Aplikacja nie wymaga konta ani automatycznego wysyłania historii finansowej do zewnętrznej usługi.</p></article>
      <article><span>03</span><h3>Reguły użytkownika przed sugestiami AI</h3><p>Kategoryzacja ma opierać się na zapamiętywanych, możliwych do skorygowania regułach. AI wspiera analizę trendów i decyzji, ale nie odbiera użytkownikowi kontroli nad danymi.</p></article>
      <article><span>04</span><h3>Jeden model danych, dwa konteksty finansowe</h3><p>Finanse prywatne i działalność pozostają rozdzielone, ale korzystają ze wspólnego importu oraz mechanizmu kategorii. Ten sam sprzedawca może mieć inne znaczenie zależnie od konta lub zlecenia.</p></article>
    </div>
  </section>

  <section class="finance-features" aria-labelledby="features-title">
    <div class="finance-features-heading">
      <p class="section-kicker">Problemy do rozwiązania</p>
      <h2 id="features-title">Od ręcznego pilnowania liczb do konkretnych odpowiedzi</h2>
      <p>Każde planowane rozwiązanie odpowiada na powtarzający się problem: rozproszone dane, brak pewności co zostało opłacone, trudność w ocenie kosztów i brak jasnej informacji, czy sytuacja finansowa naprawdę się poprawia.</p>
    </div>
    <ul class="finance-feature-list">
      <li><span aria-hidden="true">✓</span><p><strong>Automatyczna klasyfikacja transakcji</strong>Rozpoznawanie sprzedawców i zapamiętywanie własnych reguł kategorii.</p></li>
      <li><span aria-hidden="true">✓</span><p><strong>Kontrola planowanych wydatków</strong>Informacja, które zobowiązania zostały już opłacone, a które nadal czekają.</p></li>
      <li><span aria-hidden="true">✓</span><p><strong>Miesięczne budżety</strong>Czytelna odpowiedź, ile można jeszcze bezpiecznie wydać w danym miesiącu.</p></li>
      <li><span aria-hidden="true">✓</span><p><strong>Szczegółowa analiza wydatków</strong>Podział według kategorii, sklepów i usług.</p></li>
      <li><span aria-hidden="true">✓</span><p><strong>Porównania miesiąc do miesiąca</strong>Wykrywanie kosztów, które zaczynają rosnąć.</p></li>
      <li><span aria-hidden="true">✓</span><p><strong>Cele oszczędnościowe</strong>Planowanie środków na wakacje, sprzęt lub poduszkę finansową.</p></li>
      <li><span aria-hidden="true">✓</span><p><strong>Finanse prywatne i działalność</strong>Oddzielne dane, budżety i podsumowania w jednej aplikacji.</p></li>
      <li><span aria-hidden="true">✓</span><p><strong>Realna opłacalność zleceń</strong>Przychód, koszty i faktyczny zysk dla konkretnych projektów.</p></li>
      <li><span aria-hidden="true">✓</span><p><strong>Ogólny stan finansów</strong>Jedno podsumowanie pokazujące, czy sytuacja rzeczywiście się poprawia.</p></li>
      <li><span aria-hidden="true">✓</span><p><strong>Sugestie AI</strong>Wskazanie rosnących kosztów, potencjalnych oszczędności i zmian w budżecie.</p></li>
      <li><span aria-hidden="true">✓</span><p><strong>Kontrola zgodności salda</strong>Porównanie stanu wynikającego z transakcji z faktycznym saldem konta.</p></li>
      <li><span aria-hidden="true">✓</span><p><strong>Raporty miesięczne i roczne</strong>Gotowe podsumowania przychodów, wydatków, budżetów i oszczędności.</p></li>
      <li><span aria-hidden="true">✓</span><p><strong>Eksport dla księgowej</strong>Ewidencja przychodów, zestawienie usług, koszty działalności i inne dokumenty w odpowiednim formacie.</p></li>
    </ul>
  </section>

  <section class="process-section project-process" aria-labelledby="process-title">
    <div class="section-heading">
      <div><p class="section-kicker">Jak ma działać</p><h2 id="process-title">Od historii bankowej do konkretnych wniosków</h2></div>
    </div>
    <ol class="process-steps">
      <li><span>1</span><strong>Importuj dane</strong><small>Dodaj historię transakcji z banku bez ręcznego przepisywania.</small></li>
      <li><span>2</span><strong>Uporządkuj automatycznie</strong><small>Reguły rozpoznają sprzedawców i przypiszą właściwe kategorie.</small></li>
      <li><span>3</span><strong>Analizuj i planuj</strong><small>Kontroluj budżety, koszty, cele i zmiany miesiąc do miesiąca.</small></li>
    </ol>
  </section>

  <section id="widoki" class="finance-gallery" aria-labelledby="gallery-title">
    <div class="section-heading">
      <div><p class="section-kicker">Koncepcja interfejsu</p><h2 id="gallery-title">Planowane obszary aplikacji</h2></div>
    </div>
    <div class="finance-gallery-grid">
      <figure><div class="monitor-frame"><img src="{{ '/assets/projects/finance-manager/dashboard.webp' | relative_url }}" alt="Koncepcja pulpitu Finance Manager z bilansem, wykresami, budżetami i celami" loading="lazy" width="1484" height="1060"></div><figcaption><strong>Pulpit finansowy</strong><small>Najważniejsze liczby i cele w jednym widoku.</small></figcaption></figure>
      <figure><div class="monitor-frame"><img src="{{ '/assets/projects/finance-manager/transactions.webp' | relative_url }}" alt="Koncepcja listy transakcji z kategoriami, kontami, statusem i filtrami" loading="lazy" width="1484" height="1060"></div><figcaption><strong>Transakcje</strong><small>Import, filtrowanie i automatyczna kategoryzacja.</small></figcaption></figure>
      <figure><div class="monitor-frame"><img src="{{ '/assets/projects/finance-manager/planned-expenses.webp' | relative_url }}" alt="Koncepcja widoku planowanych wydatków i statusów płatności" loading="lazy" width="1484" height="1060"></div><figcaption><strong>Planowane wydatki</strong><small>Kontrola opłaconych i nadchodzących zobowiązań.</small></figcaption></figure>
      <figure><div class="monitor-frame"><img src="{{ '/assets/projects/finance-manager/expense-analysis.webp' | relative_url }}" alt="Koncepcja analizy wydatków według kategorii, miesięcy, miejsc i metod płatności" loading="lazy" width="1484" height="1060"></div><figcaption><strong>Analiza wydatków</strong><small>Trendy, rosnące koszty i możliwe oszczędności.</small></figcaption></figure>
    </div>
  </section>

  <section id="status" class="project-status-bar" aria-labelledby="status-title">
    <div class="project-status-heading"><span class="project-status-indicator" aria-hidden="true"></span><div><p class="section-kicker">Aktualny etap</p><h2 id="status-title">Analiza potrzeb i wymagań</h2></div></div>
    <p>Nadal analizuję i porządkuję potrzeby oraz wymagania projektu. Na tej podstawie dobiorę technologie i przygotuję odpowiednią architekturę systemu przed rozpoczęciem implementacji.</p>
  </section>
</div>
