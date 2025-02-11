console.log('Funcionando Archivo: API_Listado_Clientes');

const Api_Usuarios = "https://jsonplaceholder.typicode.com/users"

let Datos_Locales = [];

let DatosFiltrados = []
let contenedor = document.getElementById('tbody');

DatosFiltrados = Datos_Locales

document.addEventListener('DOMContentLoaded', () => {
    Mostrar_CampoTabla()
});


function consultarDatos() {

        //fetchget
        fetch(Api_Usuarios)
            
            .then(response => response.json())
            .then(result => {
                // custom error
                console.log(result)
            })
            .catch(error => {
                // common error
                return null;
            });
        
    }