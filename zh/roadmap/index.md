---
layout: default
title: 计划、进展与动态
description: VeltoWeb 项目路线图，以及 LinguaPilot、AI Writing Assistant 和其他工具的重要更新记录。
permalink: /zh/roadmap/
lang: zh-CN
body_class: roadmap-page
image: /assets/images/portfolio-og.png
image_alt: VeltoWeb 项目路线图和更新记录
---

<header class="roadmap-hero section-shell">
  <p class="eyebrow"><span></span> 项目开发</p>
  <h1>计划、进展与<span class="text-gradient">动态</span></h1>
  <p>查看各项目的路线图和重要更新记录。我会持续更新本页，展示正在开发的内容以及项目的进展。</p>
  <nav class="roadmap-tabs" aria-label="页面栏目">
    <a class="roadmap-tab is-active" href="#roadmap" aria-current="location" aria-controls="roadmap"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"/></svg>路线图</a>
    <a class="roadmap-tab" href="#changelog" aria-controls="changelog"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 7v5l3 2m6-2a9 9 0 1 1-9-9 9 9 0 0 1 9 9Z"/></svg>更新记录</a>
  </nav>
</header>

<div class="roadmap-layout section-shell">
  <aside class="roadmap-periods" aria-label="更新记录时间段"><strong>2026</strong><a class="is-current" href="#changes-october" aria-current="date">十月</a><a href="#changes-september">九月</a><span class="roadmap-older">更早</span></aside>
  <div class="roadmap-main">
    <section id="roadmap" class="roadmap-section" aria-labelledby="roadmap-title">
      <div class="roadmap-section-heading"><h2 id="roadmap-title">路线图</h2><p>各项目近期的计划与发展方向。</p></div>
      <div class="roadmap-projects">
        <article id="roadmap-lingua" class="roadmap-project"><div class="roadmap-project-intro"><div><h3><a href="{{ '/zh/projects/lingua-pilot/' | relative_url }}">Lingua<span>Pilot</span></a></h3><p>根据当前需求开展短时语言学习。</p><div class="roadmap-tags"><span>移动应用</span><span>Android</span><span>Kotlin</span></div></div></div><ul class="roadmap-tasks"><li class="is-progress"><span>优化多用户场景下生成学习卡片的成本</span><em>进行中</em></li><li class="is-progress"><span>建立已学卡片数据库以避免重复，并缩短 AI 指令以降低新内容生成成本</span><em>进行中</em></li><li><span>奖励与排行榜</span><em>计划中</em></li><li><span>新的学习模式</span><em>计划中</em></li></ul></article>
        <article id="roadmap-writing" class="roadmap-project"><div class="roadmap-project-intro"><div><h3><a href="{{ '/zh/projects/writing-assistant-android/' | relative_url }}">AI Writing Assistant</a></h3><p>借助 AI 写作、修改和翻译文本的工具。</p><div class="roadmap-tags"><span>移动应用</span><span>AI</span><span>效率</span></div></div></div><ul class="roadmap-tasks"><li class="is-progress"><span>重新设计界面</span><em>进行中</em></li><li class="is-progress"><span>更多文本修改模式</span><em>进行中</em></li><li class="is-progress"><span>支持更多语言</span><em>进行中</em></li><li class="is-progress"><span>改善与其他应用的兼容性</span><em>进行中</em></li></ul></article>
        <article id="roadmap-finance" class="roadmap-project"><div class="roadmap-project-intro"><div><h3><a href="{{ '/zh/projects/finance-manager/' | relative_url }}">Finance Manager</a></h3><p>用于财务管理和支出分析的工具。</p><div class="roadmap-tags"><span>桌面应用</span><span>财务</span><span>自动化</span></div></div></div><ul class="roadmap-tasks"><li class="is-progress"><span>需求分析</span><em>进行中</em></li><li><span>技术选型</span><em>计划中</em></li><li><span>系统架构设计</span><em>计划中</em></li><li><span>导入交易记录</span><em>计划中</em></li><li><span>自动分类</span><em>计划中</em></li></ul></article>
        <article id="roadmap-hunter" class="roadmap-project"><div class="roadmap-project-intro"><div><h3><a href="{{ '/zh/projects/youtube-hunter/' | relative_url }}">YouTube <span>Hunter</span></a></h3><p>用于整理视频搜索结果并保存个人评价的应用。</p><div class="roadmap-tags"><span>Windows 应用</span><span>搜索</span><span>工作流程</span></div></div></div><ul class="roadmap-tasks"><li class="is-complete"><span>首个可运行版本，2026 年 10 月 16 日</span><em>已完成</em></li><li class="is-complete"><span>修复视频分析错误</span><em>已完成</em></li><li class="is-progress"><span>测试完整工作流程</span><em>进行中</em></li><li><span>探索收集 YouTube 数据的其他方法</span><em>计划中</em></li></ul></article>
      </div>
    </section>
    <section id="changelog" class="roadmap-section changelog-section" aria-labelledby="changelog-title">
      <div class="roadmap-section-heading"><h2 id="changelog-title">最新动态</h2><p>各项目最重要的更新。</p></div>
      <div id="changes-october" class="change-month"><h3>2026 年 10 月</h3><ol class="change-list">
        <li class="is-current"><time datetime="2026-10-24">2026 年 10 月 24 日</time><div class="change-content"><div class="change-meta"><span class="change-project">YouTube Hunter</span><span class="change-type">测试</span></div><h4>视频分析问题修复完成</h4><p>我已修复视频分析错误，目前正在测试应用中的完整工作流程。</p></div></li>
        <li><time datetime="2026-10-16">2026 年 10 月 16 日</time><div class="change-content"><div class="change-meta"><span class="change-project">YouTube Hunter</span><span class="change-type">首个版本</span></div><h4>应用的首个可运行版本</h4><p>YouTube Hunter 已有可运行版本。接下来计划进行测试、修复视频分析问题，并评估其他收集 YouTube 数据的方法。</p></div></li>
        <li><time datetime="2026-10-06">2026 年 10 月 6 日</time><div class="change-content"><div class="change-meta"><span class="change-project">LinguaPilot</span><span class="change-type">优化</span></div><h4>优化学习卡片生成成本</h4><p>加入限制重复生成相同内容的机制，以减少令牌用量和成本。</p></div></li>
        <li><time datetime="2026-10-04">2026 年 10 月 4 日</time><div class="change-content"><div class="change-meta"><span class="change-project">LinguaPilot</span><span class="change-type">安全</span></div><h4>API 密钥保护</h4><p>加强 API 密钥的存储保护，并改进应用处理密钥的方式。</p></div></li>
        <li><time datetime="2026-10-02">2026 年 10 月 2 日</time><div class="change-content"><div class="change-meta"><span class="change-project change-project-violet">AI Writing Assistant</span><span class="change-type">改进</span></div><h4>改善跨应用使用体验</h4><p>改善在不同文本输入框中的表现，以及与常用应用的兼容性。</p></div></li>
      </ol></div>
      <div id="changes-september" class="change-month"><h3>2026 年 9 月</h3><ol class="change-list">
        <li><time datetime="2026-09-23">2026 年 9 月 23 日</time><div class="change-content"><div class="change-meta"><span class="change-project">LinguaPilot</span><span class="change-type">开发</span></div><h4>增加更多语言</h4><p>计划增加更多支持较少的语言，例如在前往意大利或罗马尼亚前，帮助用户更方便地学习。</p></div></li>
        <li><time datetime="2026-09-17">2026 年 9 月 17 日</time><div class="change-content"><div class="change-meta"><span class="change-project">Finance Manager</span><span class="change-type">分析</span></div><h4>开始需求分析</h4><p>已开始收集和梳理需求，随后将进行技术选型和系统架构设计。</p></div></li>
        <li><time datetime="2026-09-12">2026 年 9 月 12 日</time><div class="change-content"><div class="change-meta"><span class="change-project change-project-violet">AI Writing Assistant</span><span class="change-type">兼容性</span></div><h4>解决与银行应用相关的问题</h4><p>修复了启用 AI Writing Assistant 时可能妨碍切换到银行应用的问题，改善了与手机银行应用的兼容性。</p></div></li>
      </ol></div>
    </section>
  </div>
</div>
