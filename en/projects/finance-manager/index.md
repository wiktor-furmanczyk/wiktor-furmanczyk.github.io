---
layout: project
title: Finance Manager
description: A desktop app for managing personal finances, budgets, savings goals, and the profitability of side projects.
permalink: /en/projects/finance-manager/
lang: en-US
body_class: project-body finance-project
image: /assets/projects/finance-manager/finance-manager-hero.webp
image_alt: Finance Manager interface concept with balances, spending analysis, and a monthly budget
---

<section class="product-hero finance-hero section-shell" aria-labelledby="product-title">
  <div class="product-copy">
    <p class="product-eyebrow"><span aria-hidden="true"></span> Portfolio / Finance Manager</p>
    <h1 id="product-title">Finance <span class="text-gradient">Manager</span></h1>
    <p class="product-lead">One place to organize finances and make better decisions.</p>
    <p class="product-description">The desktop app is designed to bring personal finances and side income together, automate transaction work, and explain what is really happening with the budget.</p>
    <p class="project-role">My role at this stage: needs analysis and product concept. The interface designs show the intended direction.</p>
    <div class="tag-row product-tags" aria-label="Project focus areas">
      <span>Desktop app</span><span>Finance</span><span>Automation</span><span>AI</span>
    </div>
    <div class="button-row product-actions">
      <a class="button button-primary" href="#problemy">Explore the problem <span aria-hidden="true">↓</span></a>
      <a class="button button-secondary" href="#status">Development stages <span aria-hidden="true">↓</span></a>
    </div>
  </div>

  <figure class="finance-hero-visual">
    <img src="{{ '/assets/projects/finance-manager/finance-manager-hero.webp' | relative_url }}" srcset="{{ '/assets/projects/finance-manager/finance-manager-hero-724.webp' | relative_url }} 724w, {{ '/assets/projects/finance-manager/finance-manager-hero.webp' | relative_url }} 1254w" sizes="(max-width: 760px) calc(100vw - 28px), 610px" alt="Finance Manager concept showing a financial overview, budget card, savings goal, and spending insight" width="1254" height="1254" fetchpriority="high" decoding="async">
  </figure>
</section>

<div class="product-content section-shell finance-content">
  <section id="problemy" class="finance-features" aria-labelledby="features-title">
    <div class="finance-features-heading">
      <p class="section-kicker">Problems to solve</p>
      <h2 id="features-title">What Finance Manager aims to solve</h2>
      <p>I am reviewing these assumptions at the current stage of the project.</p>
    </div>
    <ul class="finance-feature-list writing-problem-list">
      <li><span aria-hidden="true">01</span><div class="problem-response-copy"><h3>Manual sorting</h3><p class="problem-statement">Entering and categorizing transactions takes time and invites errors.</p><p class="solution-statement">Planned import and rules would reduce manual work.</p></div></li>
      <li><span aria-hidden="true">02</span><div class="problem-response-copy"><h3>An incomplete budget view</h3><p class="problem-statement">An account balance does not account for upcoming bills and planned expenses.</p><p class="solution-statement">A planned budget view would put available funds in context.</p></div></li>
      <li><span aria-hidden="true">03</span><div class="problem-response-copy"><h3>Costs noticed too late</h3><p class="problem-statement">A transaction list makes growing expenses hard to spot.</p><p class="solution-statement">Planned comparisons would highlight month-to-month changes.</p></div></li>
      <li><span aria-hidden="true">04</span><div class="problem-response-copy"><h3>Personal finances and side work</h3><p class="problem-statement">Mixed data makes household budgeting and job profitability hard to assess.</p><p class="solution-statement">The concept separates these areas and presents clear summaries.</p></div></li>
    </ul>
  </section>

  <section class="video-section" aria-labelledby="video-title">
    <div class="video-copy">
      <p class="section-kicker">Walkthrough</p>
      <h2 id="video-title">Planned finance workflow</h2>
      <p>Once there is a working version, I will add a recording of import, organization, and spending analysis.</p>
    </div>
    <div class="video-device video-device--monitor" data-video-slot="finance-manager">
      <div class="video-screen video-screen--pending">
        <img src="{{ '/assets/projects/finance-manager/dashboard.webp' | relative_url }}" alt="Finance Manager dashboard concept" loading="lazy">
        <span class="video-pending">Video coming soon</span>
      </div>
    </div>
  </section>

  <section id="status" class="project-progress" aria-labelledby="status-title">
    <div class="project-status-bar">
      <div class="project-status-heading"><span class="project-status-indicator" aria-hidden="true"></span><div><p class="section-kicker">Current stage</p><h2 id="status-title">Needs and requirements analysis</h2></div></div>
      <p>I am organizing the needs and requirements. Once verified, I will choose the technology and design the system architecture.</p>
    </div>
    <div class="milestone-heading"><h3>Key stages</h3><p>These stages are a development plan, not completed features.</p></div>
    <ol class="milestone-list">
      <li class="milestone--current"><span class="milestone-number">01</span><strong>Needs analysis</strong><small>In progress</small></li>
      <li class="milestone--planned"><span class="milestone-number">02</span><strong>Technology selection</strong><small>Planned</small></li>
      <li class="milestone--planned"><span class="milestone-number">03</span><strong>Architecture design</strong><small>Planned</small></li>
      <li class="milestone--planned"><span class="milestone-number">04</span><strong>Transaction import</strong><small>Planned</small></li>
      <li class="milestone--planned"><span class="milestone-number">05</span><strong>Automatic categorization</strong><small>Planned</small></li>
    </ol>
    <a class="text-link milestone-link" href="{{ '/en/roadmap/#roadmap-finance' | relative_url }}">Detailed Finance Manager roadmap <span aria-hidden="true">→</span></a>
  </section>
</div>
