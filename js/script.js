// CLOSE MODAL
function closeModalByElement(modal) {
    if (modal.id === "artModal") {
        closeArtModal();
    } else {
        closeModal(modal.id);
    }
}

// CLOSE MODAL ON OVERLAY CLICK
window.addEventListener("click", (event) => {
    const modals = document.querySelectorAll(".modal, #artModal");
    modals.forEach(modal => {
        if (event.target === modal && modal.classList.contains("show")) {
            closeModalByElement(modal);
        }
    });
});

// CLOSE MODAL ON ESC
window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        const modals = document.querySelectorAll(".modal.show, #artModal.show");
        modals.forEach(modal => closeModalByElement(modal));
    }
});