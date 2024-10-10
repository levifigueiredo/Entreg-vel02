// Somatório
function executarSomatorio() {
    let input = document.getElementById("somatorioInput").value;
    let numeros = input.split(",").map(Number);
    let somatorio = 0;
    for (let i = 0; i < numeros.length; i++) {
      somatorio += numeros[i];
    }
    document.getElementById("somatorioResultado").textContent = "O somatório é: " + somatorio;
  }
  
  // Verificar Número Primo
  function verificarPrimo() {
    let numero = parseInt(document.getElementById("primoInput").value);
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
    document.getElementById("primoResultado").textContent = ePrimo ? "É primo" : "Não é primo";
  }
  
  // Fibonacci
  function executarFibonacci() {
    let n = parseInt(document.getElementById("fibonacciInput").value);
    let a = 0, b = 1;
    let resultado = [a, b];
  
    for (let i = 2; i < n; i++) {
      let c = a + b;
      resultado.push(c);
      a = b;
      b = c;
    }
  
    document.getElementById("fibonacciResultado").textContent = "Sequência de Fibonacci: " + resultado.join(", ");
  }
  
  // MDC
  function executarMDC() {
    let a = parseInt(document.getElementById("mdcInputA").value);
    let b = parseInt(document.getElementById("mdcInputB").value);
  
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
  
    document.getElementById("mdcResultado").textContent = "O Máximo Divisor Comum (MDC) é: " + a;
  }
  
  // Quicksort
  function quicksort(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr[arr.length - 1];
    let left = arr.filter(x => x < pivot);
    let right = arr.filter(x => x > pivot);
    return [...quicksort(left), pivot, ...quicksort(right)];
  }
  
  function executarQuicksort() {
    let input = document.getElementById("quicksortInput").value;
    let array = input.split(",").map(Number);
    let sortedArray = quicksort(array);
    document.getElementById("quicksortResultado").textContent = "Array ordenado: " + sortedArray.join(", ");
  }
  
  // Contagem
  function executarContagem() {
    let dados = document.getElementById("contagemInput").value.split(",").map(Number);
    let N = parseInt(document.getElementById("nValue").value);
    let primeiro = dados[0];
    let contagem = 0;
  
    for (let i = 0; i < dados.length; i++) {
      if (dados[i] >= primeiro && dados[i] <= N) {
        contagem++;
      }
    }
  
    document.getElementById("contagemResultado").textContent = "Número de valores entre " + primeiro + " e " + N + ": " + contagem;
  }
  