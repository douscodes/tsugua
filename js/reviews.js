function openModal(id) {
    const modal = document.getElementById(id);
    modal.classList.add("show");
}

function closeModal(id) {
    const modal = document.getElementById(id);
    modal.classList.remove("show");
}

document.addEventListener("DOMContentLoaded", () => {
    const ratings = document.querySelectorAll(".modal-rating");

    ratings.forEach(ratingEl => {
        const rating = parseFloat(ratingEl.getAttribute("data-rating")) || 0;
        let starsHTML = "";

        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        // Full stars
        for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fa-solid fa-star"></i>';
        }

        // Half star
        if (hasHalfStar) {
        starsHTML += '<i class="fa-solid fa-star-half-stroke"></i>';
        }

        // Empty stars
        for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="fa-regular fa-star"></i>';
        }

        starsHTML += ` <span class="rating-text">${rating}/5</span>`;

        ratingEl.innerHTML = starsHTML;
    });
});

