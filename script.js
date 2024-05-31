// Escucha el evento de envío del formulario
document.getElementById('appointment-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que la página se recargue al enviar el formulario

  // Obtiene los datos del formulario
  var formData = new FormData(event.target);

  // Realiza una solicitud fetch al script de Google Apps Script
  fetch('https://script.google.com/macros/s/AKfycbyNZW7YL7_YR6xFlpNIyA0ke7OemnKChR1kvV_7qW9LBvKeJfaF8Ml3graEPb_i4MYONw/exec', {
    method: 'POST',
    body: formData // Enviar como FormData
  })
  .then(function(response) {
    return response.json(); // Convierte la respuesta a JSON
  })
  .then(function(data) {
    // Maneja la respuesta del servidor
    if (data.result === 'success') {
      // Muestra el mensaje de confirmación y limpia el formulario
      document.getElementById('confirmation').classList.remove('hidden');
      event.target.reset();
    } else {
      // Maneja los errores, por ejemplo, mostrando un mensaje al usuario
      alert('Hubo un error al agendar su cita. Inténtelo de nuevo.');
    }
  })
  .catch(function(error) {
    console.error('Error:', error);
    alert('Hubo un error al agendar su cita. Inténtelo de nuevo.');
  });
});

