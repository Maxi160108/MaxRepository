//creacion funcion de prueba

function example(elemento){
    console.log("elemento clickeado", elemento);
}

//creacion de funcion turnoOff 

function turnOff(element) {
    if(element.innerText == "On"){
        element.innerText = "Off";
    }else{
        element.innerText = "On";
    }
}

//Funcion eliminar boton

function hide(element){
    element.remove();
}