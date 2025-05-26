Conversación abierta. 1 mensaje sin leer. 

Ir al contenido
Uso de Correo de Fundación Nacional del Comercio para la Educación con lectores de pantalla

3 de 1.315
(sin asunto)
Recibidos

MAX ALEXANDER DIAZ MOSQUERA <maxdiaz@liceovvh.cl>
14:22 (hace 5 minutos)
para mí

function verificar() {
    let edad = parseInt(prompt("Ingresa tu edad"));
    let condiciones = prompt("Aceptas las condiciones");
    if(edad >= 18 && condiciones == "si") {
        alert("Acceso permitido");
    } else {
        alert("Acceso denegado");
    }
}

function descuento() {
    let edad = parseInt(prompt("Ingresa tu edad"));
    let quest = prompt("Eres estudiante");
    if(edad > 60 || quest == "si") {
        alert("Descuento aplicado");
    } else {
        alert("No tienes descuento");
    }
}

function validacion() {
    let usuario = prompt("Registra tu nombre de usuario: ");
    let contraseña = prompt("Registra tu contraseña: ");
    if(!usuario || !contraseña){
        alert("Error: Debes ingresar usuario y contraseña");
        return;
    } else {
        alert("Inicio de sesión exitoso");
        return;
    }
}

function encendido() {
    let energiaSuficiente = parseInt(prompt("¿Cuanta bateria le queda a la maquina?"));
    let interruptorEncendido = prompt("¿El interuptor esta encendido?");
    if (energiaSuficiente >= 15 && interruptorEncendido == "si") {
        alert("Máquina encendida");
    } else {
        alert("No se puede encender la máquina");
    }
}

function accesoRestringido() {
    let bloqueado = "jose";
    let usuario = prompt("Ingrese su usuario:");
    let tieneCredenciales = prompt("ingrese su credencial:");
    if (!tieneCredenciales || usuario == bloqueado) {
        alert("Acceso denegado");
    } else {
        alert("Acceso permitido");
    }
}
