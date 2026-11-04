---
layout: default
title: 项目
description: VeltoWeb 项目：YouTube Hunter、AI Writing Assistant 和 Dzisiaj nie palę。
permalink: /zh/projects/
lang: zh-CN
body_class: projects-page
image: /assets/images/veltoweb-og.jpg
image_alt: 深蓝色背景上的 VeltoWeb 标志
---

<header class="projects-hero section-shell">
  <p class="eyebrow"><span></span> VeltoWeb 作品集</p>
  <h1>项目</h1>
  <p>了解我发现的问题、为此开发的工具，以及每个项目的当前阶段。</p>
</header>

<section class="projects-showcase section-shell" aria-label="项目列表">
  <article class="showcase-project showcase-project-hunter">
    <div class="showcase-copy">
      <span class="showcase-type">Windows 应用</span>
      <h2>YouTube <span>Hunter</span></h2>
      <p class="showcase-lead">集中查看候选视频并记录判断</p>
      <p>设定主题和筛选条件，结合辅助信息查看候选视频，并保存自己的判断。</p>
      <p class="showcase-status"><span aria-hidden="true"></span><strong>测试中</strong><small>视频分析方面的问题已修复，目前正在测试完整工作流程。</small></p>
      <a class="showcase-link" href="{{ '/zh/projects/youtube-hunter/' | relative_url }}">了解运作方式 <span aria-hidden="true">→</span></a>
    </div>
    <figure class="showcase-art hunter-showcase-art"><img src="{{ '/assets/projects/youtube-hunter/list.webp' | relative_url }}" alt="展示待评估视频列表的 YouTube Hunter 界面示意图" width="1448" height="1086" fetchpriority="high" decoding="async"></figure>
  </article>

  <article class="showcase-project showcase-project-writing">
    <div class="showcase-copy">
      <span class="showcase-type">移动应用</span>
      <h2>AI Writing <span>Assistant</span></h2>
      <p class="showcase-lead">更快写出清晰的消息</p>
      <p>在不同应用中通过键盘听写消息、修正语音识别错误并翻译文字。</p>
      <p class="showcase-status"><span aria-hidden="true"></span><strong>测试中</strong><small>界面、文本修改模式和录音播放功能已完成，正在测试新功能。</small></p>
      <a class="showcase-link" href="{{ '/zh/projects/writing-assistant-android/' | relative_url }}">了解项目 <span aria-hidden="true">→</span></a>
    </div>
    <figure class="showcase-art">
      <img src="{{ '/assets/projects/writing-assistant-android/list.webp' | relative_url }}" alt="展示文本编辑和翻译工具的 AI Writing Assistant 手机界面示意图" loading="lazy" width="1448" height="1086" decoding="async">
    </figure>
  </article>

  <article class="showcase-project showcase-project-smoke-free">
    <div class="showcase-copy">
      <span class="showcase-type">移动网站</span>
      <h2>Dzisiaj <span>nie palę</span></h2>
      <p class="showcase-lead">简单的戒烟方法</p>
      <p>一个提供激励材料的移动网站，帮助你在困难时刻坚持不吸烟。</p>
      <p class="showcase-status"><span aria-hidden="true"></span><strong>网站正在建设中</strong><small>我正在准备内容并完善项目介绍。</small></p>
      <a class="showcase-link" href="{{ '/zh/projects/dzisiaj-nie-pale/' | relative_url }}">了解项目构想 <span aria-hidden="true">→</span></a>
    </div>
    <figure class="showcase-art showcase-art-smoke-free"><img src="{{ '/assets/projects/dzisiaj-nie-pale/list.webp' | relative_url }}" alt="展示激励阅读内容的 Dzisiaj nie palę 移动网站示意图" loading="lazy" width="1448" height="1086" decoding="async"></figure>
  </article>



  {% include project-access-note.html %}
</section>
