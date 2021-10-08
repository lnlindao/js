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

let datosPacientes = [], 
  idPaciente=datosPacientes.length;

function crearUsuario(){
    idPaciente+=1;
    console.log(idPaciente);
    let nombrePaciente = prompt("Ingrese nombre");
    let apellidoPaciente = prompt("Ingrese apellido");
    let nombreUser = prompt("Ingrese nombre de usuario");
    let contrasena = prompt("Ingrese nombre de usuario");
    datosPacientes.push( new Paciente(idPaciente, nombrePaciente, apellidoPaciente, nombreUser, contrasena));
}

function MostrarUsuarios(){
    console.table(datosPacientes);
    for( let paciente of datosPacientes){
        console.log("Id paciente: " +  paciente.id)
        console.log("Nombre: " +  paciente.nombre)
        console.log("Apellido: " +  paciente.apellido)
        console.log("Nombre de usuario: " +  paciente.nombreUsuario)    
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