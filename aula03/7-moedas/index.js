// https://docs.awesomeapi.com.br/api-de-moedas
// Fazer chamadas à API pública AwesomeAPI para consultar o valor de conversão entre moedas(ex: de dólar para real), e exibir isso de forma legível no console.

const axios = require("axios");

// Recebe duas moedas, monta a URL correta para acessar a API, faz uma requisição e retorna o data, que contém a resposta da API com o câmbio.
const fetch = async (de, para) => {
  try {
    const baseURL = "https://economia.awesomeapi.com.br/last/";
    const url = `${baseURL}${de}-${para}`;
    console.log(url)
    const { data } = await axios.get(url);
    return data;
  } catch (err) {
    console.log(err);
  }
};

// Define um dicionário de nomes de moedas para exibir, chama a função fetch(de, para) para obter os dados, concatena de + para para acessar o dado correto no JSON retornado, pega o valor da cotação alta(.high) e converte para número, e imprime no console algo como: Um USD equivale aproximadamente 5.23 reais

const main = async (de, para) => {
  try {
    const moedas = {
      "USD": "dolares",
      "BRL": "reais",
      "EUR": "euros",
      "BTC": "bitcoins",
    }
    const resposta = await fetch(de, para);
    const key = `${de}${para}`
    console.log(resposta)
    const dolar = +resposta[key].high
    console.log(`Um ${de} equivale aproximadamente ${dolar.toFixed(2)} ${moedas[para]}`);
  } catch (error) {
    console.log(error);
  }
};

main("USD", "BRL");
main("EUR", "BRL");
main("BTC", "BRL");
main("BRL", "USD");
main("BRL", "EUR");



