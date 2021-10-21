class Paciente{
    constructor ( id, nombre, apellido, nombreUsuario, contrasena){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.nombreUsuario = nombreUsuario;
        this.contrasena = contrasena;
    }

    obtenerUsuario(){
        console.log(this.nombre)
    }
}
class Alimento{
    constructor(id, nombre, porcion, cantidadHC){
        this.id = id;
        this.nombre = nombre;
        this.porcion = porcion;
        this.cantidadHC = cantidadHC;
    }

}

let datosPacientes =  [], 
    datosAlimentos =  [], 
    idAlimento = 0;

datosPacientes.push(new Paciente(1, "Lissette", "Lindao", "lnlindao", "123"));
datosPacientes.push(new Paciente(2, "Melina", "Chiriguayo", "elisa", "123"));
datosPacientes.push(new Paciente(3, "Abel", "Cajamarca", "abel", "123"));
let idPaciente=datosPacientes.length;

function nuevoUsuario(){
    let contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = `<h2>Hola! por favor ingresa tus datos a continuación</h2>
                            <p class=titulo>Nombre <input type="text" id="nombre"></p>
                            <p class=titulo>Apellido <input type="text" id="apellido"></p>
                            <p class=titulo>Usuario <input type="text" id="usuario"></p>
                            <p class=titulo>Contraseña <input type="text" id="clave"></p>
                            <p><button onclick="crearUsuario()">Registrarme</button></p>
                            <hr>`
}

function crearUsuario(){    
    idPaciente+=1;
    let nombrePaciente = document.getElementById("nombre").value;
    let apellidoPaciente = document.getElementById("apellido").value;
    let nombreUser = document.getElementById("usuario").value;
    let contrasena = document.getElementById("clave").value;
    datosPacientes.push( new Paciente(idPaciente, nombrePaciente, apellidoPaciente, nombreUser, contrasena));
    console.log(datosPacientes);
    alert("Usuario agregado exitosamente");
}


function crearUsuarioagregarAlimento(){
    idAlimento+=1;
    let nombreAlimento = prompt("Ingrese nombre alimento");
    let porcionAlimento = prompt("Ingrese porción del alimento");
    let CantidadHC = prompt("Ingrese cantidad de HC de la porción");
    datosAlimentos.push( new Alimento(idAlimento, nombreAlimento, porcionAlimento, CantidadHC));
}

function MostrarUsuarios(){
    if ( datosPacientes.length > 0){
        console.table(datosPacientes);
        for( let paciente of datosPacientes){
            console.log("Id paciente: " +  paciente.id)
            console.log("Nombre: " +  paciente.nombre)
            console.log("Apellido: " +  paciente.apellido)
            console.log("Nombre de usuario: " +  paciente.nombreUsuario)    
        }
    } else {
        alert("No hay pacientes para mostrar");
    }
    
}
function MostrarAlimentos(){
    if ( datosAlimentos.length > 0){
        console.table(datosAlimentos);
        for( let alimentoLeer of datosAlimentos){
            console.log("Id paciente: " +  alimentoLeer.id)
            console.log("Nombre: " +  alimentoLeer.nombre)
            console.log("Apellido: " +  alimentoLeer.apellido)
            console.log("Nombre de usuario: " +  alimentoLeer.nombreUsuario)    
        }
    } else {
        alert("No hay pacientes para mostrar");
    }
    
}

function login() {

    let usuario = prompt("Ingrese nombre de usuario")
    let contrasena = prompt("Ingrese conctraseña")
    
    let userOK = datosPacientes.find(nombreDePaciente => nombreDePaciente.nombreUsuario == usuario)
    let password = datosPacientes.find(clavePaciente => clavePaciente.contrasena == contrasena)    
    if(userOK && password){
        let posicion = datosPacientes.indexOf(userOK)
        console.log(posicion)
        alert(`Bienvenido ${datosPacientes[posicion].nombre}`)
    }else{
        alert('Datos incorrectos')
    }
}

function ordenarNombresPacientes(){

    let orden = parseInt(prompt("Quieres ordenar por (1) Nombre o (2) Apellido"))
    if (orden == 1){
        console.log("Orden por nombre")
        datosPacientes.sort(function (a, b) {
            if (a.nombre > b.nombre) {
              return 1;
            }
            if (a.nombre < b.nombre) {
              return -1;
            }
            // a must be equal to b
            return 0;
          });
          console.table(datosPacientes)
    } else if (orden == 2){
        console.log("Orden por apellido")
        datosPacientes.sort(function (a, b) {
            if (a.apellido > b.apellido) {
              return 1;
            }
            if (a.apellido < b.apellido) {
              return -1;
            }
            // a must be equal to b
            return 0;
          });
          console.table(datosPacientes)
    } 
    
}