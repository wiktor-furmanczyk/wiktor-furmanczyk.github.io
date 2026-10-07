---
layout: project
title: AI Writing Assistant
description: An Android writing assistant for editing and translating text from the keyboard in different apps.
permalink: /en/projects/writing-assistant-android/
lang: en-US
body_class: project-body writing-project
image: /assets/images/project-writing-assistant.jpg
image_alt: AI Writing Assistant helping edit and translate messages while you write
---

<section class="product-hero writing-hero section-shell" aria-labelledby="product-title">
  <div class="product-copy">
    <p class="product-eyebrow"><span aria-hidden="true"></span> Portfolio / AI Writing Assistant</p>
    <h1 id="product-title">AI Writing <span class="text-gradient">Assistant</span></h1>
    <p class="product-lead">Dictate, edit, and translate text right from your keyboard.</p>
    <p class="product-description">Dictate a message with your keyboard microphone, then use the assistant to fix speech recognition errors. The tools work in different apps wherever you can type with the Android keyboard.</p>
    <p class="project-role">My role: concept, interface design, implementation, and ongoing development.</p>
    <div class="tag-row product-tags" aria-label="Technologies">
      <span>Android</span><span>Kotlin</span><span>Jetpack Compose</span>
    </div>
    <div class="button-row product-actions">
      <a class="button button-primary" href="https://www.facebook.com/reel/2406684763155156" target="_blank" rel="noopener noreferrer">Watch the demo <span aria-hidden="true">↗</span></a>
      <a class="button button-secondary" href="#status">Project status <span aria-hidden="true">↓</span></a>
    </div>
  </div>

  <figure class="writing-hero-visual">
    <img src="{{ '/assets/images/projects-writing-showcase.webp' | relative_url }}" srcset="{{ '/assets/images/projects-writing-showcase-724.webp' | relative_url }} 724w, {{ '/assets/images/projects-writing-showcase.webp' | relative_url }} 1448w" sizes="(max-width: 760px) 100vw, 720px" alt="AI Writing Assistant on a phone, showing message editing and translation" width="1448" height="1086" fetchpriority="high" decoding="async">
  </figure>
</section>

<div class="product-content section-shell writing-content">
  <section class="problem-grid" aria-label="Challenge and solution">
    <article class="content-panel">
      <p class="section-kicker">The challenge</p>
      <h2>Fixing dictated text can interrupt your flow</h2>
      <p>Voice input makes writing faster, but speech recognition can get words wrong. Copying the text into another tool breaks your flow and adds extra steps.</p>
    </article>
    <article class="content-panel">
      <p class="section-kicker">The solution</p>
      <h2>Writing help right at the keyboard</h2>
      <p>AI Writing Assistant edits and translates text from the keyboard. Use it in different apps and fix a dictated message without opening a separate editor.</p>
    </article>
  </section>

  <section class="finance-decisions" aria-labelledby="decisions-title">
    <div class="section-heading">
      <div><p class="section-kicker">Design decisions</p><h2 id="decisions-title">Choices driven by the problem, not technology alone</h2></div>
    </div>
    <div class="finance-decision-grid">
      <article><span>01</span><h3>One action instead of a multi-step editing process</h3><p>A long message, post, or other text can be improved with one command. The user does not have to find every error manually or start a separate conversation with an AI tool.</p></article>
      <article><span>02</span><h3>Translate finished text without writing it again</h3><p>A prepared message can be translated into the selected language while preserving its meaning. Editing and translation share the same flow without requiring another app.</p></article>
      <article><span>03</span><h3>Tools available directly at the keyboard</h3><p>The text stays in the app where it was written. There is no need to copy it into a separate chat, wait for a response, and paste the edited version back.</p></article>
      <article><span>04</span><h3>A minimal interface that keeps the conversation visible</h3><p>The assistant uses only the space needed to choose an action and review the result. The message and surrounding conversation remain visible while the user works.</p></article>
    </div>
  </section>

  <section class="finance-features" aria-labelledby="features-title">
    <div class="finance-features-heading">
      <p class="section-kicker">Problems to solve</p>
      <h2 id="features-title">From rough input to a finished message without breaking the flow</h2>
      <p>AI Writing Assistant is designed to remove the extra steps between writing or dictating text and using it. Editing, tone changes, and translation remain part of the same workflow, regardless of the app in which the user is typing.</p>
    </div>
    <ul class="finance-feature-list">
      <li><span aria-hidden="true">✓</span><p><strong>One-action editing</strong>Quickly improve messages, posts, and longer text without finding every error manually.</p></li>
      <li><span aria-hidden="true">✓</span><p><strong>Works across different apps</strong>Access the assistant wherever text can be entered with the Android keyboard.</p></li>
      <li><span aria-hidden="true">✓</span><p><strong>Fix dictated text</strong>Correct speech recognition errors after entering a message with the microphone.</p></li>
      <li><span aria-hidden="true">✓</span><p><strong>Choose how the text should change</strong>Edit, shorten, expand, simplify, or translate the text depending on the task.</p></li>
      <li><span aria-hidden="true">✓</span><p><strong>Tone matched to the audience</strong>Make a message more professional, casual, friendly, or direct.</p></li>
      <li><span aria-hidden="true">✓</span><p><strong>Translate into a selected language</strong>Prepare a foreign-language version without opening a separate translator.</p></li>
      <li><span aria-hidden="true">✓</span><p><strong>One controlled content flow</strong>Messages go through one assistant instead of being copied between multiple open chats and tools.</p></li>
      <li><span aria-hidden="true">✓</span><p><strong>Control AI usage costs</strong>Short, focused operations avoid unnecessary context and use the assistant only when it is needed.</p></li>
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

  <section class="process-section project-process" aria-labelledby="process-title">
    <div class="section-heading">
      <div><p class="section-kicker">How it works</p><h2 id="process-title">Three steps to a ready-to-send message</h2></div>
    </div>
    <ol class="process-steps">
      <li><span>1</span><strong>Dictate your message</strong><small>Use your keyboard microphone to enter text by voice.</small></li>
      <li><span>2</span><strong>Fix the recognized text</strong><small>The assistant corrects errors from speech recognition.</small></li>
      <li><span>3</span><strong>Use the edited version</strong><small>Review the message and apply it where you are writing.</small></li>
    </ol>
  </section>

  <section class="writing-gallery" aria-labelledby="writing-gallery-title">
    <div class="section-heading">
      <div><p class="section-kicker">Example screens</p><h2 id="writing-gallery-title">Dictation and text editing</h2></div>
    </div>
    <p class="gallery-hint">Swipe to see more</p>
    <div class="lingua-gallery-grid writing-gallery-grid" role="region" aria-label="Scrollable gallery of AI Writing Assistant screens" tabindex="0">
      <figure><div class="screen-frame"><img src="{{ '/assets/projects/writing-assistant-android/voice-dictation.jfif' | relative_url }}" alt="Android keyboard in voice dictation mode" loading="lazy" width="922" height="2049"></div><figcaption><strong>Voice dictation</strong><small>Speak your message into the keyboard microphone.</small></figcaption></figure>
      <figure><div class="screen-frame"><img src="{{ '/assets/projects/writing-assistant-android/recognized-text.jfif' | relative_url }}" alt="Dictated message with speech recognition errors" loading="lazy" width="922" height="2049"></div><figcaption><strong>Text before editing</strong><small>Your spoken words appear in the message field.</small></figcaption></figure>
      <figure><div class="screen-frame"><img src="{{ '/assets/projects/writing-assistant-android/correction-tools.jfif' | relative_url }}" alt="Message ready for editing with the assistant at the keyboard" loading="lazy" width="922" height="2049"></div><figcaption><strong>Editing at the keyboard</strong><small>Fix the text without switching apps.</small></figcaption></figure>
      <figure><div class="screen-frame"><img src="{{ '/assets/projects/writing-assistant-android/corrected-message.jfif' | relative_url }}" alt="Edited message ready to send" loading="lazy" width="922" height="2049"></div><figcaption><strong>Ready to send</strong><small>Review the edited version before sending.</small></figcaption></figure>
    </div>
  </section>

  <section id="status" class="project-status-bar" aria-labelledby="status-title">
    <div class="project-status-heading"><span class="project-status-indicator" aria-hidden="true"></span><div><p class="section-kicker">Current stage</p><h2 id="status-title">For personal use</h2></div></div>
    <p>The app is currently for personal use, and I continue to refine it based on my day-to-day needs.</p>
  </section>
</div>
