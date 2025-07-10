let compras = []
let colores = ["rojo", "azul"]
let numeros = [10, 20, 30]
let orden = []
let historial = []
let cola = ["Cliente1", "Cliente2", "Cliente3"]
let nombres = ["Pedro", "Juan", "Luis"]
let dias = ["lunes", "miércoles", "jueves"];
let personas = ["Carlos", "María", "Luis", "Ana", "Sofía"];
let tareas = ["comer", "estudiar", "dormir", "jugar", "ver TV", "navegar"];

function ejercicioOne(){
    alert(`Su historial de compras anterior es: ${compras}`)
    compras.push("pan", " leche", " huevos")
    alert(`Su historial de compras actual es: ${compras}`)
}

function ejercicioTwo(){
    alert(`Su historial de compras es: ${compras}`)
    let elementosEliminados = compras.pop()
    alert(`Ahora su historial es: ${compras} y su elemento eliminado es: ${elementosEliminados}`)
}

function ejercicioThree(){
    alert(`Esta era tu lista de colores: ${colores}`)
    colores.unshift("amarillo")
    alert(`Ahora tu lista de colores es esta: ${colores}`)
}

function ejercicioFour(){
    alert(`Esta era tu lista de colores: ${colores}`)
    colores.shift()
    alert(`Ahora tu lista de colores es esta: ${colores}`)
}

function ejercicioFive(){
    alert(`Esta era tu lista de numeros: ${numeros}`)
    numeros.shift()
    numeros.unshift(5)
    numeros.pop()
    alert(`Ahora tu lista de numeros es: ${numeros}`)
}

function ejercicioSix(){
    alert(`Esta era tu lista: ${orden}`)
    orden.unshift(1,2,3)
    alert(`Ahora tu lista es: ${orden}`)
}

function ejercicioSeven(){
    alert(`Este es el historial original: ${historial}`)
    historial.push("I love you","t´estimo","Te amo")
    alert(`Este era tu historial: ${historial}`)
    historial.pop()
    alert(`Ahora este es tu historial: ${historial}`)
}

function ejercicioEight(){
    alert(`Esta es la cola: ${cola}`)
    cola.shift()
    cola.push("Cliente4")
    alert(`Ahora esta es la cola: ${cola}`)
}

function ejercicioNine(){
    alert(`Esta era tu lista de nombres: ${nombres}`)
    nombres.pop()
    nombres.unshift("Mateo")
    nombres.push("Ana")
    alert(`Ahora tu lista de nombres es: ${nombres}`)
}

function ejercicioTen(){

}

function ejercicioEleven(){
    alert(`Esta es el arreglo inicial: ${dias}`)
    dias.shift()
    dias.unshift("martes")
    dias.unshift("lunes")
    dias.push("viernes")
    alert(`Este es su arreglo corregido: ${dias}`)
}

function ejercicioTwelven(){
    alert(`Esta es la lista de nombres inicial: ${personas}`)
    personas.shift()
    personas.unshift("Pedro")
    personas.pop()
    personas.pop()
    personas.push("Camila")
    alert(`Esta es la lista de nombres final: ${personas}`)
}

function ejercicioThirteen(){
    alert(`Esta es tu lista de tareas inicial: ${tareas}`)
    tareas.pop()
    tareas.pop()
    tareas.pop()
    tareas.pop()
    tareas.push("lavar la ropa")
    tareas.push("organizar escritorio")
    alert("Actualizando...")
    alert(`Esta es tu lista de tareas final: ${tareas}`)
}