const numero = 11;

let ePrimo = true;

if (numero <= 1) {
    ePrimo = false;
} else if (numero <= 3) {
    ePrimo = true; 
} else if (numero % 2 === 0 || numero % 3 === 0) {
    ePrimo = false; 
} else {
    
    for (let i = 5; i * i <= numero; i += 6) {
        if (numero % i === 0 || numero % (i + 2) === 0) {
            ePrimo = false;
            break;
        }
    }
}
console.log(ePrimo);
