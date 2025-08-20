fetch('/HandiFunWorld/json/hnpw.json')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('modalsContainer');

      data.forEach(modalData => {
        // Crée le conteneur de la carte
        const handinfo = document.createElement('div');
        handinfo.className = 'handinfo-container';

        // Ajouter le titre au-dessus de la miniature
        if(modalData.title) {
          const title = document.createElement('h2');
          title.textContent = modalData.title;
          title.className = 'handinfo-title';
          handinfo.appendChild(title);
        }

        // Image miniature
        const img = document.createElement('img');
        img.src = modalData.thumbnail;
        img.alt = 'miniature';
        handinfo.appendChild(img);

        // Bouton
        const button = document.createElement('button');
        button.textContent = 'Plus d\'informations';
        button.dataset.modal = modalData.id;
        handinfo.appendChild(button);

        // Ajoute la carte au container
        container.appendChild(handinfo);

        // Crée la modale (placée en dehors du container)
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.id = modalData.id;

        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';

        const close = document.createElement('span');
        close.className = 'close';
        close.innerHTML = '&times;';
        modalContent.appendChild(close);

        modalData.images.forEach(imgSrc => {
          const modalImg = document.createElement('img');
          modalImg.src = imgSrc;
          modalImg.alt = 'image';
          modalContent.appendChild(modalImg);
        });

        modal.appendChild(modalContent);
        document.body.appendChild(modal); // ← Ajoute la modale dans le <body>, pas dans le grid

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