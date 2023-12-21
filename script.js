document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    // Update the display as before
    const coordinatesDisplay = document.getElementById('coordinates');
    coordinatesDisplay.textContent = `${x}, ${y}`;

    // Send this data to the server
    fetch('/mouse-data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ x, y }),
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
});


