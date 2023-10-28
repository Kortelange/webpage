document.addEventListener("DOMContentLoaded", function() {
    const expandLinks = document.querySelectorAll(".expand-short-review");
    
    expandLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const bookCard = e.target.closest(".book-card");
            const shortReview = bookCard.querySelector(".short-review");
            

            if (shortReview.classList.contains('active')) {
                shortReview.classList.remove('active');
                e.target.textContent = "Short Review";
            } else {
                shortReview.classList.add('active');
                e.target.textContent = "Read Less";
            }
            
        });
    });
});