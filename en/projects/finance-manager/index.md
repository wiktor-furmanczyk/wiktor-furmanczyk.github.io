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
    <p class="project-role">My role: needs analysis, product concept, interface design, followed by implementation and continued development of the app.</p>
    <div class="tag-row product-tags" aria-label="Project focus areas">
      <span>Desktop app</span><span>Finance</span><span>Automation</span><span>AI</span>
    </div>
    <div class="button-row product-actions">
      <a class="button button-primary" href="#views">Explore planned views <span aria-hidden="true">↓</span></a>
      <a class="button button-secondary" href="#status">Current stage <span aria-hidden="true">↓</span></a>
    </div>
  </div>

  <figure class="finance-hero-visual">
    <img src="{{ '/assets/projects/finance-manager/finance-manager-hero.webp' | relative_url }}" srcset="{{ '/assets/projects/finance-manager/finance-manager-hero-724.webp' | relative_url }} 724w, {{ '/assets/projects/finance-manager/finance-manager-hero.webp' | relative_url }} 1254w" sizes="(max-width: 760px) calc(100vw - 28px), 610px" alt="Finance Manager concept showing a financial overview, budget card, savings goal, and spending insight" width="1254" height="1254" fetchpriority="high" decoding="async">
  </figure>
</section>

<div class="product-content section-shell finance-content">
  <section class="problem-grid" aria-label="Problem and solution">
    <article class="content-panel">
      <p class="section-kicker">Challenge</p>
      <h2>Data scattered across spreadsheets and accounts</h2>
      <p>Copying bank history, tracking bills, categorizing purchases, and separately calculating profit from side projects takes time. The data drifts out of sync, while a spreadsheet shows numbers without the full context.</p>
    </article>
    <article class="content-panel">
      <p class="section-kicker">Solution</p>
      <h2>Financial data collected, organized, and explained</h2>
      <p>Finance Manager is designed to import transactions, recognize merchants, remember category rules, and connect everyday spending with budgets, goals, and the real profitability of side projects.</p>
    </article>
  </section>

  <section class="finance-decisions" aria-labelledby="decisions-title">
    <div class="section-heading">
      <div><p class="section-kicker">Design decisions</p><h2 id="decisions-title">Choices driven by the problem, not technology alone</h2></div>
    </div>
    <div class="finance-decision-grid">
      <article><span>01</span><h3>A desktop app instead of another online spreadsheet</h3><p>Finances stay in one tool designed for regular work, without making core features dependent on a browser and multiple scattered files.</p></article>
      <article><span>02</span><h3>Financial data stored locally</h3><p>Privacy takes priority over the convenience of mandatory cloud storage. The app does not require an account or automatically send financial history to an external service.</p></article>
      <article><span>03</span><h3>User rules before AI suggestions</h3><p>Categorization is based on remembered, correctable rules. AI supports trend analysis and decisions without taking control of the underlying data away from the user.</p></article>
      <article><span>04</span><h3>One data model, two financial contexts</h3><p>Personal and business finances remain separate while sharing import and categorization mechanisms. The same merchant can mean something different depending on the account or project.</p></article>
    </div>
  </section>

  <section class="finance-features" aria-labelledby="features-title">
    <div class="finance-features-heading">
      <p class="section-kicker">Problems to solve</p>
      <h2 id="features-title">From manually tracking numbers to clear answers</h2>
      <p>Every planned capability addresses a recurring problem: scattered data, uncertainty about what has been paid, difficulty evaluating costs, and no clear view of whether the financial situation is genuinely improving.</p>
    </div>
    <ul class="finance-feature-list">
      <li><span aria-hidden="true">✓</span><p><strong>Automatic transaction classification</strong>Merchant recognition and custom category rules that the app remembers.</p></li>
      <li><span aria-hidden="true">✓</span><p><strong>Planned expense tracking</strong>See which commitments have been paid and which are still outstanding.</p></li>
      <li><span aria-hidden="true">✓</span><p><strong>Monthly budgets</strong>A clear answer to how much is still safe to spend during the month.</p></li>
      <li><span aria-hidden="true">✓</span><p><strong>Detailed expense analysis</strong>Breakdowns by category, merchant, and service.</p></li>
      <li><span aria-hidden="true">✓</span><p><strong>Month-to-month comparisons</strong>Detect costs that are beginning to rise.</p></li>
      <li><span aria-hidden="true">✓</span><p><strong>Savings goals</strong>Plan for a holiday, new equipment, or an emergency fund.</p></li>
      <li><span aria-hidden="true">✓</span><p><strong>Personal and business finances</strong>Separate data, budgets, and summaries within one app.</p></li>
      <li><span aria-hidden="true">✓</span><p><strong>Real project profitability</strong>Revenue, costs, and actual profit for individual jobs.</p></li>
      <li><span aria-hidden="true">✓</span><p><strong>Overall financial health</strong>One overview showing whether the situation is genuinely improving.</p></li>
      <li><span aria-hidden="true">✓</span><p><strong>AI suggestions</strong>Identify rising costs, potential savings, and useful budget changes.</p></li>
      <li><span aria-hidden="true">✓</span><p><strong>Balance reconciliation</strong>Compare the balance calculated from transactions with the actual account balance.</p></li>
      <li><span aria-hidden="true">✓</span><p><strong>Monthly and annual reports</strong>Ready summaries of income, expenses, budgets, and savings.</p></li>
      <li><span aria-hidden="true">✓</span><p><strong>Accountant-ready exports</strong>Revenue records, completed service summaries, business costs, and other documents in the required format.</p></li>
    </ul>
  </section>

  <section class="process-section project-process" aria-labelledby="process-title">
    <div class="section-heading">
      <div><p class="section-kicker">How it should work</p><h2 id="process-title">From bank history to useful insight</h2></div>
    </div>
    <ol class="process-steps">
      <li><span>1</span><strong>Import data</strong><small>Add bank transaction history without manual copying.</small></li>
      <li><span>2</span><strong>Organize automatically</strong><small>Rules recognize merchants and assign the right categories.</small></li>
      <li><span>3</span><strong>Analyze and plan</strong><small>Track budgets, costs, goals, and month-to-month changes.</small></li>
    </ol>
  </section>

  <section id="views" class="finance-gallery" aria-labelledby="gallery-title">
    <div class="section-heading">
      <div><p class="section-kicker">Interface concept</p><h2 id="gallery-title">Planned areas of the app</h2></div>
    </div>
    <div class="finance-gallery-grid">
      <figure><div class="monitor-frame"><img src="{{ '/assets/projects/finance-manager/dashboard.jpg' | relative_url }}" alt="Finance Manager dashboard concept with balances, charts, budgets, and goals" loading="lazy" width="1200" height="900"></div><figcaption><strong>Financial dashboard</strong><small>Key numbers and goals in one view.</small></figcaption></figure>
      <figure><div class="monitor-frame"><img src="{{ '/assets/projects/finance-manager/transactions.jpg' | relative_url }}" alt="Transaction list concept with categories, accounts, statuses, and filters" loading="lazy" width="1200" height="900"></div><figcaption><strong>Transactions</strong><small>Import, filtering, and automatic categorization.</small></figcaption></figure>
      <figure><div class="monitor-frame"><img src="{{ '/assets/projects/finance-manager/planned-expenses.jpg' | relative_url }}" alt="Planned expenses concept with payment status tracking" loading="lazy" width="1200" height="900"></div><figcaption><strong>Planned expenses</strong><small>Track paid and upcoming commitments.</small></figcaption></figure>
      <figure><div class="monitor-frame"><img src="{{ '/assets/projects/finance-manager/budgets.jpg' | relative_url }}" alt="Monthly budget concept organized by category" loading="lazy" width="1200" height="900"></div><figcaption><strong>Budgets</strong><small>Limits, safe-to-spend amounts, and month-end forecasts.</small></figcaption></figure>
      <figure><div class="monitor-frame"><img src="{{ '/assets/projects/finance-manager/expense-analysis.jpg' | relative_url }}" alt="Expense analysis concept by category, month, location, and payment method" loading="lazy" width="1200" height="900"></div><figcaption><strong>Expense analysis</strong><small>Trends, growing costs, and potential savings.</small></figcaption></figure>
      <figure><div class="monitor-frame"><img src="{{ '/assets/projects/finance-manager/side-income.jpg' | relative_url }}" alt="Side income analysis concept showing revenue, costs, and net profit" loading="lazy" width="1200" height="900"></div><figcaption><strong>Business and side projects</strong><small>Real profit after project costs.</small></figcaption></figure>
    </div>
  </section>

  <section id="status" class="project-status-bar" aria-labelledby="status-title">
    <div class="project-status-heading"><span class="project-status-indicator" aria-hidden="true"></span><div><p class="section-kicker">Current stage</p><h2 id="status-title">Needs and requirements analysis</h2></div></div>
    <p>I am still analyzing and organizing the project's needs and requirements. Based on that work, I will select the technologies and prepare a suitable system architecture before implementation begins.</p>
  </section>
</div>
