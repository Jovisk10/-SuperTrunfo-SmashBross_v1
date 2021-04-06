var cartaMario = {
    nome: "Mario Bros",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpyP8L28ijK3HMqyoVpJqby48WV0WJ7ioumA&usqp=CAU",
    som:"https://themushroomkingdom.net/sounds/wav/mk64/mk64_mario02.wav",
    atributos: {
        ataque: 80,
        defesa: 60,
        poder:65
    }
}

var cartaDonkeyKong = {
    nome: "Donkey Kong",
    imagem: "https://i.pinimg.com/originals/fd/15/e7/fd15e71ced801c1303a633ae93fbb810.png",
    som:"https://www.myinstants.com/media/sounds/dkc3-death-in-the-pockey-pipes.mp3",
    atributos: {
        ataque: 90,
        defesa: 85,
        poder:65
    }
}

var cartaLuigi = {
    nome: "Luigi Bros",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQttt6VDwlAJn_IXIFUuECD7wMiyddKQRvjJA&usqp=CAU",
    som:"https://themushroomkingdom.net/sounds/wav/mk64/mk64_luigi07.wav",
    atributos: {
        ataque: 80,
        defesa: 90,
        poder:70
    }
}

var cartaLink = {
    nome: "Link",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-RKlhMRYFuS3uHPIQLx5BJeXLiznJTIvW3A&usqp=CAU",
    som:"https://www.myinstants.com/media/sounds/loz_secret_BL9kfi1.mp3",
    atributos: {
        ataque: 80,
        defesa: 85,
        poder:70
    }
}

var cartaPikachu = {
    nome: "Pikachu",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ3-jWmOBH6W7c4MKt8LE7shsk0z6bo_upug&usqp=CAU",
    som:"https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=Pikachu+Sound+Effect&filename=nj/NjYzNzY0MDQzNjYzODMw_cl0ptOkPpes.mp3",
    atributos: {
        ataque: 88,
        defesa: 62,
        poder:85
    }
}

var cartaSonic = {
    nome: "Sonic",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtD-sMF9DSR95vk3qXc6IoLD4b8_AGtXHRoA&usqp=CAU",
    som:"https://www.myinstants.com/media/sounds/sonic-youre-too-slow.mp3",
    atributos: {
        ataque: 80,
        defesa: 60,
        poder:85
    }
}

var cartaWario = {
    nome: "Wario",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTVTiACs_auozo4v-slj6J-FI6WqVI_8RTmg&usqp=CAU",
    som:"https://themushroomkingdom.net/sounds/wav/mk64/mk64_wario06.wav",
    atributos: {
        ataque: 75,
        defesa: 60,
        poder:70
    }
}

var cartaPacMan = {
    nome: "Pac-Man",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJqkr0iW23-8fo_AqnEtBIgt_IoZ9lElpHvg&usqp=CAU",
    som:"https://www.myinstants.com/media/sounds/start-pacman.mp3",
    atributos: {
        ataque: 80,
        defesa: 60,
        poder:65
    }
}

var cartaPeach = {
    nome: "Princess Peach",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV0F-sciCDTrLFLCXdew2W1ZzsKqmRJNmL9A&usqp=CAU",
    som:"https://www.myinstants.com/media/sounds/yea-peachys-got-it.mp3",
    atributos: {
        ataque: 80,
        defesa: 70,
        poder:95
    }
}

var cartaKirby = {
    nome: "Kirby",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Ju2wqJ8RwC_rR8Ku-vwbf6fPc5wcHTuQuQ&usqp=CAU",
    som:"https://www.myinstants.com/media/sounds/kirby009.mp3",
    atributos: {
        ataque: 90,
        defesa: 80,
        poder:90
    }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaMario, cartaLink ,cartaPikachu,cartaSonic,cartaWario,cartaPacMan,cartaPeach,cartaKirby, cartaDonkeyKong, cartaLuigi]
//            0           1           2          3         4            5            6           7          

var pontosJogador = 0
var pontosMaquina = 0
var rodadas = 0

atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas() {
    var divQuantidadeCartas = document.getElementById('quantidade-cartas')
    var html = "Quantidade de cartas no jogo: " + cartas.length

    divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar() {
    var divPlacar = document.getElementById('placar')
    var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina"

    divPlacar.innerHTML = html
}

function sortearCarta() {
    rodadas++
    console.log(rodadas)
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    
    exibeCartaJogador()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""
    
    if (rodadas%2 != 0){
      for (var atributo in cartaJogador.atributos) {
          opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
         var html = "<div id='opcoes' class='carta-status'>"
      } 
    } else{
        for (var atributo in cartaJogador.atributos){
          opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
        var html = "<div id='opcoes' class='carta-status --spacing'>"
      }
    } 
  
    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    if (rodadas%2 != 0){
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        } 
      }
    } else{
      var atributoMaquina = ['ataque', 'defesa', 'poder']
      var iMaquina = parseInt(Math.random() * 3) 
      radioAtributo = atributoMaquina[iMaquina]
      return radioAtributo
        
  }
}
function jogar() {
    var divResultado = document.getElementById("resultado")
    var divAtributoMaquina = document.getElementById('atributoEscolhidoMaquina')
    var atributoSelecionado = obtemAtributoSelecionado()
     
    
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Você venceu!</p>'
        audioVenceu(cartaJogador)
        pontosJogador++
        
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Você perdeu!</p>'
        audioVenceu(cartaMaquina)
        pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou!</p>'
    }

    if (cartas.length == 0) {
        alert("Fim de jogo")
        if (pontosJogador > pontosMaquina) {
            htmlResultado = '<p class="resultado-final">Você venceu o JOGO!</p>'
        } else if (pontosMaquina > pontosJogador) {
            htmlResultado = '<p class="resultado-final">Você perdeu o jogo.</p>'
        } else {
            htmlResultado = '<p class="resultado-final">Empatou o Jogo</p>'
        }
    } else {
        document.getElementById('btnProximaRodada').disabled = false
    }
    
    if (rodadas%2 == 0){
      divAtributoMaquina.innerHTML = 'A maquina escolheu o atributo:' + atributoSelecionado
    }
    
    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true

    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeDeCartas()
  
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada() {
    var divCartas = document.getElementById('cartas')

    divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`

    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnProximaRodada').disabled = true

    var divResultado = document.getElementById('resultado')
    divResultado.innerHTML = ""
    var divAtributoMaquina = document.getElementById('atributoEscolhidoMaquina')
    divAtributoMaquina.innerHTML = ""
}

function audioVenceu(personagem){
  var divAudio = document.getElementById('audioVenceu')
  var audioCarta = "<audio src=" + personagem.som + "></audio>"
  divAudio.innerHTML = audioCarta

  const audio = document.querySelector('audio')
  audio.play()
}
