const fibonacci = [1, 1, 2, 3, 5, 8, 13, 21];

function menoresQueOcho(arreglo) {
    return arreglo.filter(numero => numero < 8);
}

const resultado = menoresQueOcho(fibonacci);
console.log(resultado);

function mayoresIgualesQueOcho(arreglo) {
    return arreglo.filter(numero => numero >= 8);
}

const resultado2 = mayoresIgualesQueOcho(fibonacci);
console.log(resultado2);

function contarElementos(arreglo){
    return arreglo.length;
}
 const cantidad = contarElementos(fibonacci);
 console.log(cantidad);

 const cantidadMenores = menoresQueOcho(fibonacci).length;
 const cantidadMayores = mayoresIgualesQueOcho(fibonacci).length;
  

 document.getElementById("mayores").textContent = `Hay ${cantidadMayores} mayores iguales que 8` ;
 document.getElementById("menores").textContent = `Hay ${cantidadMenores} menores que 8` ;
 