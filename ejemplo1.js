let frutas = ["Pera", "Manzana", "Platano"];
console.log(frutas[1]);
console.log(frutas[0]);
console.log(frutas[2]);
//Agregar elemento al final de la lista
frutas.push("Naranja");
console.log(frutas[3]);
//eliminar elemento al final de la lista
frutas.pop();
console.log(frutas);
//Agregar elemento al inicio de la lista
frutas.unshift("Frutilla");
console.log(frutas);
//Quitar elemento a inicio de la lista 
frutas.shift();
console.log(frutas);

console.log(frutas.indexOf("Manzana"));
//Me muestra el tamaño del arreglo (cantidad de elementos)
console.log(frutas.length);