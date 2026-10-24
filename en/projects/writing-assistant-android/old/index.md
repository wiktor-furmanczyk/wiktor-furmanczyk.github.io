---
layout: project
title: AI Writing Assistant
description: An Android writing assistant for editing and translating text from the keyboard in different apps.
permalink: /en/projects/writing-assistant-android/old/
lang: en-US
body_class: project-body writing-project
image: /assets/images/portfolio-og.png
image_alt: VeltoWeb portfolio presenting AI Writing Assistant
---

<section class="product-hero writing-hero section-shell" aria-labelledby="product-title">
  <div class="product-copy">
    <p class="product-eyebrow"><span aria-hidden="true"></span> Portfolio / AI Writing Assistant</p>
    <h1 id="product-title">AI Writing <span class="text-gradient">Assistant</span></h1>
    <p class="product-lead">Dictate, edit, and translate text right from your keyboard.</p>
    <p class="product-description">Dictate a message with your keyboard microphone, then use the assistant to fix speech recognition errors. The tools work in different apps wherever you can type with the Android keyboard.</p>
    <p class="project-role">My role: concept, interface design, implementation, and ongoing development.</p>
    <div class="tag-row product-tags" aria-label="Project type"><span>Mobile app</span></div>
    <div class="button-row product-actions">
      <a class="button button-primary" href="#problemy">Explore the problem <span aria-hidden="true">↓</span></a>
      <a class="button button-secondary" href="#status">Project status <span aria-hidden="true">↓</span></a>
    </div>
  </div>

  <figure class="writing-hero-visual">
    <img src="{{ '/assets/images/writing-assistant-demo.svg' | relative_url }}" alt="Sample AI Writing Assistant interface for editing, rewriting, and translating messages" width="1448" height="1086" fetchpriority="high" decoding="async">
  </figure>
</section>

<div class="product-content section-shell writing-content">
  <section id="problemy" class="finance-features" aria-labelledby="features-title">
    <div class="finance-features-heading">
      <p class="section-kicker">Problems to solve</p>
      <h2 id="features-title">What interrupts writing a message</h2>
      <p>Problems I noticed while dictating and editing text on a phone.</p>
    </div>
    <ul class="finance-feature-list writing-problem-list">
      <li><span aria-hidden="true">01</span><div class="problem-response-copy"><h3>Switching apps</h3><p class="problem-statement">Editing a message in another tool means copying text back and forth.</p><p class="solution-statement">The assistant works beside the keyboard in the current app.</p></div></li>
      <li><span aria-hidden="true">02</span><div class="problem-response-copy"><h3>Dictation errors</h3><p class="problem-statement">Speech recognition leaves wrong words, punctuation, and hard-to-read sentences.</p><p class="solution-statement">One action corrects the text in the same field.</p></div></li>
      <li><span aria-hidden="true">03</span><div class="problem-response-copy"><h3>Repeated instructions</h3><p class="problem-statement">Every edit requires explaining the desired result again.</p><p class="solution-statement">Ready-made actions handle correction, tone, and translation.</p></div></li>
      <li><span aria-hidden="true">04</span><div class="problem-response-copy"><h3>Limited screen space</h3><p class="problem-statement">A large panel hides the conversation and makes the revised message harder to review.</p><p class="solution-statement">A simple interface keeps the conversation visible.</p></div></li>
    </ul>
  </section>

  <section class="project-tech-section" aria-labelledby="tech-title">
    <div class="project-tech-heading">
      <p class="section-kicker">Technologies</p>
      <h2 id="tech-title">Built with</h2>
    </div>
    <ul class="project-tech-list" aria-label="Project technologies">
      <li><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7.1 7.9 5.8 5.7a.55.55 0 0 1 .95-.56L8.1 7.2a9.7 9.7 0 0 1 7.8 0l1.35-2.06a.55.55 0 1 1 .92.6l-1.27 2.15A7.8 7.8 0 0 1 20 14H4a7.8 7.8 0 0 1 3.1-6.1ZM8 10.1a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6Zm8 0a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6ZM5 15h14v3.2a2 2 0 0 1-2 2h-.8v1.1a1.2 1.2 0 0 1-2.4 0v-1.1h-3.6v1.1a1.2 1.2 0 0 1-2.4 0v-1.1H7a2 2 0 0 1-2-2V15Z"/></svg><span>Android</span></li>
      <li><svg aria-hidden="true" viewBox="0 0 24 24"><defs><linearGradient id="writing-kotlin-mark-en" x1="3" y1="21" x2="21" y2="3" gradientUnits="userSpaceOnUse"><stop stop-color="#E44857"/><stop offset=".48" stop-color="#7F52FF"/><stop offset="1" stop-color="#0095D5"/></linearGradient></defs><path fill="url(#writing-kotlin-mark-en)" d="M3 3h18L3 21V3Zm9 9h9v9H3l9-9Z"/></svg><span>Kotlin</span></li>
      <li><svg aria-hidden="true" viewBox="0 0 24 24"><path fill="#4285F4" d="m12 2 9 5.1v9.8L12 22l-9-5.1V7.1L12 2Zm0 2.5L5.2 8.3v7.4l6.8 3.9 6.8-3.9V8.3L12 4.5Z"/><path fill="#34A853" d="m12 5.1 6 3.4v6.9l-6 3.5-6-3.5V8.5l6-3.4Zm0 3-3.4 1.9v3.9l3.4 1.9 3.4-1.9V10L12 8.1Z"/><path fill="#FBBC04" d="m12 8.1 3.4 1.9v3.9L12 15.8l-3.4-1.9V10L12 8.1Z"/></svg><span>Jetpack Compose</span></li>
    </ul>
  </section>

  <section class="video-section" aria-labelledby="video-title">
    <div class="video-copy">
      <p class="section-kicker">Walkthrough</p>
      <h2 id="video-title">From dictation to a finished message</h2>
      <p>I am preparing a walkthrough of dictation, correction, and returning to the conversation.</p>
    </div>
    <div class="video-device video-device--phone" data-video-slot="writing-assistant-android">
      <div class="video-screen video-screen--pending">
        <img src="{{ '/assets/images/writing-assistant-phone.svg' | relative_url }}" alt="Sample AI Writing Assistant screen without personal data" loading="lazy">
        <span class="video-pending">Video coming soon</span>
      </div>
    </div>
  </section>

  <section id="status" class="project-progress" aria-labelledby="status-title">
    <div class="project-progress-intro"><p class="section-kicker">Project progress</p><h2 id="status-title">Project <span class="text-gradient">development stages</span></h2><p>See what is complete, what I am working on now, and what comes next.</p></div>
    <div class="project-status-bar">
      <div class="project-status-heading"><span class="project-status-indicator" aria-hidden="true"></span><div><p class="section-kicker">Current stage</p><h3>For personal use</h3></div></div>
      <p>I use the app myself and am improving the interface, adding modes, and checking compatibility with other apps.</p>
    </div>
    <ol class="milestone-list">
      <li class="milestone--done"><span class="milestone-number">01</span><strong>Problem and concept</strong><small>Completed</small></li>
      <li class="milestone--done"><span class="milestone-number">02</span><strong>Personal-use version</strong><small>Completed</small></li>
      <li class="milestone--current"><span class="milestone-number">03</span><strong>Interface redesign</strong><small>In progress</small></li>
      <li class="milestone--current"><span class="milestone-number">04</span><strong>More modes and languages</strong><small>In progress</small></li>
      <li class="milestone--current"><span class="milestone-number">05</span><strong>Compatibility with apps</strong><small>In progress</small></li>
    </ol>
    <a class="text-link milestone-link" href="{{ '/en/roadmap/#roadmap-writing' | relative_url }}">View the project roadmap <span aria-hidden="true">→</span></a>
  </section>
</div>
