<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agendar Cita</title>
</head>
<body>
    <form id="appointment-form">
        <input type="text" name="name" placeholder="Nombre" required>
        <input type="email" name="email" placeholder="Correo Electrónico" required>
        <input type="text" name="phone" placeholder="Teléfono" required>
        <input type="text" name="service" placeholder="Tipo de Asesoría" required>
        <input type="date" name="date" required>
        <input type="time" name="time" required>
        <textarea name="message" placeholder="Mensaje"></textarea>
        <button type="submit">Agendar Cita</button>
    </form>

    <div id="confirmation" class="hidden">Cita agendada con éxito!</div>

    <script>
        document.getElementById('appointment-form').addEventListener('submit', function(event) {
            event.preventDefault();

            const formData = new FormData(event.target);
            const data = Object.fromEntries(formData.entries());

            console.log('Datos del formulario:', data); // Verificar los datos antes de enviar

            fetch('https://script.google.com/macros/s/AKfycbye6gDRRY1l7mYv0SKVmhaNYpwdjE3t6r41jenMBWAXlkatI4DnaVUh6n5ybgBdzjl8iA/exec', {
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
    </script>
</body>
</html>
