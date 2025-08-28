// Animación para los eventos
document.querySelectorAll('.event').forEach((event, index) => {
    event.style.setProperty('--delay', `${index * 0.2}s`);
});

// Modal
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDate = document.getElementById("modal-date");
const modalDescription = document.getElementById("modal-description");
const closeBtn = document.querySelector(".close");

function showModal(title, date, description) {
    modalTitle.textContent = title;
    modalDate.textContent = date;
    modalDescription.textContent = description;
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
