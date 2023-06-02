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
        <h1><a href="{{ book.url | relative_url }}">{{ book.title }}</a></h1>
        <h1>{{ book.author }}</h1>
        <h1>{{ site.ratings[book.rating] | default: "Not rated" }}</h1>
    </div>
    <p>{{ book.short_review }}<br /> <a href="{{ book.url | relative_url }}">Read More</a></p>

</div>
{% endfor %}
