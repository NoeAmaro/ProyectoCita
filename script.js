document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    console.log('Datos del formulario:', data); // Verificar los datos antes de enviar

    fetch('https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbxH7zprruyLZYBKRJp2_2s7e85iqZPGSrd_c22FEh_xH2H2qcwFtjgHQDoJkWVQVTqc7g/exec', {  // Aquí va tu URL con el proxy
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la red');
        }
        return response.json();
    })
    .then(data => {
        console.log('Respuesta del servidor:', data); // Verificar la respuesta del servidor
        if (data.status === 'success') {
            document.getElementById('confirmation').classList.remove('hidden');
            event.target.reset();
        } else {
            alert('Hubo un error al agendar su cita. Inténtelo de nuevo.');
        }
    })
    .catch(error => {
        console.error('Error:', error); // Verificar errores
        alert('Hubo un error al agendar su cita. Inténtelo de nuevo.');
    });
});

