---
layout: project
title: YouTube Hunter
description: 一款整理视频搜索结果、提示待评估视频并保存用户判断的 Windows 应用。
permalink: /zh/projects/youtube-hunter/
lang: zh-CN
body_class: project-body hunter-project
image: /assets/images/veltoweb-og.jpg
image_alt: 深蓝色背景上的 VeltoWeb 标志
---

<section class="product-hero hunter-hero section-shell" aria-labelledby="product-title">
  <div class="product-copy">
    <p class="product-eyebrow"><span aria-hidden="true"></span> 作品集 / YouTube Hunter</p>
    <h1 id="product-title">YouTube <span class="text-gradient">Hunter</span></h1>
    <p class="product-lead">减少盲目浏览，做出更有依据的判断。</p>
    <p class="product-description">寻找特定视频往往要逐一查看大量相似结果。我开发 YouTube Hunter，将搜索条件、值得查看的视频以及自己的评价记录集中在一起。应用帮助用户决定从哪里开始，最终判断仍由用户作出。</p>
    <p class="project-role">我的职责：从自己的工作流程中发现问题、确定范围、设计用户体验、开发应用，并在使用过程中持续完善。</p>
    <div class="tag-row product-tags" aria-label="项目类型"><span>Windows 应用</span></div>
    <div class="button-row product-actions">
      <a class="button button-primary" href="#problems">了解问题 <span aria-hidden="true">↓</span></a>
      <a class="button button-secondary" href="#status">开发阶段 <span aria-hidden="true">↓</span></a>
    </div>
  </div>
  <figure class="hunter-hero-visual">
    <img class="hunter-hero-image" src="{{ '/assets/projects/youtube-hunter/hero.png' | relative_url }}" alt="展示待评估视频列表的 YouTube Hunter 界面示意图" width="1586" height="992" fetchpriority="high" decoding="async">
  </figure>
</section>

<div class="product-content section-shell hunter-content">
  <section id="problems" class="finance-features" aria-labelledby="features-title">
    <div class="finance-features-heading">
      <p class="section-kicker">待解决的问题</p>
      <h2 id="features-title">为什么找到合适的视频并不容易</h2>
      <p>搜索结果只是候选项，仍需核查内容并记录判断。</p>
    </div>
    <ul class="finance-feature-list writing-problem-list">
      <li><span aria-hidden="true">01</span><div class="problem-response-copy"><h3>相似结果过多</h3><p class="problem-statement">宽泛的搜索会返回大量与主题关联不紧密的视频。</p><p class="solution-statement">搜索词和筛选条件帮助缩小候选范围。</p></div></li>
      <li><span aria-hidden="true">02</span><div class="problem-response-copy"><h3>视频内容不确定</h3><p class="problem-statement">看似合适的标题不能证明视频包含所需片段。</p><p class="solution-statement">应用展示辅助线索，由用户作出判断。</p></div></li>
      <li><span aria-hidden="true">03</span><div class="problem-response-copy"><h3>重复劳动</h3><p class="problem-statement">中断工作后，很难记住哪些视频已经看过。</p><p class="solution-statement">历史记录和保存的评价留住先前的判断。</p></div></li>
      <li><span aria-hidden="true">04</span><div class="problem-response-copy"><h3>不同主题和语言</h3><p class="problem-statement">一套搜索词无法适用于所有任务。</p><p class="solution-statement">可编辑的配置帮助整理不同主题的搜索条件。</p></div></li>
    </ul>
  </section>

  <section class="video-section" aria-labelledby="video-title">
    <div class="video-copy"><p class="section-kicker">操作演示</p><h2 id="video-title">搜索、查看、判断</h2><p>观看应用工作流程的录屏。</p></div>
    <video class="hunter-demo-video" controls preload="metadata" playsinline lang="zh-CN" aria-label="YouTube Hunter 操作演示">
      <source src="{{ '/assets/projects/youtube-hunter/demo-zh.mp4' | relative_url }}" type="video/mp4">
      你的浏览器无法播放此视频。<a href="{{ '/assets/projects/youtube-hunter/demo-zh.mp4' | relative_url }}">下载录屏</a>。
    </video>
  </section>

  <section id="status" class="project-progress" aria-labelledby="status-title">
    <div class="project-progress-intro"><p class="section-kicker">项目进展</p><h2 id="status-title">项目<span class="text-gradient">开发阶段</span></h2><p>了解已完成的工作、当前进展以及下一步计划。</p></div>
    <div class="project-status-bar"><div class="project-status-heading"><span class="project-status-indicator" aria-hidden="true"></span><div><p class="section-kicker">当前阶段</p><h3>测试中</h3></div></div><p>首个可运行版本于 2026 年 10 月 16 日完成。我已修复视频分析错误，目前正在测试应用中的完整工作流程。</p></div>
    <ol class="milestone-list">
      <li class="milestone--done"><span class="milestone-number">01</span><strong>问题与范围</strong><small>已完成</small></li>
      <li class="milestone--done"><span class="milestone-number">02</span><strong>可运行的工作流程</strong><small>已完成</small></li>
      <li class="milestone--done"><span class="milestone-number">03</span><strong>主题配置与独立工作区</strong><small>已完成</small></li>
      <li class="milestone--done"><span class="milestone-number">04</span><strong>修复视频分析问题</strong><small>已完成</small></li>
      <li class="milestone--current"><span class="milestone-number">05</span><strong>测试完整工作流程</strong><small>进行中</small></li>
    </ol>
    <a class="text-link milestone-link" href="{{ '/zh/roadmap/#roadmap-hunter' | relative_url }}">查看路线图计划 <span aria-hidden="true">→</span></a>
  </section>
</div>
