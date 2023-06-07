//regras
//carne - 400gr por pessoa + de 6 horas - 650
//Cerveja -1200ml por pessoa + 6 horas - 2000ml
//refrigerante/água - 1000ml por pessoa + 6 horas 1500ml

//criança valem por 0.5

let inputAdultos = document.getElementById('adultos')
let inputCriancas = document.getElementById('criancas')
let inputDuracao = document.getElementById('duracao')

let resultado = document.getElementById('resultado')

function calcular() {
  console.log('calculando')

  let adultos = inputAdultos.value
  let criancas = inputCriancas.value
  let duracao = inputDuracao.value

  let qdtTotalCarne =
    carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2 * criancas);


  let qdtTotalCerveja = cervejaPorPessoa(duracao) * adultos;
  

  let qdtTotalBebidas =
    bebidaPorPessoa(duracao) * adultos +
    (bebidaPorPessoa(duracao) / 2 * criancas);


  resultado.innerHTML = `<h2>Quantidade que vai precisar é de:</h2>`
  resultado.innerHTML += `<img class="icons" src="https://image.flaticon.com/icons/png/128/1134/1134447.png" alt="icone de carne" /><p class="paragrafo"> ${
    qdtTotalCarne / 1000
  } Kg de Carne</p>`
  resultado.innerHTML += `<img class="icons" src="https://image.flaticon.com/icons/png/128/761/761777.png" alt="icone de cerveja" /><p class="paragrafo"> ${Math.ceil(
    qdtTotalCerveja / 355
  )} latas de Cerveja</p>`
  resultado.innerHTML += `<img class="icons" src="https://image.flaticon.com/icons/png/128/600/600388.png" alt="icone de bebidas" /><p class="paragrafo"> ${Math.ceil(
    qdtTotalBebidas / 2000
  )} Garrafas de 2lt de Bebidas</p>`
}

function carnePorPessoa(duracao) {
  if (duracao >= 6) {
    return 650
  } else {
    return 400
  }
}

function bebidaPorPessoa(duracao) {
  if (duracao >= 6) {
    return 1000
  } else {
    return 1500
  }
}

function cervejaPorPessoa(duracao) {
  if (duracao >= 6) {
    return 1200
  } else {
    return 2000
  }
}
