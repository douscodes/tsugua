let artworks = {};
let artworksLoaded = false;


// Load artworks.json when artworks page is open
fetch("json/artworks.json")
    .then(response => {
        if (!response.ok) throw new Error("HTTP error " + response.status);
        return response.json();
    })
    .then(data => {
        artworks = data;
        artworksLoaded = true;
        console.log("Artworks loaded:", artworks);
    })
    .catch(err => console.error("Error loading artworks.json:", err));
    
function openArtModal(id) {
    if (!artworksLoaded) {
        console.warn("Artworks data not loaded yet!");
        return;
    }
    const art = artworks[id];

    if (!art) {
        console.warn(`Artwork "${id}" not found!`);
        return;
    }

    const modal = document.getElementById("artModal");
    document.getElementById("artModalImg").src = art.src;
    document.getElementById("artModalTitle").textContent = art.title;
    document.getElementById("artModalDesc").textContent = art.desc;

    modal.classList.add("show");
}

function closeArtModal() {
    const modal = document.getElementById("artModal");
    modal.classList.remove("show");
}