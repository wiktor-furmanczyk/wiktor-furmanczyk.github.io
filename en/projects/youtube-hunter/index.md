---
layout: project
title: YouTube Hunter
description: A Windows app that organizes video searches, presents candidates to review, and saves the user's own decisions.
permalink: /en/projects/youtube-hunter/
lang: en-US
body_class: project-body hunter-project
image: /assets/images/veltoweb-og.jpg
image_alt: VeltoWeb logo on a dark blue background
---

<section class="product-hero hunter-hero section-shell" aria-labelledby="product-title">
  <div class="product-copy">
    <p class="product-eyebrow"><span aria-hidden="true"></span> Portfolio / YouTube Hunter</p>
    <h1 id="product-title">YouTube <span class="text-gradient">Hunter</span></h1>
    <p class="product-lead">Less aimless browsing, more informed decisions.</p>
    <p class="product-description">Finding a specific video often means working through a long list of similar results. I built YouTube Hunter to bring search criteria, videos worth checking, and the history of my own reviews into one place. The app helps decide where to start, while leaving the final judgment to the user.</p>
    <p class="project-role">My role: identifying the problem in my own workflow, defining the scope, designing the user experience, building the app, and refining it through use.</p>
    <div class="tag-row product-tags" aria-label="Project areas"><span>Windows app</span><span>Search</span><span>Workflow</span></div>
    <div class="button-row product-actions">
      <a class="button button-primary" href="#problems">Explore the problem <span aria-hidden="true">↓</span></a>
      <a class="button button-secondary" href="#status">Development stages <span aria-hidden="true">↓</span></a>
    </div>
  </div>
  <figure class="hunter-hero-visual">
    {% include youtube-hunter-preview.html %}
    <figcaption>Illustration of the workflow, without data from real searches.</figcaption>
  </figure>
</section>

<div class="product-content section-shell hunter-content">
  <section id="problems" class="finance-features" aria-labelledby="features-title">
    <div class="finance-features-heading">
      <p class="section-kicker">Problems to solve</p>
      <h2 id="features-title">What makes the right video hard to find</h2>
      <p>A search result is only a candidate. It still needs to be checked, and the decision needs to be remembered.</p>
    </div>
    <ul class="finance-feature-list writing-problem-list">
      <li><span aria-hidden="true">01</span><div class="problem-response-copy"><h3>Too many similar results</h3><p class="problem-statement">A broad search returns many videos only loosely related to the topic.</p><p class="solution-statement">Search phrases and filters help narrow the list of candidates.</p></div></li>
      <li><span aria-hidden="true">02</span><div class="problem-response-copy"><h3>Uncertain video content</h3><p class="problem-statement">A promising title cannot confirm that the needed moment is in the video.</p><p class="solution-statement">The app shows supporting clues and leaves the judgment to the user.</p></div></li>
      <li><span aria-hidden="true">03</span><div class="problem-response-copy"><h3>Repeated effort</h3><p class="problem-statement">After a break, it is hard to remember which videos have already been checked.</p><p class="solution-statement">History and saved reviews preserve earlier decisions.</p></div></li>
      <li><span aria-hidden="true">04</span><div class="problem-response-copy"><h3>Different topics and languages</h3><p class="problem-statement">One set of search terms does not fit every task.</p><p class="solution-statement">Editable profiles organize criteria for different topics.</p></div></li>
    </ul>
  </section>

  <section class="video-section" aria-labelledby="video-title">
    <div class="video-copy"><p class="section-kicker">Walkthrough</p><h2 id="video-title">Search, review, decide</h2><p>I am preparing a short recording of the complete workflow in the app.</p></div>
    <div class="video-device video-device--monitor" data-video-slot="youtube-hunter">
      <div class="video-screen video-screen--pending">
        {% include youtube-hunter-preview.html %}
        <span class="video-pending">Video coming soon</span>
      </div>
    </div>
  </section>

  <section id="status" class="project-progress" aria-labelledby="status-title">
    <div class="project-progress-intro"><p class="section-kicker">Project progress</p><h2 id="status-title">Project <span class="text-gradient">development stages</span></h2><p>See what is complete, what I am working on now, and what comes next.</p></div>
    <div class="project-status-bar"><div class="project-status-heading"><span class="project-status-indicator" aria-hidden="true"></span><div><p class="section-kicker">Current stage</p><h3>Working app for personal use</h3></div></div><p>I use the app through the full workflow and keep improving its usability and result quality through hands-on testing. Results are suggestions for manual review.</p></div>
    <ol class="milestone-list">
      <li class="milestone--done"><span class="milestone-number">01</span><strong>Problem and scope</strong><small>Done</small></li>
      <li class="milestone--done"><span class="milestone-number">02</span><strong>Working workflow</strong><small>Done</small></li>
      <li class="milestone--done"><span class="milestone-number">03</span><strong>Topic profiles</strong><small>Done</small></li>
      <li class="milestone--done"><span class="milestone-number">04</span><strong>Separate work areas</strong><small>Done</small></li>
      <li class="milestone--current"><span class="milestone-number">05</span><strong>Usability and result quality</strong><small>In progress</small></li>
    </ol>
  </section>
</div>
