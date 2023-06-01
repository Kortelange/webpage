---
layout: default
title: Books
---

# {{ page.title }}

Here are my book reviews:

{% for book in site.books %}
    ## [{{ book.title }}]({{ site.baseurl }}{{ book.url }})
    Rating: {{ book.rating }}
    Short Review: {{ book.short_review }}
{% endfor %}
