var dados = [1, 3, 5, 7, 9, 2, 8];
var N = 10;

var primeiro = dados[0];
var contagem = 0;

for (var i = 0; i < dados.length; i++) {
  if (dados[i] >= primeiro && dados[i] <= N) {
    contagem++;
  }
}

console.log("Número de valores entre " + primeiro + " e " + N + " (inclusive): " + contagem);
