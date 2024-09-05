const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "data", "dados-algoritmo-4.json");
const dados = JSON.parse(fs.readFileSync(filePath));

const faturamentoMensalTotal = (dados) => {
  let soma = 0;
  for (let i = 0; i < dados.length; i++) {
    soma += dados[i].valor;
  }
  return soma;
};

console.log(faturamentoMensalTotal(dados));

let teste = faturamentoMensalTotal(dados).toFixed(2);
console.log(typeof teste);
