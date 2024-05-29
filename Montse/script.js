document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la forma tradicional
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const message = document.getElementById('message').value;
  
    // Aquí puedes agregar la lógica para enviar los datos del formulario a un servidor
  
    document.getElementById('appointment-form').reset();
    document.getElementById('confirmation').classList.remove('hidden');
    setTimeout(() => {
      document.getElementById('confirmation').classList.add('hidden');
    }, 3000);
  });
  