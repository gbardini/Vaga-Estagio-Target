// Importacao biblioteca para leitura do arquivo
const fs = require("fs");
const path = require("path");

// Leitura do arquivo
const filePath = path.join(__dirname, "data", "dados.json");
const dados = JSON.parse(fs.readFileSync(filePath));

const menorFaturamento = (dados) => {
  let menor = Infinity;
  for (let i = 0; i < dados.length; i++) {
    if (dados[i].valor < menor) {
      menor = dados[i].valor;
    }
  }
  return parseFloat(menor.toFixed(2));
};

const maiorFaturamento = (dados) => {
  let maior = menorFaturamento(dados);
  for (let i = 0; i < dados.length; i++) {
    if (dados[i].valor > maior) {
      maior = dados[i].valor;
    }
  }
  console.log("O maior faturamento do mês foi: " + maior);
  return parseFloat(maior.toFixed(2));
};

console.log(menorFaturamento(dados));
console.log(maiorFaturamento(dados));
