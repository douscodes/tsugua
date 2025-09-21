let movies = {};

// Load movies.json
fetch("json/movies.json")
  .then(response => {
    if (!response.ok) throw new Error("HTTP error " + response.status);
    return response.json();
  })
  .then(data => {
    movies = data;
    renderMovies();
  })
  .catch(err => console.error("Error loading movies.json:", err));

function renderMovies() {
  const grid = document.querySelector(".reviews-grid");
  if (!grid) return;

  for (const id in movies) {
    const movie = movies[id];

    // Create poster image
    const img = document.createElement("img");
    img.src = movie.poster;
    img.alt = movie.title;
    img.classList.add("poster");
    img.onclick = () => openModal(`modal-${id}`);
    grid.appendChild(img);

    // Create modal
    const modal = document.createElement("div");
    modal.id = `modal-${id}`;
    modal.classList.add("modal");
    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="movie-title">${movie.title}</h2>
          <div class="header-right">
            <span class="movie-director"><i class="fa-solid fa-video"></i> ${movie.director}</span>
            <span class="close" onclick="closeModal('modal-${id}')">&times;</span>
          </div>
        </div>
        <div class="modal-rating" data-rating="${movie.rating}"></div>
        <p class="modal-review">${movie.review}</p>
      </div>
    `;
    document.body.appendChild(modal);
  }

  renderRatings();
}

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

// THIS IS FOR GENERATING THE REVIEW STARS IN THE MODAL
function renderRatings() {
    const ratings = document.querySelectorAll(".modal-rating");

    ratings.forEach(ratingEl => {
        const rating = parseFloat(ratingEl.getAttribute("data-rating")) || 0;
        let starsHTML = "";

        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        // FULL STARS
        for (let i = 0; i < fullStars; i++) {
            starsHTML += '<i class="fa-solid fa-star"></i>';
        }

        // HALF STAR
        if (hasHalfStar) {
            starsHTML += '<i class="fa-solid fa-star-half-stroke"></i>';
        }

        // EMPTY STARS
        for (let i = 0; i < emptyStars; i++) {
            starsHTML += '<i class="fa-regular fa-star"></i>';
        }

        starsHTML += ` <span class="rating-text">${rating}/5</span>`;

        ratingEl.innerHTML = starsHTML;
    });
}

