function extrairPartes(numero) {
  let [parteInteira, parteDecimal] = numero.toString().split('.');
  parteInteira = parseInt(parteInteira);
  parteDecimal = parteDecimal ? parseFloat('0.' + parteDecimal) : 0;
  return { parteInteira, parteDecimal };
}

console.log(extrairPartes(123.456));