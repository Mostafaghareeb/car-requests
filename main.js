document.getElementById('requestCar').addEventListener('click', () => {
    toggleVisibility('formRequestCar');
});

document.getElementById('cancel').addEventListener('click', () => {
    toggleVisibility('journeys');
    loadJourneys(); // Load journeys for cancellation
});

document.getElementById('inquire').addEventListener('click', () => {
    toggleVisibility('journeys');
    loadJourneys(); // Load journeys for inquiry
});

function toggleVisibility(id) {
    document.querySelectorAll('.form-container, .journeys-container').forEach(el => {
        el.style.display = 'none';
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
    });
    const element = document.getElementById(id);
    element.style.display = 'block';
    setTimeout(() => {
        element.style.opacity = 1;
        element.style.transform = 'translateY(0)';
    }, 50);
}

function loadJourneys() {
    const journeysList = document.querySelector('.journeys-list');
    journeysList.innerHTML = ''; // Clear the previous content
    // Add your logic to load and display journeys
}
