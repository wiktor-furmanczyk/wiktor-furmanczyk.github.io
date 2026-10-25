---
layout: project
title: AI Writing Assistant
description: 一款 Android 写作助手，可在不同应用中通过键盘修改和翻译文本。
permalink: /zh/projects/writing-assistant-android/old/
lang: zh-CN
body_class: project-body writing-project
image: /assets/images/portfolio-og.png
image_alt: 展示 AI Writing Assistant 的 VeltoWeb 作品集
---

<section class="product-hero writing-hero section-shell" aria-labelledby="product-title">
  <div class="product-copy">
    <p class="product-eyebrow"><span aria-hidden="true"></span> 作品集 / AI Writing Assistant</p>
    <h1 id="product-title">AI Writing <span class="text-gradient">Assistant</span></h1>
    <p class="product-lead">直接通过键盘听写、修改和翻译文本。</p>
    <p class="product-description">用键盘麦克风听写消息，再通过助手修正语音识别错误。只要能使用 Android 键盘输入，就能在不同应用中使用这些工具。</p>
    <p class="project-role">我的职责：产品构想、界面设计、实施与持续开发。</p>
    <div class="tag-row product-tags" aria-label="项目类型"><span>移动应用</span></div>
    <div class="button-row product-actions">
      <a class="button button-primary" href="#problemy">了解问题 <span aria-hidden="true">↓</span></a>
      <a class="button button-secondary" href="#status">项目状态 <span aria-hidden="true">↓</span></a>
    </div>
  </div>

  <figure class="writing-hero-visual">
    <img src="{{ '/assets/projects/writing-assistant-android/hero.png' | relative_url }}?v=20261024" alt="AI Writing Assistant concept for editing, rewriting, and translating messages" width="1672" height="941" fetchpriority="high" decoding="async">
  </figure>
</section>

<div class="product-content section-shell writing-content">
  <section id="problemy" class="finance-features" aria-labelledby="features-title">
    <div class="finance-features-heading">
      <p class="section-kicker">待解决的问题</p>
      <h2 id="features-title">写消息时有哪些阻碍</h2>
      <p>这些是我在手机上听写和修改文字时遇到的问题。</p>
    </div>
    <ul class="finance-feature-list writing-problem-list">
      <li><span aria-hidden="true">01</span><div class="problem-response-copy"><h3>切换应用</h3><p class="problem-statement">在另一个工具中修改消息，需要反复复制和粘贴文字。</p><p class="solution-statement">助手在当前应用的键盘旁工作。</p></div></li>
      <li><span aria-hidden="true">02</span><div class="problem-response-copy"><h3>听写错误</h3><p class="problem-statement">语音识别可能留下错词、错误标点和难读的句子。</p><p class="solution-statement">一次操作即可在同一输入框中修正文本。</p></div></li>
      <li><span aria-hidden="true">03</span><div class="problem-response-copy"><h3>重复输入指令</h3><p class="problem-statement">每次修改都要重新解释期望的结果。</p><p class="solution-statement">预设操作可处理纠错、语气调整和翻译。</p></div></li>
      <li><span aria-hidden="true">04</span><div class="problem-response-copy"><h3>屏幕空间有限</h3><p class="problem-statement">过大的面板会遮挡对话，也不方便检查修改后的消息。</p><p class="solution-statement">简洁的界面让对话保持可见。</p></div></li>
    </ul>
  </section>

  <section class="project-tech-section" aria-labelledby="tech-title">
    <div class="project-tech-heading">
      <p class="section-kicker">技术</p>
      <h2 id="tech-title">使用的技术</h2>
    </div>
    <ul class="project-tech-list" aria-label="项目技术">
      <li><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7.1 7.9 5.8 5.7a.55.55 0 0 1 .95-.56L8.1 7.2a9.7 9.7 0 0 1 7.8 0l1.35-2.06a.55.55 0 1 1 .92.6l-1.27 2.15A7.8 7.8 0 0 1 20 14H4a7.8 7.8 0 0 1 3.1-6.1ZM8 10.1a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6Zm8 0a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6ZM5 15h14v3.2a2 2 0 0 1-2 2h-.8v1.1a1.2 1.2 0 0 1-2.4 0v-1.1h-3.6v1.1a1.2 1.2 0 0 1-2.4 0v-1.1H7a2 2 0 0 1-2-2V15Z"/></svg><span>Android</span></li>
      <li><svg aria-hidden="true" viewBox="0 0 24 24"><defs><linearGradient id="writing-kotlin-mark-en" x1="3" y1="21" x2="21" y2="3" gradientUnits="userSpaceOnUse"><stop stop-color="#E44857"/><stop offset=".48" stop-color="#7F52FF"/><stop offset="1" stop-color="#0095D5"/></linearGradient></defs><path fill="url(#writing-kotlin-mark-en)" d="M3 3h18L3 21V3Zm9 9h9v9H3l9-9Z"/></svg><span>Kotlin</span></li>
      <li><svg aria-hidden="true" viewBox="0 0 24 24"><path fill="#4285F4" d="m12 2 9 5.1v9.8L12 22l-9-5.1V7.1L12 2Zm0 2.5L5.2 8.3v7.4l6.8 3.9 6.8-3.9V8.3L12 4.5Z"/><path fill="#34A853" d="m12 5.1 6 3.4v6.9l-6 3.5-6-3.5V8.5l6-3.4Zm0 3-3.4 1.9v3.9l3.4 1.9 3.4-1.9V10L12 8.1Z"/><path fill="#FBBC04" d="m12 8.1 3.4 1.9v3.9L12 15.8l-3.4-1.9V10L12 8.1Z"/></svg><span>Jetpack Compose</span></li>
    </ul>
  </section>

  <section class="video-section" aria-labelledby="video-title">
    <div class="video-copy">
      <p class="section-kicker">操作演示</p>
      <h2 id="video-title">从听写到完整消息</h2>
      <p>我正在准备听写、修改并返回对话的操作演示。</p>
    </div>
    <div class="video-device video-device--phone" data-video-slot="writing-assistant-android">
      <div class="video-screen video-screen--pending">
        <img src="{{ '/assets/images/writing-assistant-phone.svg' | relative_url }}" alt="不含个人数据的 AI Writing Assistant 示例界面" loading="lazy">
        <span class="video-pending">演示视频即将发布</span>
      </div>
    </div>
  </section>

  <section id="status" class="project-progress" aria-labelledby="status-title">
    <div class="project-progress-intro"><p class="section-kicker">项目进展</p><h2 id="status-title">项目<span class="text-gradient">开发阶段</span></h2><p>了解已完成的工作、当前进展以及下一步计划。</p></div>
    <div class="project-status-bar">
      <div class="project-status-heading"><span class="project-status-indicator" aria-hidden="true"></span><div><p class="section-kicker">当前阶段</p><h3>供个人使用</h3></div></div>
      <p>我自己正在使用这款应用，并持续改进界面、增加模式、检查与其他应用的兼容性。</p>
    </div>
    <ol class="milestone-list">
      <li class="milestone--done"><span class="milestone-number">01</span><strong>问题与构想</strong><small>已完成</small></li>
      <li class="milestone--done"><span class="milestone-number">02</span><strong>个人使用版本</strong><small>已完成</small></li>
      <li class="milestone--current"><span class="milestone-number">03</span><strong>重新设计界面</strong><small>进行中</small></li>
      <li class="milestone--current"><span class="milestone-number">04</span><strong>更多模式与语言</strong><small>进行中</small></li>
      <li class="milestone--current"><span class="milestone-number">05</span><strong>与其他应用的兼容性</strong><small>进行中</small></li>
    </ol>
    <a class="text-link milestone-link" href="{{ '/zh/roadmap/#roadmap-writing' | relative_url }}">查看项目路线图 <span aria-hidden="true">→</span></a>
  </section>
</div>
