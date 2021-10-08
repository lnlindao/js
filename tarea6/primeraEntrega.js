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
    idPacientes = 0, idAlimentos = 0;



function crearUsuario(){
    idPacientes+=1;
    let nombrePaciente = prompt("Ingrese nombre");
    let apellidoPaciente = prompt("Ingrese apellido");
    let nombreUser = prompt("Ingrese nombre de usuario");
    let contrasena = prompt("Ingrese nombre de usuario");
    datosPacientes.push( new Paciente(idPaciente, nombrePaciente, apellidoPaciente, nombreUser, contrasena));
}
function crearUsuarioagregarAlimento(){
    idAlimentos+=1;
    let nombreAlimento = prompt("Ingrese nombre alimento");
    let porcionAlimento = prompt("Ingrese porción del alimento");
    let CantidadHC = prompt("Ingrese cantidad de HC de la porción");
    datosPacientes.push( new Alimento(idObjetos, nombreAlimento, porcionAlimento, CantidadHC));
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

function login(){
    let usuario = prompt("Ingrese nombre de usuario");
    let contrasena = prompt("Ingrese conctraseña");
    datosPacientes.find(nombreDePaciente => nombreDePaciente.nombre == usuario) && datosPacientes.find(clavePaciente => clavePaciente.contrasena == contrasena) ? (
        alert(`Bienvenid@ nuevamente ${datosPacientes.nombre} `)
    ) : (
        alert("Datos incorrectos")
    );
}

function ordenarNombresPacientes(){
    console.table(datosPacientes.sort(((a, b) => b.nombre - a.nombre)));
}