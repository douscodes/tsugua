const movies = [
    {
        id: "oldboy",
        title: "Oldboy (2003)",
        director: "Park Chan-wook",
        rating: 4,
        review: `What I like best about oldboy are the various storytelling devices used by the movie.
                On one hand you have the main character telling the story from his pov so you don't have the full picture.
                Then you are given the puzzle pieces to fill in those blanks for yourself.
                The cinematography of this movie is one of a kind and the more you pay attention, the more you realize the underlying meaning of what is shown to you.
                It's a movie I really enjoyed watching and I'd recommend others watch but not watch again myself.
                The way all the pieces fit into place at the end really scratched my brain.`,
        poster: "images/posters/oldboy.jpg"
    },
    {
        id: "itswhatsinside",
        title: "It's What's Inside (2024)",
        director: "Greg Jardin",
        rating: 3.5,
        review: `The unique way the movie portrayed flashbacks was really cool for me.
                The cinematic use of colors in the scenes really improved the storytelling.
                The story itself is a bit above average I guess, some scenes kind of made me cringe.
                Overall it's a movie I would recommend to a friend or watch again with them.
                One of the very few movies where I absolutely abhor the protagonist/main character.`,
        poster: "images/posters/itswhatsinside.jpg"
    }
];

// THIS CREATES THE POSTERS IN REVIEWS.HTML
const grid = document.querySelector(".reviews-grid");

movies.forEach(movie => {
    const img = document.createElement("img");
    img.src = movie.poster;
    img.alt = movie.title;
    img.classList.add("poster");
    img.onclick = () => openModal(`modal-${movie.id}`);
    grid.appendChild(img);
});

// THIS CREATES THE MODALS IN REVIEWS.HTML
movies.forEach(movie => {
    const modal = document.createElement("div");
    modal.id = `modal-${movie.id}`;
    modal.classList.add("modal");

    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="movie-title">${movie.title}</h2>
                <div class="header-right">
                    <span class="movie-director"><i class="fa-solid fa-video"></i> ${movie.director}</span>
                    <span class="close" onclick="closeModal('modal-${movie.id}')">&times;</span>
                </div>
            </div>
            <div class="modal-rating" data-rating="${movie.rating}"></div>
            <p class="modal-review">${movie.review}</p>
        </div>
    `;

    document.body.appendChild(modal);
});

// THIS IS FOR GENERATING THE REVIEW STARS IN THE MODAL
document.addEventListener("DOMContentLoaded", () => {
    const ratings = document.querySelectorAll(".modal-rating");

    ratings.forEach(ratingEl => {
        const rating = parseFloat(ratingEl.getAttribute("data-rating")) || 0;
        let starsHTML = "";

        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        // FULL
        for (let i = 0; i < fullStars; i++) {
            starsHTML += '<i class="fa-solid fa-star"></i>';
        }

        // HALF
        if (hasHalfStar) {
            starsHTML += '<i class="fa-solid fa-star-half-stroke"></i>';
        }

        // EMPTY
        for (let i = 0; i < emptyStars; i++) {
            starsHTML += '<i class="fa-regular fa-star"></i>';
        }

        starsHTML += ` <span class="rating-text">${rating}/5</span>`;

        ratingEl.innerHTML = starsHTML;
    });
});
