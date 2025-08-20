// Charge le JSON des événements
fetch('/HandiFunWorld/json/event.json')
  .then(response => response.json())
  .then(data => {
    data.reverse(); // <-- renverse l'ordre des événements
    const container = document.getElementById('timelineContainer');

    data.forEach((eventData, index) => {

      // Crée le conteneur de l'événement
      const eventBlock = document.createElement('div');
      eventBlock.className = 'event-block';
      eventBlock.classList.add(index % 2 === 0 ? 'left' : 'right'); // quinconce

      // Image miniature
      const img = document.createElement('img');
      img.src = eventData.thumbnail;
      img.alt = eventData.title;
      eventBlock.appendChild(img);

      // Titre
      const title = document.createElement('h3');
      title.textContent = eventData.title;
      eventBlock.appendChild(title);

      // Bouton "Plus d'infos"
      const button = document.createElement('button');
      button.textContent = "Plus d'infos";
      button.dataset.modal = eventData.id;
      eventBlock.appendChild(button);

      container.appendChild(eventBlock);

      // Crée la modale
      const modal = document.createElement('div');
      modal.className = 'modal';
      modal.id = eventData.id;

      const modalContent = document.createElement('div');
      modalContent.className = 'modal-content';

      const close = document.createElement('span');
      close.className = 'close';
      close.innerHTML = '&times;';
      modalContent.appendChild(close);

      // Titre de la modale
const modalTitle = document.createElement('h2');
modalTitle.textContent = eventData.title;
modalContent.appendChild(modalTitle);

// Date de l'événement (plus petit texte)
const modalDate = document.createElement('p');
modalDate.textContent = eventData.date;
modalDate.style.fontSize = '0.9rem';
modalDate.style.color = '#555';
modalContent.appendChild(modalDate);

      // Ajoute toutes les images de l'événement
      eventData.images.forEach(imgSrc => {
        const modalImg = document.createElement('img');
        modalImg.src = imgSrc;
        modalImg.alt = eventData.title;
        modalContent.appendChild(modalImg);
      });

      modal.appendChild(modalContent);
      document.body.appendChild(modal);

      // Ouvre la modale
      button.addEventListener('click', () => {
        modal.style.display = 'flex';
      });

      // Ferme la modale
      close.addEventListener('click', () => {
        modal.style.display = 'none';
      });

      window.addEventListener('click', e => {
        if (e.target === modal) {
          modal.style.display = 'none';
        }
      });
    });
  });
