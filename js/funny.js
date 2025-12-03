const pages = document.querySelectorAll('.page');
let currentPage = 0;

document.getElementById('nextPage').addEventListener('click', () => {
  if (currentPage < pages.length) {
    pages[currentPage].classList.add('flipped');
    currentPage++;
  }
});

document.getElementById('prevPage').addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    pages[currentPage].classList.remove('flipped');
  }
});
