function saludar (){
    alert("¡Hola!");
}

let boton = document.getElementById("colorButton");
console.log(boton);
boton.addEventListener("click", function(){
     this.innerText = "¡texto cambiado!";
})