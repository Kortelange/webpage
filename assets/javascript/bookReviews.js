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