console.log("Vinculado correctamente...")
// Ejercicio 1: Declaración de variables
// Instrucciones: Declara dos variables numéricas llamadas 'ahora' y 'fecha_nac'.
// Luego, calcula y muestra en un mensaje la edad actual basada en el año de nacimiento.

function declararVariables() {
    alert(ahora - fecha_nac);
    // Tu código aquí

    }

    let ahora = parseInt(prompt("Ingrese la fecha actual: "));
    let fecha_nac = parseInt(prompt("Ingrese su fecha de nacimiento: "));
    

    // Ejercicio 2: Asignación de valores
    // Instrucciones: Completa la función para asignar el valor de 'var1' a 'var2' y luego muestra el valor de 'var2'.
    function asignarValores() {
    alert("El valor de v2 es: ")
        // Tu código aquí
        
    }
    let var1 = (prompt("El valor de v2 es: "));
    var2 = var1
    // Ejercicio 3: Operaciones matemáticas
    // Instrucciones: Completa la función para realizar las siguientes operaciones:
    // Suma 'num1','num2' y 'num3', resta 'num1' de 'num3', multiplica 'num2' por 'num3', y divide 'num1' entre '120'.
    // Muestra los resultados en un mensaje.
    function realizarOperaciones() {
    let num1 = parseInt(prompt("Ingrese num1: "))
    let num2 = parseInt(prompt("Ingrese num2: "))
    let num3 = parseInt(prompt("Ingrese num3: "))
    let suma = num1 + num2 + num3;
    let resta = num1 - num3;
    let multiplicar = num2 * num3;
    let dividir = num1 / 120;
    alert("Resultados: \n suma: " + suma, + "\n resta: " + resta, "\n multiplicar: " + multiplicar, "\n dividir: " + dividir);
    
    // Tu código aquí
    }
    
    // Ejercicio 4: Manipulación de cadenas
    // Instrucciones: Completa la función para construir un mensaje utilizando las variables 'direccion' y 'n_casa'.
    // Luego, muestra la longitud del mensaje y el antepenultimo en el mensaje. (.length)
    function manipularCadenas() {
        
        alert("la longitud de tu mensaje es: " + mensaje.length + "\n" + "El antepenultimo caracter es: " + mensaje[mensaje.length-3] + "\n" + "Vivo en: " +  mensaje) 

    // Tu código aquí
    }

        let direccion = prompt("Ingrese su direccion aqui: ")
        let n_casa = prompt("Ingrese su numero de casa: ")
        let mensaje = direccion + " " + n_casa
    