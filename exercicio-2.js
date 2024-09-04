// Importação das bibliotecas
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

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
