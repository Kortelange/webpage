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
        <h2><a href="{{ book.url | relative_url }}">{{ book.title }}</a></h2>
        <h3>{{ book.author }}</h3>
        <h3>{{ site.ratings[book.rating] | default: "Not rated" }}</h3>
    </div>
    <p class="short-review">{{ book.short_review }}</p>
    <div class="book-links">
        <a href="#" class="expand-short-review">Short Review</a>
        <a href="{{ book.url | relative_url }}" class="long-review">Long Review</a>
    </div>
</div>
{% endfor %}


<script>
    document.addEventListener("DOMContentLoaded", function() {
        const expandLinks = document.querySelectorAll(".expand-short-review");
        
        expandLinks.forEach(link => {
            link.addEventListener("click", function(e) {
                e.preventDefault();
                const bookCard = e.target.closest(".book-card");
                const shortReview = bookCard.querySelector(".short-review");
                
                if (shortReview.style.display === 'block') {
                    shortReview.style.display = 'none';
                    e.target.textContent = "Short Review";
                } else {
                    shortReview.style.display = 'block';
                    e.target.textContent = "Read Less";
                }
                
            });
        });
    });
</script>