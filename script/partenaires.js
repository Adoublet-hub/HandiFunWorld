  const cube = document.querySelector('.cube');
  const faces = document.querySelectorAll('.face');
  const popup = document.getElementById('popup');
  const popupContent = popup.querySelector('.popup-content');
  const closeBtn = popup.querySelector('.close');

  // === Rotation automatique + interaction ===
  let rotateX = 0, rotateY = 0;
  let isDragging = false;
  let autoRotate = true;
  let previousX, previousY;

  let lastInteraction = Date.now();
  const idleDelay = 1000; // 5 secondes d'inactivité = reprise rotation auto

  function updateTransform() {
    cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  function animateCube() {
    if (autoRotate && Date.now() - lastInteraction > idleDelay) {
      rotateY += 0.3;
      rotateX += 0.1;
      updateTransform();
    }
    requestAnimationFrame(animateCube);
  }

  // Souris
  cube.addEventListener('mousedown', e => {
    isDragging = true;
    autoRotate = false;
    lastInteraction = Date.now();
    previousX = e.clientX;
    previousY = e.clientY;
  });

  document.addEventListener('mousemove', e => {
    if (!isDragging) return;
    const dx = e.clientX - previousX;
    const dy = e.clientY - previousY;
    rotateY += dx * 0.5;
    rotateX -= dy * 0.5;
    updateTransform();
    previousX = e.clientX;
    previousY = e.clientY;
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    lastInteraction = Date.now();
  });

  // Tactile
  cube.addEventListener('touchstart', e => {
    isDragging = true;
    autoRotate = false;
    lastInteraction = Date.now();
    const touch = e.touches[0];
    previousX = touch.clientX;
    previousY = touch.clientY;
  });

  cube.addEventListener('touchmove', e => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const dx = touch.clientX - previousX;
    const dy = touch.clientY - previousY;
    rotateY += dx * 0.5;
    rotateX -= dy * 0.5;
    updateTransform();
    previousX = touch.clientX;
    previousY = touch.clientY;
  });

  cube.addEventListener('touchend', () => {
    isDragging = false;
    lastInteraction = Date.now();
  });

  // Démarrer rotation auto
  animateCube();

  // === Pop-up logique ===
  faces.forEach(face => {
    face.addEventListener('click', () => {
      popup.className = 'popup'; // reset
      const direction = Array.from(face.classList).find(cls =>
        ['front', 'back', 'left', 'right', 'top', 'bottom'].includes(cls)
      );
      if (direction) {
        popup.classList.add(direction);
      }
      popup.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  popup.addEventListener('click', e => {
    if (e.target === popup) {
      popup.style.display = 'none';
    }
  });
