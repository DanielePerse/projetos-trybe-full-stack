/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 2]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (arrayNumbers) => {
  let soma = 0;
  let result = 0;

  if (arrayNumbers.length === 0) {
    result = undefined;
  }
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (typeof arrayNumbers[i] === 'string') {
      result = undefined;
      break;
    } else {
      soma += arrayNumbers[i];
      result = Math.round(soma / (arrayNumbers.length));
    }
  }
  return result;
};

module.exports = average;
