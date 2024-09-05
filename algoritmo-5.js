function inverteString(string) {
  let novaString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    novaString += string[i];
  }
  return novaString;
}

console.log("Pipoca: " + inverteString("Pipoca"));
console.log("Carro: " + inverteString("Carro"));
console.log("Moto: " + inverteString("Moto"));
console.log("Tambor: " + inverteString("Tambor"));
console.log("Pedra: " + inverteString("Pedra"));
