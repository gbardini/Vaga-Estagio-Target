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

const performanceMensalEstado = (dados) => {
  for (let i = 0; i < dados.length; i++) {
    console.log(
      dados[i].estado +
        " - " +
        ((dados[i].valor / faturamentoMensalTotal(dados)) * 100).toFixed(2) +
        "%"
    );
  }
};

console.log(faturamentoMensalTotal(dados));
console.log(performanceMensalEstado(dados));
