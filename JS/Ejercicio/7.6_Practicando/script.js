function multiplicar() {
    let num = parseInt(prompt("Ingresa tu numero: "));
    let datos = [];
    let resultados = 0;
    for (let mult = 1; mult <= 10; mult++) {
        resultados = num * mult;
        datos.push(`${mult} * ${num} = ${resultados}`);
        if(mult >= 10){
        alert(datos.join(`\n`));
        }
    }
}

function ingresar() {
    let n = parseInt(prompt("Ingresa tu numero: "));
    let last = 0;
    for(let num = 1; num <= n; num++){
        last += num
        if(num >= n) {
            alert(`El resultado es: ${last}`);
        }
    }
}

function pares() {
    let num = parseInt(prompt("Ingrese su primer numero: "));
    let num2 = parseInt(prompt("Ingrese su ultimo numero: "));
    let array = []
    for(let n = 0;num <= num2; num++){
        if (num % 2 == 0) {
            n = num
            array.push(n);
            alert(array);
        }
    }
}
