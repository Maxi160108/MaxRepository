function pais() {
  alert("Loading weather report...");
}

function hide(element) {
  element.parentElement.remove();
}

const select = document.getElementById("mySelect");
select.addEventListener("change", cambiarTemperatura);

function cambiarTemperatura() {
  const opcion = select.value; // "celsius" o "fahrenheit"
  const highTemps = document.querySelectorAll(".temp-high");
  const lowTemps = document.querySelectorAll(".temp-low");

  // Recorremos todas las temperaturas
  highTemps.forEach((temp) => {
    let valor = parseInt(temp.textContent);
    temp.textContent = convertirTemperatura(valor, opcion) + "°";
  });

  lowTemps.forEach((temp) => {
    let valor = parseInt(temp.textContent);
    temp.textContent = convertirTemperatura(valor, opcion) + "°";
  });
}

// Guarda el estado actual (para no reconvertir más de una vez)
let enFahrenheit = false;

function convertirTemperatura(valor, opcion) {
  if (opcion === "fahrenheit" && !enFahrenheit) {
    // Celsius → Fahrenheit
    return Math.round((valor * 9) / 5 + 32);
  } else if (opcion === "celsius" && enFahrenheit) {
    // Fahrenheit → Celsius
    return Math.round(((valor - 32) * 5) / 9);
  }
  return valor;
}

// Cambiamos el estado al final
select.addEventListener("change", () => {
  enFahrenheit = select.value === "fahrenheit";
});
