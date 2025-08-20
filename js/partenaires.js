document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.partner-card');

  cards.forEach(card => {
    const frontBtn = card.querySelector('.card-front .flip-btn');
    const backBtn = card.querySelector('.card-back .flip-btn');

    // Clique sur "Plus d'info"
    frontBtn.addEventListener('click', () => {
      card.classList.add('flipped');
    });

    // Clique sur "Retour"
    backBtn.addEventListener('click', () => {
      card.classList.remove('flipped');
    });
  });
});

// Sélection du popup
const popup = document.getElementById("imgPopup");
const popupImg = document.getElementById("popupImg");
const closePopup = popup.querySelector(".close");

// Cibler toutes les images de la face arrière
document.querySelectorAll(".card-back img").forEach(img => {
  img.addEventListener("click", () => {
    popup.style.display = "flex"; // affiche le popup
    popupImg.src = img.src;       // met la bonne image
  });
});

// Fermer le popup avec la croix
closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

// Fermer si on clique en dehors de l'image
popup.addEventListener("click", e => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});

