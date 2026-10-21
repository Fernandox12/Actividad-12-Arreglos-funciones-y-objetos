let arr = [3,5,2,9,1,4];
let suma = 0;
for(let i = 0; i<arr.length; i++){
    suma+=arr[i]; //suma = suma + arr[i];
}
console.log(suma);
/*
arr[0] = 3 -> suma = 0+3
arr[1] = 5 -> suma = 3+5
arr[2] = 2 -> suma = 8+2
*/

// TAREA1: MOSTRAR LOS ELEMENTOS EN ORDEN
console.log("Mostrar elementos en orden");
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// TAREA2: MOSTRAR LOS ELEMENTOS EN ORDEN INVERSO
console.log("Mostrar elementos en orden inverso");
for(let i = arr.length-1; i >=0; i--){
    console.log(arr[i]);
}

//Encontrara el número mayor
console.log("Encontrar el mayor");
let mayor = arr[0];
for(let i = 0; i<arr.length; i++){
    if(mayor > arr[i]){
        mayor = arr[i];
    }
}
console.log(mayor); 

//TAREA3: ENCONTRAR EL NÚMERO MENOR
console.log("Encontrar el menor");
menor = arr[0];
for(let i = 0; i<arr.length; i++){
    if(arr[i] < menor){
        menor = arr[i];
    }
}
console.log(menor);

//TAREA4: CONTAR NÚMEROS PARES
Console.log("Contar números pares");
let contadorPares = 0;
for(let i = 0; i<arr.length; i++){
    if(arr[i] % 2 == 0){
        contadorPares++;
    }
}
console.log("Número de elementos pares: " + contadorPares);

//TAREA5: CALCULAR PROMEDIO
console.log("PROMEDIO");
console.log(suma/arr.length);