function saludar (nombre){
    console.log("Bienvenido/a: " + nombre);

}

saludar("Fernando");

function sumar(a,b){
    let suma = a+b;
    return suma;
}

console.log(sumar(9,2));

function encontrarMayor(arr){
    let mayor = arr[0];
    for(let i = 1; i<arr.length; i++){
        if(arr[i] > mayor){
            mayor = arr[i];
        }
    }
    return mayor;
}
let numeros = [6,2,7,9];
let n = [3,5,4,8];
console.log(encontrarMayor(numeros));
console.log(encontrarMayor(n));

let hamburguesa = {
    pan: "pan de hamburguesa",
    carne: "vacuno",
    queso: "queso americano",
    extras: ["lechuga, tomate, ketchup"],
    infoHamburguesas: function(){
        console.log("Pan: " + this.pan);
        console.log("Queso: " + this.queso);
        console.log("Carne" + this.carne);
        console.log("Extras: " + this.extras);
    }
}

hamburguesa.infoHamburguesas();