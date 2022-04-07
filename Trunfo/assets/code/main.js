var cartas = [
  {
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    nome: 'Bulbassauro',
    atributos: {
      ataque: 7,
      defesa: 8,
      magia: 6
    }
  },
  {
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
    nome: 'Pikachu',
    atributos: {
      ataque: 9,
      defesa: 4,
      magia: 7
    }
  },
  {
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png',
    nome: 'MewTwo',
    atributos: {
      ataque: 10,
      defesa: 10,
      magia: 10
    }
  }
]

var cartaMaquina
var cartaJogador
function sortearCarta() {
  cartaMaquina = cartas[Math.floor(Math.random() * 3)]
  cartaJogador = cartas[Math.floor(Math.random() * 3)]

  while (cartaJogador == cartaMaquina) {
    cartaJogador = cartas[Math.floor(Math.random() * 3)]
  }
  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false
  exibirOpcoes()
}

function exibirOpcoes() {
  var opcoes = document.getElementById('opcoes')
  var opcoesTexto = ''
  for (var atributos in cartaJogador.atributos) {
    opcoesTexto += `<input type="radio" name="atributos" value="${atributos}"/>${atributos}`
  }
  opcoes.innerHTML = opcoesTexto
}
function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado()
  var resultado = document.querySelector('#resultado')
  var escrevaTexto = ''
  console.log(atributoSelecionado + ' atributo 54')
  console.log(cartaJogador, cartaMaquina)
  if (
    cartaJogador.atributos[atributoSelecionado] ==
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    escrevaTexto = '<p>Você e a maquina empataram!</p>'
  }
  if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    escrevaTexto = '<p class="derrota">Infelizmente você foi derrotado!</p>'
  }
  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    escrevaTexto = '<p class="vitoria">Parabéns! Você ganhou!!</p>'
  }
  resultado.innerHTML = escrevaTexto

  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName('atributos')
  for (var i = 0; 1 < radioAtributos.length; i++) {
    if (radioAtributos[i].checked) return radioAtributos[i].value
    else return (radioAtributos = 'ataque')
  }
}
