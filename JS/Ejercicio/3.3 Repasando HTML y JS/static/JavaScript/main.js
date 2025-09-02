// Arreglo para guardar estudiantes
const estudiantes = [];

// Referencias a elementos del DOM
const formEstudiante = document.getElementById("formEstudiante");
const resultadoEstudiante = document.getElementById("resultadoEstudiante");
const errorEstudiante = document.getElementById("errorEstudiante");
const btnLimpiar = document.getElementById("btnLimpiar");
const listaEstudiantes = document.getElementById("listaEstudiantes");

// Función para capitalizar nombre
function capitalizarNombre(nombre) {
  return nombre
    .trim()
    .split(" ")
    .map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase())
    .join(" ");
}

// Escuchar evento de envío del formulario
formEstudiante.addEventListener("submit", (e) => {
  e.preventDefault();
  errorEstudiante.textContent = "";
  resultadoEstudiante.textContent = "";

  // Tomar valores
  const nombre = document.getElementById("nombre").value;
  const edad = parseInt(document.getElementById("edad").value);
  const curso = document.getElementById("curso").value;
  const jornada = document.querySelector("input[name='jornada']:checked");
  const aceptaReglamento = document.getElementById("reglamento").checked;

  // Validaciones
  if (nombre.trim().length < 2) {
    errorEstudiante.textContent = "⚠️ El nombre debe tener al menos 2 caracteres.";
    return;
  }
  if (isNaN(edad) || edad < 14 || edad > 100) {
    errorEstudiante.textContent = "⚠️ La edad debe estar entre 14 y 100 años.";
    return;
  }
  if (!curso) {
    errorEstudiante.textContent = "⚠️ Debe seleccionar un curso.";
    return;
  }
  if (!jornada) {
    errorEstudiante.textContent = "⚠️ Debe seleccionar una jornada.";
    return;
  }
  if (!aceptaReglamento) {
    errorEstudiante.textContent = "⚠️ Debe aceptar el reglamento.";
    return;
  }

  // Normalizar nombre
  const nombreNormalizado = capitalizarNombre(nombre);

  // Guardar en arreglo
  const estudiante = { nombre: nombreNormalizado, edad, curso, jornada: jornada.value };
  estudiantes.push(estudiante);

  // Contar estudiantes por jornada
  let contador = { Mañana: 0, Tarde: 0 };
  for (let est of estudiantes) {
    contador[est.jornada]++;
  }

  // Mostrar saludo personalizado
  resultadoEstudiante.textContent =
    `Bienvenido/a ${nombreNormalizado}, ${edad} años, ${curso}, jornada ${jornada.value}. ` +
    `Registrados: ${contador.Mañana} en Mañana, ${contador.Tarde} en Tarde.`;

  // Mostrar lista acumulada
  listaEstudiantes.innerHTML = "";
  estudiantes.forEach((est, i) => {
    const li = document.createElement("li");
    li.textContent = `${i + 1}. ${est.nombre}, ${est.edad} años, ${est.curso}, jornada ${est.jornada}`;
    listaEstudiantes.appendChild(li);
  });
});

// Botón limpiar
btnLimpiar.addEventListener("click", () => {
  resultadoEstudiante.textContent = "";
  errorEstudiante.textContent = "";
  listaEstudiantes.innerHTML = "";
  estudiantes.length = 0; // vaciar arreglo
});

// ---------- EJERCICIO 2: Calculadora de Promedio de Notas ----------
const notas = [];
const formNotas = document.getElementById("formNotas");
const resultadoNotas = formNotas.nextElementSibling;
const errorNotas = resultadoNotas.nextElementSibling;

document.getElementById("btnAgregarNota").addEventListener("click", () => {
  errorNotas.textContent = "";
  const nota = parseFloat(document.getElementById("nota").value);
  
  if (isNaN(nota) || nota < 1 || nota > 7) {
    errorNotas.textContent = "La nota debe estar entre 1.0 y 7.0.";
    return;
  }

  notas.push(nota);
  resultadoNotas.textContent = `Notas actuales: ${notas.join(", ")}`;
  document.getElementById("nota").value = "";
});

document.getElementById("btnCalcularPromedio").addEventListener("click", () => {
  errorNotas.textContent = "";
  if (notas.length === 0) {
    errorNotas.textContent = "No hay notas registradas.";
    return;
  }

  let suma = 0;
  for (let n of notas) suma += n;
  const promedio = (suma / notas.length).toFixed(2);

  resultadoNotas.textContent = 
    `Total de notas: ${notas.length}. Listado: [${notas.join(", ")}]. Promedio: ${promedio}. `;

  resultadoNotas.textContent += (promedio >= 4.0) ? "✅ Aprobado" : "❌ Reprobado";
});

document.getElementById("btnLimpiarNotas").addEventListener("click", () => {
  notas.length = 0;
  resultadoNotas.textContent = "";
  errorNotas.textContent = "";
});