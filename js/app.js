function actualizarReloj() {
  const fechaElement = document.getElementById("fecha");
  const relojElement = document.getElementById("reloj");

  // Crear la fecha actual
  const fechaActual = new Date();

  // Configuración de la fecha
  const opcionesFecha = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const fechaFormateada = fechaActual.toLocaleDateString(
    "es-ES",
    opcionesFecha
  );
  fechaElement.textContent = fechaFormateada;

  // Configuración del reloj en formato AM/PM
  let horas = fechaActual.getHours();
  const minutos = fechaActual.getMinutes().toString().padStart(2, "0");
  const segundos = fechaActual.getSeconds().toString().padStart(2, "0");
  let periodo = "AM";

  if (horas >= 12) {
    periodo = "PM";
    if (horas > 12) horas -= 12; // Convertir a formato de 12 horas
  }

  if (horas === 0) horas = 12; // Medianoche es 12 AM

  const horaFormateada = `${horas}:${minutos}:${segundos} ${periodo}`;
  relojElement.textContent = horaFormateada;
}

// Actualizar el reloj cada segundo
setInterval(actualizarReloj, 1000);

// Inicializar el reloj al cargar la página
actualizarReloj();
