let var1 = 'Hola';

function suma(n1, n2) {
    return n1 + n2;
}

console.log(var1);
console.log(`La suma de 2 y 3 es ${suma(2, 3)}`);

let header = document.getElementById('header');
header.innerText += `, la suma de 2 y 3 es ${suma(2, 3)}`;