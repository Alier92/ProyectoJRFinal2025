console.log(`Funcionando Archivo: Practica_CICLO`);
let personas = [
    { nombre: "Juan", edad: 25, activo: true },
    { nombre: "Ana", edad: 17, activo: false },
    { nombre: "Carlos", edad: 30, activo: true },
    { nombre: "Laura", edad: 16, activo: true },
    { nombre: "Pedro", edad: 40, activo: false }
];

let clientes = [
    { nombre: "Juan", edad: 25, activo: true },
    { nombre: "Ana", edad: 17, activo: false },
    { nombre: "Carlos", edad: 30, activo: true },
    { nombre: "Laura", edad: 16, activo: true },
    { nombre: "Pedro", edad: 40, activo: false }
];



console.log(personas[4].nombre)

console.log(personas[0].nombre)

personas.forEach(element => {
    console.log(element)
});

clientes.forEach(element => {
    if (element.activo === true) {
        
        console.log(element.nombre,element.activo)
        
    }
    
});

console.log(personas.length)

let buscarnombre = personas.find(x => x.nombre === "Ana")

console.log(buscarnombre)

///
let buscaractivos = personas.find(x => x.activo === true)

console.log(buscaractivos)



////
function Filtrar() {
    let valor = document.getElementById('sensitivo').value; //gi
    console.log(valor)
}

///

function buscarDesdeInput() {
    let input1 = document.getElementById('buscarNombre').value;  //Metio el valor pepe
    let resultado = document.getElementById('resultadoBusqueda');
  
    //Busca en el arreglo 
    let busqueda = personas.find(x=> x.nombre.toUpperCase() === input1.toUpperCase()) //nombre == pepe
  
  
    //Aqui le indicamos si el resultado es verdadero o falso 
    if (busqueda) {
      
      resultado.innerHTML = `encontrado a la persona ${busqueda.nombre}`
  
    } else {
      resultado.innerHTML = `No encontrado a la persona`
    }
  }//

  //Crear la funcion del onclick //check 
// Input id value //no tiene 
//  mostrar el resultado inner 

function primeraPersonaActiva() {
    let resultado = document.getElementById('resultadoActivo');//inner 

    let busqueda = personas.find(x=> x.activo == true)
  //Aqui le indicamos si el resultado es verdadero o falso 
  if (busqueda) {
    
    resultado.innerHTML = `primera persona encontrada  ${busqueda.nombre}`

  } else {
    resultado.innerHTML = `No se encontro nadie activo `
  }

}

//caso 6
function personasActivas() {
    let resultado = document.getElementById('listaActivos');

    personas.forEach(element => {
        
        if (element.activo == true) {
            
          resultado.innerHTML += `
          
            <li>nombre : ${element.nombre} </li>`
          
            
        }

    });
}