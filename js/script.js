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


