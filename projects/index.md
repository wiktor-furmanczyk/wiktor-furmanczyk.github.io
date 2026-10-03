---
layout: default
title: Projekty
description: Lista publicznie opisanych projektów Wiktora Furmańczyka.
permalink: /projects/
---

# Projekty

Poniżej znajdują się projekty, których materiały zostały przygotowane, sprawdzone i zatwierdzone do publicznej prezentacji.

{% assign project_pages = site.pages | where: "layout", "project" | sort: "title" %}

{% for project in project_pages %}
- [{{ project.title }}]({{ project.url | relative_url }})
{% endfor %}

[Wróć na stronę główną](/)
