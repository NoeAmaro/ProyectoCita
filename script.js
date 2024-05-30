document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    fetch('https://script.google.com/macros/s/AKfycbw3uAizGiNE_K8idJU1n2JdWX8ybMnoi8dLvSmsXziNfg7-bTEG07GnkClTmLxJ3IzWtw/exec', {  // Aquí va tu URL
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
