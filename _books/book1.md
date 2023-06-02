---
layout: default
title: "Book Title"
author: "Book Author"
rating: 4
short_review: "This is a short review of the book..."
long_review: "This is a long review of the book..."
---

<div class="book-page">
    <div class="header">
        <h1>{{ page.title }} - {{ page.author }} - {{ site.ratings[page.rating] | default: "Not rated" }}</h1>
    </div>
    <div class="review-box">
        {{ page.long_review | markdownify }}
    </div>
</div>