const arrayVacio = [];
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayNumerosPares = [0, 2, 4, 6, 8];
const arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];
function suma(a, b) {
    return a + b;
};
function potenciacion(a, b) {
    return a**b;
};
function separarPalabras(str) {
    const array = str.split(' ');
    return array;
};
function repetirString(str, num) {
    return str.repeat(num);
};

/*09 NUMERO PRIMO
function esPrimo(num) {
    if (num <= 1) {
        return false;
    } else {
        for (let i = 2; i < num, i++) {
            if (num %i === 0) {
                return false;
                break;
            }
        }
    }
} */

function ordenarArray(numArray) {
    return numArray.sort();
};
function obtenerPares(numArray) {
    let parArray = numArray.filter(element => element %2 === 0);
    return parArray;
}
function pintarArray(srtArray) {
    return '[' + srtArray.join(', ') + ']';
}
function arrayMapi(arr, func) {
    let newArr = arr.map(element => func(element));
    return newArr;
};

/*14 duplicados*/
const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
const holaMundo = ['Hola', 'Mundo'];
const loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];
const arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];
function multiplicacion(a, b) {
    return a * b;
};
function division(a,b) {
    return a / b;
};
function esPar(num) {
    return (num %2 === 0);
}
const arrayFunciones = [suma = (a, b) => a + b, resta = (a, b) => a - b, multiplicación = (a, b) => a * b];
function ordenarArray2(numArray) {
    return numArray.sort();
};
function obtenerImpares(numArray) {
    let parimpArray = numArray.filter(element => element %2 === 0);
    return parimpArray;
}
function sumarArray(numArray) {
    return numArray.reduce();
}
function multiplicarArray(numArray) {
    let acumulador;
    numArray.forEach
}

console.log(obtenerPares([3, 4, 5, 6, 7, 8 , 7, 4, 3, 2]));