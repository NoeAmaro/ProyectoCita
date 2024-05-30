// script.js

// Escucha el evento de envío del formulario
document.getElementById('appointment-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Evita que la página se recargue al enviar el formulario

  // Obtiene los datos del formulario
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());

  // Realiza una solicitud fetch al script de Google Apps
  fetch('https://script.google.com/macros/s/AKfycbz0j2g4N1JRdodOm64jSkNpSLegINgtc25z6AXKoPFHuBUiZuBzJNHy81gwUyWQXwI43Q/exec', {
    redirect: 'follow',
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
      // Maneja la respuesta del servidor
      if (data.status === 'success') {
        document.getElementById('confirmation').classList.remove('hidden');
        event.target.reset(); // Limpia el formulario
      } else {
        alert('Hubo un error al agendar su cita. Inténtelo de nuevo.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Hubo un error al agendar su cita. Inténtelo de nuevo.');
    });
});
