<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Agendar Cita</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="form-container">
    <h2>Agendar una Cita</h2>
    <form id="appointment-form" action="https://script.google.com/macros/s/AKfycbyYJz3HTE0TXCl6-0SXoVUatG72H0olB67D7adIBQUpRIJrk12BpXeFYjQxmbiIB9vDlw/exec" method="post">
      <div class="form-group">
        <label for="name">Nombre:</label>
        <input type="text" id="name" name="Nombre" required>
      </div>
      <div class="form-group">
        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" name="Correo_electronico" required>
      </div>
      <div class="form-group">
        <label for="phone">Teléfono:</label>
        <input type="tel" id="phone" name="Telefono" required>
      </div>
      <div class="form-group">
        <label for="service">Tipo de Asesoría:</label>
        <select id="service" name="Tipo_de_asesoria" required>
          <option value="" disabled selected>Seleccione una opción</option>
          <option value="penal">Asesoría Penal</option>
          <option value="familiar">Asesoría Familiar</option>
          <option value="civil">Asesoría Civil</option>
          <option value="laboral">Asesoría Laboral</option>
          <option value="fiscal">Asesoría Fiscal</option>
        </select>
      </div>
      <div class="form-group">
        <label for="date">Fecha:</label>
        <input type="date" id="date" name="Fecha" required>
      </div>
      <div class="form-group">
        <label for="time">Hora:</label>
        <input type="time" id="time" name="Hora" required>
      </div>
      <div class="form-group">
        <label for="message">Mensaje:</label>
        <textarea id="message" name="Mensaje" rows="4" placeholder="Escriba su consulta aquí..." required></textarea>
      </div>
      <button type="submit">Agendar Cita</button>
    </form>
    <div id="confirmation" class="hidden">¡Su cita ha sido agendada!</div>
  </div>
  <script src="script.js"></script>
</body>
</html>

