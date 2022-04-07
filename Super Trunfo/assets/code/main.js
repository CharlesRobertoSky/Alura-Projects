var cartas = [
  {
    img: 'https://tm.ibxk.com.br/2021/02/03/03112039813071.jpg',
    nome: 'Xiao',
    atributos: {
      vida: 1500,
      ataque: 100,
      defesa: 8
    }
  },
  {
    img: 'https://static1-br.millenium.gg/articles/8/45/98/@/88437-ganyu-article_m-1.jpeg',
    nome: 'Ganyu',
    atributos: {
      vida: 1500,
      ataque: 100,
      defesa: 4
    }
  },
  {
    img: 'https://genshinpro.com.br/wp-content/uploads/2020/11/portrait-bennett.jpg',
    nome: 'Bennet',
    atributos: {
      vida: 1500,
      ataque: 100,
      defesa: 10
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
  exibirCartaJogador()
  // exibirOpcoes()
}

// function exibirOpcoes() {
//   var opcoes = document.getElementById('opcoes')
//   var opcoesTexto = ''
//   for (var atributos in cartaJogador.atributos) {
//     opcoesTexto += `<input type="radio" name="atributos" value="${atributos}"/>${atributos}`
//   }
//   opcoes.innerHTML = opcoesTexto
// }

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById('carta-jogador')
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.img})`
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'
  var tagHTML = "<div id='opcoes' class='carta-status'>"
  var opcoesTexto = ''

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += `<p  name="atributos"  value="${atributo} id="player-${atributo} "/>${atributo} ${cartaJogador.atributos[atributo]}</p>`
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div>'
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById('carta-maquina')
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.img})`
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'
  var tagHTML = "<div id='opcoes' class='carta-status'>"
  var opcoesTexto = ''

  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto += `<p name="atributos"  value="${atributo}" id="maquina-${atributo}">${atributo} ${cartaMaquina.atributos[atributo]}</p>`
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div>'
}
var intervalo = (funcao = undefined, tempo = 1) => {
  tempo *= 1000
  setInterval(() => {
    funcao
  }, tempo)
}
function jogar() {
  // var atributoSelecionado = obtemAtributoSelecionado()
  var resultado = document.querySelector('#resultado')
  var escrevaTexto = ''
  var partidaStatus = document.querySelector('#partida-status')
  var jogador1 = cartaJogador
  var jogador2 = cartaMaquina
  var jogadorVida = cartaJogador.atributos.vida
  var maquinaVida = cartaMaquina.atributos.vida
  console.log(jogadorVida, maquinaVida)
  var editarVidaPlayer = document.querySelector('#player-vida')
  var editarVidaMaquina = document.querySelector('#maquina-vida')
  var rodada = 0

  exibirCartaMaquina()
  while (true) {
    console.log('Entrando no looping')
    if (rodada == 0) {
      var random = Math.floor(Math.random() * 2)
      if (random == 0) {
        jogador2 = turnoDeAtaque(jogador1, jogador2)
        editarVidaMaquina = `<p name="atributos"  value="vida" id="maquina-vida">vida ${cartaMaquina.atributos[jogador2]}</p>`
        turno = 1
      } else {
        jogador1 = turnoDeAtaque(jogador2, jogador1)
        editarVidaPlayer = `<p name="atributos"  value="vida" id="player-vida">vida ${cartaJogador.atributos[jogador1]}</p>`
        turno = 0
      }

      //maquina turno
      // } else {
      //   if (turno == 0) {
      //     jogador2 = turnoDeAtaque(jogador1, jogador2)
      //     editarVidaMaquina = `<p name="atributos"  value="vida" id="maquina-vida">vida ${cartaMaquina.atributos[jogador2]}</p>`

      //     turno++
      //   } else {
      //     jogador1 = turnoDeAtaque(jogador2, jogador1)
      //     editarVidaPlayer = `<p name="atributos"  value="vida" id="player-vida">vida ${cartaJogador.atributos[jogador1]}</p>`

      //     turno--
      //   }

      if (jogador1.atributos.vida <= 0) {
        break
      } else if (jogador2.atributos.vida <= 0) {
        break
      }
      //maquina
    }

    partidaStatus = escrevaTexto
    rodada++
  }
  console.log('fora do loop')
  escrevaTexto =
    '<p class="vitoria resultado-final">Parabéns! Você ganhou!!</p>'
  // console.log(atributoSelecionado + ' atributo 54')
  // console.log(cartaJogador, cartaMaquina)
  // if (
  //   cartaJogador.atributos[atributoSelecionado] ==
  //   cartaMaquina.atributos[atributoSelecionado]
  // ) {
  //   escrevaTexto = '<p class="resultado-final">Você e a maquina empataram!</p>'
  // }
  // if (
  //   cartaJogador.atributos[atributoSelecionado] <
  //   cartaMaquina.atributos[atributoSelecionado]
  // ) {
  //   escrevaTexto =
  //     '<p class="derrota resultado-final>Infelizmente você foi derrotado!</p>'
  // }
  // if (
  //   cartaJogador.atributos[atributoSelecionado] >
  //   cartaMaquina.atributos[atributoSelecionado]
  // ) {
  //   escrevaTexto =
  //     '<p class="vitoria resultado-final">Parabéns! Você ganhou!!</p>'
  // }
  resultado.innerHTML = escrevaTexto

  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
}

function turnoDeAtaque(atacando = undefined, defendendo = undefined) {
  var jogadorAtaque = atacando.atributos.ataque
  var defensorVida = defendendo.atributos.vida
  console.log(jogadorAtaque, defensorVida)
  var random = Math.floor(Math.random() * 10)

  if (random <= 2) {
    jogadorAtaque = jogadorAtaque + (jogadorAtaque * 50) / 100
    console.log('Acerto Critico')
    console.log(random)
  }
  jogadorAtaque =
    jogadorAtaque - (jogadorAtaque * (defendendo.atributos.defesa / 10)) / 100
  console.log(defensorVida, jogadorAtaque)
  return (defensorVida -= jogadorAtaque)
}

// function obtemAtributoSelecionado() {
//   var radioAtributos = document.getElementsByName('atributos')
//   for (var i = 0; 1 < radioAtributos.length; i++) {
//     if (radioAtributos[i].checked) return radioAtributos[i].value
//     else return (radioAtributos = 'ataque')
//   }
// }

//logica, primeiro o player e a maquina escolhem uma carta para batalhaem entre si, para medir a força dos atack, usar uma função para registrar o dano do ataque e registrar o a vida que o oponente perdeu, si essa vida não for abaixo de 0, a batalha continua, um ataque para maquina e um ataque para o player, o ataque ira influenciar na baser da vida onde elas estçao armazenadas juntos aos atributos na carta, playerataque/regista ataque e vidadooponente, maquinaataque/registra ataque e vida do oponente
