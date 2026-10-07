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

  <section class="finance-features" aria-labelledby="features-title">
    <div class="finance-features-heading">
      <p class="section-kicker">Problemy do rozwiązania</p>
      <h2 id="features-title">Co utrudnia kontrolę finansów i jak aplikacja to rozwiązuje</h2>
      <p>Każdy punkt pokazuje konkretną trudność oraz prostą odpowiedź aplikacji.</p>
    </div>
    <ul class="finance-feature-list writing-problem-list">
      <li><span aria-hidden="true">01</span><div class="problem-response-copy"><h3>Ręczne porządkowanie transakcji</h3><p class="problem-statement"><strong>Problem</strong>Przepisywanie historii bankowej i przypisywanie każdej płatności do kategorii zabiera czas oraz łatwo prowadzi do pomyłek.</p><p class="solution-statement"><strong>Rozwiązanie</strong>Aplikacja importuje transakcje, rozpoznaje sprzedawców i zapamiętuje reguły kategorii, które użytkownik może poprawić.</p></div></li>
      <li><span aria-hidden="true">02</span><div class="problem-response-copy"><h3>Brak pewności, ile można jeszcze wydać</h3><p class="problem-statement"><strong>Problem</strong>Saldo konta nie pokazuje, które zobowiązania czekają na opłacenie i jaka część pieniędzy jest naprawdę dostępna.</p><p class="solution-statement"><strong>Rozwiązanie</strong>Budżety i planowane wydatki pokazują opłacone zobowiązania oraz kwotę, którą można bezpiecznie wykorzystać w danym miesiącu.</p></div></li>
      <li><span aria-hidden="true">03</span><div class="problem-response-copy"><h3>Rosnące koszty widoczne zbyt późno</h3><p class="problem-statement"><strong>Problem</strong>Długa lista liczb utrudnia zauważenie, która kategoria, usługa lub sklep zaczyna pochłaniać coraz więcej pieniędzy.</p><p class="solution-statement"><strong>Rozwiązanie</strong>Analizy i porównania miesięcy pokazują zmiany kosztów, a sugestie AI wskazują obszary warte sprawdzenia.</p></div></li>
      <li><span aria-hidden="true">04</span><div class="problem-response-copy"><h3>Cele oderwane od rzeczywistej sytuacji</h3><p class="problem-statement"><strong>Problem</strong>Trudno planować oszczędności, gdy dane z transakcji nie zgadzają się z saldem i brakuje jednego obrazu finansów.</p><p class="solution-statement"><strong>Rozwiązanie</strong>Kontrola salda, cele oszczędnościowe i wspólne podsumowanie pokazują postęp oraz ogólny stan finansów.</p></div></li>
      <li><span aria-hidden="true">05</span><div class="problem-response-copy"><h3>Mieszanie finansów prywatnych i działalności</h3><p class="problem-statement"><strong>Problem</strong>Wspólna lista wydatków utrudnia ocenę kosztów firmy, rentowności zleceń i rzeczywistego budżetu domowego.</p><p class="solution-statement"><strong>Rozwiązanie</strong>Aplikacja rozdziela oba konteksty, liczy przychód, koszty i zysk projektów oraz przygotowuje raporty i dane dla księgowej.</p></div></li>
      <li><span aria-hidden="true">06</span><div class="problem-response-copy"><h3>Brak kontroli nad wrażliwymi danymi</h3><p class="problem-statement"><strong>Problem</strong>Historia finansowa wymaga prywatności, a automatyczne decyzje nie powinny zmieniać danych bez wiedzy użytkownika.</p><p class="solution-statement"><strong>Rozwiązanie</strong>Dane są przechowywane lokalnie, a reguły i sugestie pozostają widoczne, możliwe do poprawienia i pod kontrolą użytkownika.</p></div></li>
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
