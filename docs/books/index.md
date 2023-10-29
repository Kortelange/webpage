---
layout: default
title: Books
---

<div class="books-page-title">
    <h1>{{ page.title }}</h1>
</div>

{% for book in site.books %}
<div class="book-card">
    <div class="header">
        <h2 class="title"><a href="{{ book.url | relative_url }}">{{ book.title }}</a></h2>
        <h2 class="author">{{ book.author }}</h2>
        <h2 class="rating">{{ site.ratings[book.rating] | default: "Not rated" }}</h2>
    </div>
    <p class="short-review">{{ book.short_review | default: "Short review not available" }}</p>
    <div class="book-links">
        <a href="#" class="expand-short-review">Short Review</a>
        <a href="{{ book.url | relative_url }}" class="long-review">Long Review</a>
    </div>
</div>
{% endfor %}



