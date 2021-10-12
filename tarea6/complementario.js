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
datosPacientes.push(new Paciente(1, "Melina", "Chiriguayo", "elisa", "123"));
datosPacientes.push(new Paciente(1, "Abel", "Cajamarca", "lnlindao", "123"));
let idPaciente=datosPacientes.length;

function crearUsuario(){
    idPaciente+=1;
    let nombrePaciente = prompt("Ingrese nombre");
    let apellidoPaciente = prompt("Ingrese apellido");
    let nombreUser = prompt("Ingrese nombre de usuario");
    let contrasena = prompt("Ingrese nombre de usuario");
    datosPacientes.push( new Paciente(idPaciente, nombrePaciente, apellidoPaciente, nombreUser, contrasena));
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
 
    let exist = datosPacientes.find(usuarioPaciente => usuarioPaciente.nombreUsuario == usuario) && datosPacientes.find(clavePaciente => clavePaciente.contrasena == contrasena) 

    console.log(exist)
    if (exist) { 
        let posicion = datosPacientes.indexOf(exist) 
        alert(`Bienvenid@ nuevamente ${datosPacientes[posicion].nombre} `) 
    }else{ 
        alert("Datos incorrectos") 
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