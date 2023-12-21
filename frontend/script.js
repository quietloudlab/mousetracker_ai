document.addEventListener('mousemove', (event) => {
    const x = event.clientX; // Get the horizontal coordinate
    const y = event.clientY; // Get the vertical coordinate

    // Optionally, update the display with the current coordinates
    const coordinatesDisplay = document.getElementById('coordinates');
    if (coordinatesDisplay) {
        coordinatesDisplay.textContent = `Mouse Coordinates: ${x}, ${y}`;
    }

    // Send this data to the server
    fetch('/mouse-data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ x, y }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
});