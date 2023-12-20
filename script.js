document.addEventListener('mousemove', (event) => {
    const x = event.clientX; // Get the horizontal coordinate
    const y = event.clientY; // Get the vertical coordinate
    const coordinatesDisplay = document.getElementById('coordinates');

    // Update the display with the new coordinates
    coordinatesDisplay.textContent = `${x}, ${y}`;

    // Move the AI mouse
    const aiMouse = document.getElementById('ai-mouse');
    aiMouse.style.left = x + 'px';
    aiMouse.style.top = y + 'px';
});
