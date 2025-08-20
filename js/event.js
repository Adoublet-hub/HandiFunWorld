fetch('/HandiFunWorld/json/event.json')
  .then(response => response.json())
  .then(data => {
    data.reverse(); // dernier événement en premier
    const container = document.getElementById('timelineContainer');

    data.forEach((eventData, index) => {
      // Conteneur de l'événement
      const eventBlock = document.createElement('div');
      eventBlock.className = 'event-block';
      eventBlock.classList.add(index % 2 === 0 ? 'left' : 'right');

      // Image miniature
      const img = document.createElement('img');
      img.src = eventData.thumbnail;
      img.alt = eventData.title;
      eventBlock.appendChild(img);

      // Titre
      const title = document.createElement('h3');
      title.textContent = eventData.title;
      eventBlock.appendChild(title);

      // **Date sous le titre**
      const eventDate = document.createElement('p');
      eventDate.textContent = eventData.date;
      eventDate.className = 'event-date'; // classe pour le CSS
      eventBlock.appendChild(eventDate);

      // Bouton "Plus d'infos"
      const button = document.createElement('button');
      button.textContent = "Plus d'infos";
      button.dataset.modal = eventData.id;
      eventBlock.appendChild(button);

      container.appendChild(eventBlock);

      // Modale
      const modal = document.createElement('div');
      modal.className = 'modal';
      modal.id = eventData.id;

      const modalContent = document.createElement('div');
      modalContent.className = 'modal-content';

      const close = document.createElement('span');
      close.className = 'close';
      close.innerHTML = '&times;';
      modalContent.appendChild(close);

      // Titre dans la modale
      const modalTitle = document.createElement('h2');
      modalTitle.textContent = eventData.title;
      modalContent.appendChild(modalTitle);

      // Texte descriptif avant les images
const modalText = document.createElement('p');
modalText.textContent = eventData.description; // ou eventData.text si tu as un champ texte dans ton JSON
modalText.style.color = '#ccc';
modalText.style.marginBottom = '15px';
modalText.style.textAlign = 'center';
modalText.className = 'modal-text';
modalContent.appendChild(modalText);


// Ensuite les images
eventData.images.forEach(imgSrc => {
  const modalImg = document.createElement('img');
  modalImg.src = imgSrc;
  modalImg.alt = eventData.title;
  modalContent.appendChild(modalImg);
});

      modal.appendChild(modalContent);
      document.body.appendChild(modal);

      // Ouvrir/fermer modale
      button.addEventListener('click', () => modal.style.display = 'flex');
      close.addEventListener('click', () => modal.style.display = 'none');
      window.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });
    });
  });
