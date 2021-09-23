
let votacionA=0, votacionB=0, votoIncorrecto=0;

for (let i = 0; i < 3 ; i++) {
    let nombre = prompt("ingrese nombre:");
    let voto = prompt("ingrese voto: A o B")
    if(voto == "A"){
        console.log("Resultado: " + nombre + " votó por " + voto);
        votacionA++;
        console.log(votacionA);
    } else if (voto == "B"){
        console.log("Resultado: " + nombre + " votó por " + voto);
        votacionB++;
        console.log(votacionB);
    } else {
        console.log("Voto incorrecto");
        votoIncorrecto = votoIncorrecto + 1;
        console.log(votoIncorrecto);
    }   
};

if(votacionA > votacionB && votacionA > votoIncorrecto){
    console.log("Gana A con : "+ votacionA + " votos");
} else if (votacionB > votacionA  && votacionB > votoIncorrecto){
    console.log("Gana B con : "+ votacionB + " votos");
} else {
    console.log("Lo sentimos, votación anulada porque la mayoría de votos fueron incorrectos");
}