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