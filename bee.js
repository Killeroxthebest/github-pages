// script.js
document.addEventListener('DOMContentLoaded', function() {
  const bees = document.querySelectorAll('.draggable-bee');

  bees.forEach(bee => {
    let isDragging = false;
    let offsetX, offsetY;

    // Mouse down event: Start dragging
    bee.addEventListener('mousedown', (e) => {
      isDragging = true;

      // Calculate the offset between the mouse position and the bee's position
      offsetX = e.clientX - bee.getBoundingClientRect().left;
      offsetY = e.clientY - bee.getBoundingClientRect().top;

      // Bring the bee to the front
      bee.style.zIndex = '1001';
    });

    // Mouse move event: Move the bee
    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;

      // Update the bee's position
      bee.style.left = `${e.clientX - offsetX}px`;
      bee.style.top = `${e.clientY - offsetY}px`;
    });

    // Mouse up event: Stop dragging
    document.addEventListener('mouseup', () => {
      isDragging = false;
      bee.style.zIndex = '1000'; // Reset z-index
    });
  });
});
function addBee() {
  const bee = document.createElement('img');
  bee.className = 'draggable-bee';
  bee.src = 'assets/images/Honeybee.png';
  bee.width = 50;
  bee.style.left = `${Math.random() * window.innerWidth}px`;
  bee.style.top = `${Math.random() * window.innerHeight}px`;
  document.body.appendChild(bee);

  // Apply drag functionality to the new bee
  setupDrag(bee);
}

// Call this function to add a bee
addBee();
const beeArea = document.getElementById('bee-area');

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  // Get the bee area's boundaries
  const rect = beeArea.getBoundingClientRect();

  // Calculate new position within the bee area
  let newX = e.clientX - offsetX;
  let newY = e.clientY - offsetY;

  // Clamp the position to the bee area
  newX = Math.max(rect.left, Math.min(newX, rect.right - bee.width));
  newY = Math.max(rect.top, Math.min(newY, rect.bottom - bee.height));

  bee.style.left = `${newX}px`;
  bee.style.top = `${newY}px`;
});
