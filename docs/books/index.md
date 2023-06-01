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
        <a href="{{ book.url | relative_url }}"><h1>{{ book.title }}</h1></a>
        <div class="rating">{{ book.rating }}/5</div>
    </div>
    <p>{{ book.short_review }}</p>
</div>
{% endfor %}
