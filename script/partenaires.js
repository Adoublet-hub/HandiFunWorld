const cube = document.querySelector('.cube');
const faces = document.querySelectorAll('.face');
const popup = document.getElementById('popup');
const popupContent = popup.querySelector('.popup-content');
const closeBtn = popup.querySelector('.close');

let rotateX = 0, rotateY = 0;
let isDragging = false;
let prevX = 0, prevY = 0;

// Rotation souris
cube.addEventListener('mousedown', (e) => {
  isDragging = true;
  prevX = e.clientX;
  prevY = e.clientY;
});
document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  let dx = e.clientX - prevX;
  let dy = e.clientY - prevY;
  rotateY += dx * 0.5;
  rotateX -= dy * 0.5;
  cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  prevX = e.clientX;
  prevY = e.clientY;
});
document.addEventListener('mouseup', () => isDragging = false);

// Rotation tactile mobile
cube.addEventListener('touchstart', (e) => {
  isDragging = true;
  prevX = e.touches[0].clientX;
  prevY = e.touches[0].clientY;
});
cube.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  let dx = e.touches[0].clientX - prevX;
  let dy = e.touches[0].clientY - prevY;
  rotateY += dx * 0.5;
  rotateX -= dy * 0.5;
  cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  prevX = e.touches[0].clientX;
  prevY = e.touches[0].clientY;
});
cube.addEventListener('touchend', () => isDragging = false);

// Pop-up
faces.forEach(face => {
  face.addEventListener('click', () => {
    // Nettoyer anciennes classes
    popup.className = 'popup';
    const direction = Array.from(face.classList).find(cls =>
      ['front', 'back', 'left', 'right', 'top', 'bottom'].includes(cls)
    );
     if (direction) {
      popup.classList.add(direction);
      console.log('Clicked face class:', direction); // Debug
    }
    popup.style.display = 'flex';
  });
});
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});
popup.addEventListener('click', (e) => {
  if (e.target === popup) popup.style.display = 'none';
});
