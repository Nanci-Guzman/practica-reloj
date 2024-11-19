//Crear una web con un reloj que tenga la siguiente informacion: Lunes 18 de Noviembre en formato 24hs.
function actualizarReloj() {
  const fechaElement = document.getElementById("fecha");
  const relojElement = document.getElementById("reloj");

  const opcionesFecha = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const fechaActual = new Date();

  // Formato de fecha
  const fechaFormateada = fechaActual.toLocaleDateString(
    "es-ES",
    opcionesFecha
  );
  fechaElement.textContent = fechaFormateada;

  // Formato de hora
  let horas = fechaActual.getHours();
  const minutos = fechaActual.getMinutes().toString().padStart(2, "0");
  const segundos = fechaActual.getSeconds().toString().padStart(2, "0");
  let periodo = "";

  if (horas >= 12) {
    periodo = "PM";
    if (horas > 12) horas -= 12; // Convertir a formato 12 horas
  } else {
    periodo = "AM";
    if (horas === 0) horas = 12; // Para la medianoche
  }

  const horaFormateada24h = `${fechaActual.getHours()}:${minutos}:${segundos}`;
  const horaFormateada12h = `${horas}:${minutos}:${segundos} ${periodo}`;

  // Mostrar ambos formatos
  relojElement.innerHTML = `
      <div>24H: ${horaFormateada24h}</div>
      <div>AM/PM: ${horaFormateada12h}</div>
  `;
}

// Actualizar cada segundo
setInterval(actualizarReloj, 1000);

// Inicializar el reloj al cargar la página
actualizarReloj();
