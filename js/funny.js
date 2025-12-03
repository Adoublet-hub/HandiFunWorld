let currentPage = 0;
const pages = document.querySelectorAll(".page");

function showPage(index) {
  pages.forEach((p, i) => {
    p.classList.toggle("active", i === index);
  });
}

// Affiche la première page au chargement
showPage(currentPage);

// Boutons
document.getElementById("next").onclick = () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
};

document.getElementById("prev").onclick = () => {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
};
