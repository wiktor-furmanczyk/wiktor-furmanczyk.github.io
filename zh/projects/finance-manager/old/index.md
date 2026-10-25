---
layout: project
title: Finance Manager
description: 一款管理个人财务、预算、储蓄目标和副业项目收益的桌面应用。
permalink: /zh/projects/finance-manager/old/
lang: zh-CN
body_class: project-body finance-project
image: /assets/projects/finance-manager/finance-manager-hero.webp
image_alt: 展示余额、支出分析和月度预算的 Finance Manager 界面示意图
---

<section class="product-hero finance-hero section-shell" aria-labelledby="product-title">
  <div class="product-copy">
    <p class="product-eyebrow"><span aria-hidden="true"></span> 作品集 / Finance Manager</p>
    <h1 id="product-title">Finance <span class="text-gradient">Manager</span></h1>
    <p class="product-lead">在一个地方整理财务，做出更好的决策。</p>
    <p class="product-description">这款桌面应用旨在整合个人财务与副业收入，自动处理交易记录，并帮助理解预算的实际情况。</p>
    <p class="project-role">我在现阶段负责需求分析和产品构想。界面设计展示了预期方向。</p>
    <div class="tag-row product-tags" aria-label="项目类型"><span>Windows 应用</span></div>
    <div class="button-row product-actions">
      <a class="button button-primary" href="#problemy">了解问题 <span aria-hidden="true">↓</span></a>
      <a class="button button-secondary" href="#status">开发阶段 <span aria-hidden="true">↓</span></a>
    </div>
  </div>

  <figure class="finance-hero-visual">
    <img src="{{ '/assets/projects/finance-manager/finance-manager-hero.webp' | relative_url }}" srcset="{{ '/assets/projects/finance-manager/finance-manager-hero-724.webp' | relative_url }} 724w, {{ '/assets/projects/finance-manager/finance-manager-hero.webp' | relative_url }} 1254w" sizes="(max-width: 760px) calc(100vw - 28px), 610px" alt="Finance Manager concept showing a financial overview, budget card, savings goal, and spending insight" width="1254" height="1254" fetchpriority="high" decoding="async">
  </figure>
</section>

<div class="product-content section-shell finance-content">
  <section id="problemy" class="finance-features" aria-labelledby="features-title">
    <div class="finance-features-heading">
      <p class="section-kicker">待解决的问题</p>
      <h2 id="features-title">Finance Manager 希望解决什么问题</h2>
      <p>在项目当前阶段，我正在验证这些设想。</p>
    </div>
    <ul class="finance-feature-list writing-problem-list">
      <li><span aria-hidden="true">01</span><div class="problem-response-copy"><h3>手动整理</h3><p class="problem-statement">输入和分类交易记录耗时，也容易出错。</p><p class="solution-statement">计划中的导入功能和规则将减少手动操作。</p></div></li>
      <li><span aria-hidden="true">02</span><div class="problem-response-copy"><h3>预算视图不完整</h3><p class="problem-statement">账户余额无法反映即将到来的账单和计划支出。</p><p class="solution-statement">规划中的预算视图将让可用资金更易理解。</p></div></li>
      <li><span aria-hidden="true">03</span><div class="problem-response-copy"><h3>发现支出增长太晚</h3><p class="problem-statement">仅查看交易列表，很难及时发现支出增长。</p><p class="solution-statement">计划中的对比功能将突出月度变化。</p></div></li>
      <li><span aria-hidden="true">04</span><div class="problem-response-copy"><h3>个人财务与副业</h3><p class="problem-statement">数据混在一起，使家庭预算和项目收益难以评估。</p><p class="solution-statement">该构想将两者分开，并提供清晰的汇总。</p></div></li>
    </ul>
  </section>

  <section class="video-section" aria-labelledby="video-title">
    <div class="video-copy">
      <p class="section-kicker">操作演示</p>
      <h2 id="video-title">规划中的财务工作流程</h2>
      <p>有可运行版本后，我会加入导入、整理和支出分析的演示录屏。</p>
    </div>
    <div class="video-device video-device--monitor" data-video-slot="finance-manager">
      <div class="video-screen video-screen--pending">
        <img src="{{ '/assets/projects/finance-manager/dashboard.webp' | relative_url }}" alt="Finance Manager dashboard concept" loading="lazy">
        <span class="video-pending">演示视频即将发布</span>
      </div>
    </div>
  </section>

  <section id="status" class="project-progress" aria-labelledby="status-title">
    <div class="project-progress-intro"><p class="section-kicker">项目进展</p><h2 id="status-title">项目<span class="text-gradient">开发阶段</span></h2><p>了解已完成的工作、当前进展以及下一步计划。</p></div>
    <div class="project-status-bar">
      <div class="project-status-heading"><span class="project-status-indicator" aria-hidden="true"></span><div><p class="section-kicker">当前阶段</p><h3>需求分析</h3></div></div>
      <p>我正在梳理需求。验证完成后，将进行技术选型并设计系统架构。</p>
    </div>
    <ol class="milestone-list">
      <li class="milestone--current"><span class="milestone-number">01</span><strong>需求分析</strong><small>进行中</small></li>
      <li class="milestone--planned"><span class="milestone-number">02</span><strong>技术选型</strong><small>计划中</small></li>
      <li class="milestone--planned"><span class="milestone-number">03</span><strong>架构设计</strong><small>计划中</small></li>
      <li class="milestone--planned"><span class="milestone-number">04</span><strong>导入交易记录</strong><small>计划中</small></li>
      <li class="milestone--planned"><span class="milestone-number">05</span><strong>自动分类</strong><small>计划中</small></li>
    </ol>
    <a class="text-link milestone-link" href="{{ '/zh/roadmap/#roadmap-finance' | relative_url }}">查看项目路线图 <span aria-hidden="true">→</span></a>
  </section>
</div>
