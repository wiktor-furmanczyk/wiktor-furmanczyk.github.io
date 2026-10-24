---
layout: project
title: Finance Manager
description: Desktopowa aplikacja do zarządzania finansami osobistymi, budżetami, oszczędnościami i opłacalnością dodatkowych zleceń.
permalink: /projects/finance-manager/old/
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
    <p class="project-role">Moja rola na obecnym etapie: analiza potrzeb i koncepcja produktu. Projekt interfejsu przedstawia planowany kierunek.</p>
    <div class="tag-row product-tags" aria-label="Typ projektu"><span>Aplikacja Windows</span></div>
    <div class="button-row product-actions">
      <a class="button button-primary" href="#problemy">Poznaj problem <span aria-hidden="true">↓</span></a>
      <a class="button button-secondary" href="#status">Etapy rozwoju <span aria-hidden="true">↓</span></a>
    </div>
  </div>

  <figure class="finance-hero-visual">
    <img src="{{ '/assets/projects/finance-manager/finance-manager-hero.webp' | relative_url }}" srcset="{{ '/assets/projects/finance-manager/finance-manager-hero-724.webp' | relative_url }} 724w, {{ '/assets/projects/finance-manager/finance-manager-hero.webp' | relative_url }} 1254w" sizes="(max-width: 760px) calc(100vw - 28px), 610px" alt="Koncepcja aplikacji Finance Manager z ekranem finansów, kartą budżetu, celem oszczędnościowym i wskazówką dotyczącą wydatków" width="1254" height="1254" fetchpriority="high" decoding="async">
  </figure>
</section>

<div class="product-content section-shell finance-content">
  <section id="problemy" class="finance-features" aria-labelledby="features-title">
    <div class="finance-features-heading">
      <p class="section-kicker">Problemy do rozwiązania</p>
      <h2 id="features-title">Jakie problemy ma rozwiązać Finance Manager</h2>
      <p>Te założenia sprawdzam na obecnym etapie projektu.</p>
    </div>
    <ul class="finance-feature-list writing-problem-list">
      <li><span aria-hidden="true">01</span><div class="problem-response-copy"><h3>Ręczne porządkowanie</h3><p class="problem-statement">Przepisywanie i kategoryzowanie transakcji zajmuje czas i sprzyja pomyłkom.</p><p class="solution-statement">Planowany import i reguły mają ograniczyć ręczną pracę.</p></div></li>
      <li><span aria-hidden="true">02</span><div class="problem-response-copy"><h3>Niepełny obraz budżetu</h3><p class="problem-statement">Saldo konta nie uwzględnia przyszłych rachunków i planowanych wydatków.</p><p class="solution-statement">Planowany widok budżetu ma pokazywać dostępne środki w kontekście zobowiązań.</p></div></li>
      <li><span aria-hidden="true">03</span><div class="problem-response-copy"><h3>Koszty zauważane za późno</h3><p class="problem-statement">Lista transakcji utrudnia dostrzeżenie rosnących wydatków.</p><p class="solution-statement">Planowane porównania mają wskazywać zmiany między miesiącami.</p></div></li>
      <li><span aria-hidden="true">04</span><div class="problem-response-copy"><h3>Finanse prywatne i zlecenia</h3><p class="problem-statement">Wspólne dane utrudniają ocenę budżetu domowego i opłacalności pracy.</p><p class="solution-statement">Projekt zakłada oddzielenie tych obszarów i czytelne podsumowania.</p></div></li>
    </ul>
  </section>

  <section class="video-section" aria-labelledby="video-title">
    <div class="video-copy">
      <p class="section-kicker">Prezentacja działania</p>
      <h2 id="video-title">Planowany przebieg pracy z finansami</h2>
      <p>Po powstaniu działającej wersji dodam nagranie pokazujące import, porządkowanie i analizę wydatków.</p>
    </div>
    <div class="video-device video-device--monitor" data-video-slot="finance-manager">
      <div class="video-screen video-screen--pending">
        <img src="{{ '/assets/projects/finance-manager/dashboard.webp' | relative_url }}" alt="Koncepcja pulpitu Finance Manager" loading="lazy">
        <span class="video-pending">Wkrótce nagranie</span>
      </div>
    </div>
  </section>

  <section id="status" class="project-progress" aria-labelledby="status-title">
    <div class="project-progress-intro"><p class="section-kicker">Postęp projektu</p><h2 id="status-title">Etapy <span class="text-gradient">rozwoju projektu</span></h2><p>Sprawdź, co już zostało zrobione, nad czym pracuję i jakie są kolejne kroki.</p></div>
    <div class="project-status-bar">
      <div class="project-status-heading"><span class="project-status-indicator" aria-hidden="true"></span><div><p class="section-kicker">Aktualny etap</p><h3>Analiza potrzeb i wymagań</h3></div></div>
      <p>Porządkuję potrzeby i wymagania. Po ich sprawdzeniu dobiorę technologie oraz zaprojektuję architekturę systemu.</p>
    </div>
    <ol class="milestone-list">
      <li class="milestone--current"><span class="milestone-number">01</span><strong>Analiza potrzeb</strong><small>W trakcie</small></li>
      <li class="milestone--planned"><span class="milestone-number">02</span><strong>Dobór technologii</strong><small>Planowane</small></li>
      <li class="milestone--planned"><span class="milestone-number">03</span><strong>Projekt architektury</strong><small>Planowane</small></li>
      <li class="milestone--planned"><span class="milestone-number">04</span><strong>Import transakcji</strong><small>Planowane</small></li>
      <li class="milestone--planned"><span class="milestone-number">05</span><strong>Automatyczna kategoryzacja</strong><small>Planowane</small></li>
    </ol>
    <a class="text-link milestone-link" href="{{ '/roadmap/#roadmap-finance' | relative_url }}">Zobacz plan na roadmapie <span aria-hidden="true">→</span></a>
  </section>
</div>
