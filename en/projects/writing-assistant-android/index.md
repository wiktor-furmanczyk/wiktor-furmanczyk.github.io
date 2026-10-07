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

  <section class="finance-features" aria-labelledby="features-title">
    <div class="finance-features-heading">
      <p class="section-kicker">Problems to solve</p>
      <h2 id="features-title">What makes writing difficult and how the app solves it</h2>
      <p>Each point shows a specific difficulty and a simple response from the app.</p>
    </div>
    <ul class="finance-feature-list writing-problem-list">
      <li><span aria-hidden="true">01</span><div class="problem-response-copy"><h3>Copying between apps</h3><p class="problem-statement"><strong>Problem</strong>Editing a message in a separate tool requires copying the text, explaining the task, and pasting the finished text back.</p><p class="solution-statement"><strong><span class="solution-check" aria-hidden="true">✓</span>Solution</strong>The assistant works directly at the keyboard and edits the text in the app currently being used.</p></div></li>
      <li><span aria-hidden="true">02</span><div class="problem-response-copy"><h3>Errors after dictation</h3><p class="problem-statement"><strong>Problem</strong>Text entered with the microphone can contain incorrect words, missing punctuation, and unclear sentences.</p><p class="solution-statement"><strong><span class="solution-check" aria-hidden="true">✓</span>Solution</strong>One action organizes the dictated text. The corrected message returns to the text field and is immediately ready to send.</p></div></li>
      <li><span aria-hidden="true">03</span><div class="problem-response-copy"><h3>Explaining every edit from the beginning</h3><p class="problem-statement"><strong>Problem</strong>In a general chat, the user has to explain each time what should be changed and what the result should look like.</p><p class="solution-statement"><strong><span class="solution-check" aria-hidden="true">✓</span>Solution</strong>Ready actions make it possible to immediately choose editing, shortening, expanding, simplifying, or translating.</p></div></li>
      <li><span aria-hidden="true">04</span><div class="problem-response-copy"><h3>Matching the tone and language</h3><p class="problem-statement"><strong>Problem</strong>A message to a client, a friend, or someone who speaks another language requires a different style and wording.</p><p class="solution-statement"><strong><span class="solution-check" aria-hidden="true">✓</span>Solution</strong>The user chooses the writing style and translation language, and the app prepares the finished text.</p></div></li>
      <li><span aria-hidden="true">05</span><div class="problem-response-copy"><h3>Keeping the conversation visible on a small screen</h3><p class="problem-statement"><strong>Problem</strong>A large tool panel can hide the message and make it harder to relate the edited text to the full conversation.</p><p class="solution-statement"><strong><span class="solution-check" aria-hidden="true">✓</span>Solution</strong>The minimal interface shows only the required actions and keeps the conversation context visible.</p></div></li>
      <li><span aria-hidden="true">06</span><div class="problem-response-copy"><h3>Fragmented content and AI usage costs</h3><p class="problem-statement"><strong>Problem</strong>Copying messages between many chats makes the content harder to control and creates unnecessarily long AI conversations.</p><p class="solution-statement"><strong><span class="solution-check" aria-hidden="true">✓</span>Solution</strong>One assistant performs short, focused operations only when the user needs them.</p></div></li>
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
      <div><p class="section-kicker">How it works</p><h2 id="process-title">From entered text to a finished message</h2></div>
    </div>
    <ol class="process-steps">
      <li><span>1</span><strong>Write or dictate the text</strong><small>Enter the content in any app with the keyboard or microphone.</small></li>
      <li><span>2</span><strong>Choose the required action</strong><small>Open the assistant and decide whether to edit, translate, or change the style of the text.</small></li>
      <li><span>3</span><strong>Send the finished message</strong><small>The corrected text returns to the same field and is immediately ready to send.</small></li>
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
      <figure><div class="screen-frame"><img src="{{ '/assets/projects/writing-assistant-android/corrected-message.jfif' | relative_url }}" alt="Edited message ready to send" loading="lazy" width="922" height="2049"></div><figcaption><strong>Ready to send</strong><small>The edited version is immediately ready to send.</small></figcaption></figure>
    </div>
  </section>

  <section id="status" class="project-status-bar" aria-labelledby="status-title">
    <div class="project-status-heading"><span class="project-status-indicator" aria-hidden="true"></span><div><p class="section-kicker">Current stage</p><h2 id="status-title">For personal use</h2></div></div>
    <p>The app is currently for personal use, and I continue to refine it based on my day-to-day needs.</p>
  </section>
</div>
