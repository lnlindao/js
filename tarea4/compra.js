/* LISTA DE COMPRAS 
1. 2 lib Arroz - $ 2
    2. 1 lib de azúcar - $ 1.5
    3. 1 lib de sal - $ 1
    4. 1 Pan de molde integral - $ 2.45
    */

let arroz2lib = 2, azucar1lib = 1.5, sal1lib = 1, moldeIntegral = 2.45, sumaCompra = 0;

function comprar () { 
    let item = parseInt(prompt("ingrese el número del item a comprar"));
    compra ( item );
}

function compra ( itemCompra ){
    if ( itemCompra == 1 ){
        alert("Ud ha añadido 2 lib Arroz");
        sumaCompras (arroz2lib);
    } else if ( itemCompra == 2 ) {
        alert("Ud ha añadido 1 lib de azúcar");
        sumaCompras (azucar1lib);
    } else if ( itemCompra == 3 ) {
        alert("Ud ha añadido 1 lib de sal");
        sumaCompras (sal1lib);
    } else if ( itemCompra == 4 ) {
        alert("Ud ha añadido 1 Pan de molde integral");
        sumaCompras (moldeIntegral);
    } else {
        alert("Dato incorrecto")
    }
}

function sumaCompras (producto){
    sumaCompra = sumaCompra + producto;
    console.log(sumaCompra);
}


function totalCompra(){
    alert("El total de su compra es de $ " + sumaCompra)
}