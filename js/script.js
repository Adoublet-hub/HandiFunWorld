document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.partner-card');

  cards.forEach(card => {
    const buttons = card.querySelectorAll('.flip-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        card.classList.toggle('flipped');
      });
    });
  });
});
