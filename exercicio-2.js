// Importação das bibliotecas
const readline = require("readline");

// Criação da interface para entrada de dados
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/* Para descobrirmos se um número pertence à sequência de Fibonnaci uma 
ou ambas dessas expressões 5*n2 + 4 ou 5*n2 – 4 irá retornar um quadrado perfeito */

function quadradoPerfeito(numero) {
  let raiz = Math.sqrt(numero);
  let raizExata = Math.floor(raiz);
  return raizExata === raiz && raiz * raiz === numero;
}

function eFibonacci(numero) {
  return (
    quadradoPerfeito(5 * numero ** 2 + 4) ||
    quadradoPerfeito(5 * numero ** 2 - 4)
  );
}

console.log(
  "Código feito para identificar se o número fornecido pertence à sequência de Fibonnaci"
);

rl.question("Digite um número: ", (numero) => {
  let num = parseInt(numero);

  if (!isNaN(num)) {
    // Código para identificar se o número fornecido pertence à sequência de Fibonnaci
    console.log("O número pertence à sequência de Fibonnaci");
  } else {
    console.log("Número inválido!");
  }
});
