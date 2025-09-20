// ARTWORKS PAGE


let artworks = {};

// Load artworks.json when artworks page is open
fetch("artworks.json")
    .then(response => {
        if (!response.ok) throw new Error("HTTP error " + response.status);
        return response.json();
    })
    .then(data => {
        artworks = data;
        console.log("Artworks loaded:", artworks);
    })
    .catch(err => console.error("Error loading artworks.json:", err));
    
function openArtModal(id) {
    const art = artworks[id];
    if (!art) {
        console.warn(`Artwork "${id}" not found!`);
        return;
    }

    document.getElementById("artModalImg").src = art.src;
    document.getElementById("artModalTitle").textContent = art.title;
    document.getElementById("artModalDesc").textContent = art.desc;

    const modal = document.getElementById("artModal");
    modal.classList.add("show");  // 🔹 add show class
}

function closeArtModal() {
    const modal = document.getElementById("artModal");
    modal.classList.remove("show"); // 🔹 remove show class

    // optional: reset content after animation (0.3s)
    setTimeout(() => {
        document.getElementById("artModalImg").src = "";
        document.getElementById("artModalTitle").textContent = "";
        document.getElementById("artModalDesc").textContent = "";
    }, 300);
}

window.onclick = function(event) {
    const modal = document.getElementById("artModal");
    // Only close if the click was on the overlay (not inside the content)
    if (event.target === modal) {
      closeArtModal();
    }
  };


// ARTWORKS PAGE

// REVIEWS PAGE

function openModal(id) {
    document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

window.addEventListener("click", function(event) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
    });
});

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

// REVIEWS PAGE


