console.log(`Funcionando Archivo: Practica_IF`);


//Caso 1
function verificarEdad() {

    let edad = document.getElementById('edad').value;//gi
    let pais = document.getElementById('pais').value;

    console.log(edad)
    console.log(pais)

    //IFELSE
    
    if (edad >= 18) {

        alert(`Eres mayor de edad en ${pais} `)
    } else {
        
        alert(`No eres mayor de edad en ${pais}`)
    }
    
}

function verificarParImpar() {

    let numero3 = document.getElementById('numero3').value;

    let numeroconvertido = parseInt(numero3)

    if (numeroconvertido % 2 === 0) {
        
       document.getElementById('mensajeParImpar').innerText = `El numero ${numeroconvertido} es par`;
    } else {
        document.getElementById('mensajeParImpar').innerText = `El numero ${numeroconvertido} es Impar`;
    }

    console.log(numeroconvertido)
}


function evaluarNota() {
    
    let nota = document.getElementById('nota').value;

    let numeroconvertido = parseInt(nota)
    console.log(numeroconvertido)

    //mayor de 90 excelente nota
    //mayor a 70 aprobado 
    //menor 70 reprobado 
    if (numeroconvertido >= 90) {
       // alert("excelente nota")
        document.getElementById('mensajeNota').innerText = `El resultado es excelente nota`;
    }
    else if(numeroconvertido >= 70){
       // alert("aprobado")
        document.getElementById('mensajeNota').innerText = `El resultado es aprobado`;
    }     
    else {
        //alert("reprobado")
        document.getElementById('mensajeNota').innerText = `El resultado es reprobado`;
    }
}


function calcularDescuento() {
    let monto = document.getElementById('monto').value;
    
    let descuento = parseInt(monto)
    console.log(descuento)
    
    if (monto >= 100) {
        document.getElementById('monto').innerText = `descuento del 10%`;
    } else {
        document.getElementById('monto').innerText = `sin descuento`;
    }
}

function verificarMayorMenor() {

    let edad = document.getElementById('edadSimple').value;
    
    console.log(edad)

    if (edad >= 18) {

        document.getElementById('edadSimple').innerText = `Eres mayor de edad`
        alert(`Eres mayor de edad`)
    } else {
        
        alert(`No eres mayor de edad`)
    }
    
}

//parse int
//parseFloat decimales
//monto * 0.9