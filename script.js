document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    fetch('https://script.google.com/macros/s/AKfycbzihmkYe5Le5IJcSGARxL9FKAOavJ0kkACt4pxlwkXLD7jOefx5KAWkaPzK8ijo4g4s8Q/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            document.getElementById('confirmation').classList.remove('hidden');
            event.target.reset();
        } else {
            alert('Hubo un error al agendar su cita. Inténtelo de nuevo.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un error al agendar su cita. Inténtelo de nuevo.');
    });
});
