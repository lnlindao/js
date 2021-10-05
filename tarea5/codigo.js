class paciente{
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


let paciente1 = new paciente ("0001", "Lissette", "Lindao", "lnlindao", "123456");



function obtenerUsuario(){
    paciente1.obtenerUsuario();
}

function login(){
    let usuario = prompt("Ingrese nombre de usuario");
    let contrasena = prompt("Ingrese conctraseña");
    
    usuario == paciente1.nombreUsuario && contrasena == paciente1.contrasena ? (
        alert(`Bienvenid@ nuevamente ${paciente1.nombre} `)
    ) : (
        alert("Datos incorrectos")
    );
}

/*
function ingresarNombreUsuario () { 
    paciente1.nombreUsuario = prompt("Ingrese su nombre de usuario");
    alert("Bienvenid@ " + paciente1.nombreUsuario);
    console.log(paciente1.nombreUsuario)
}
*/