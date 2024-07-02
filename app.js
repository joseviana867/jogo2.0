let listaDeNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}


function exibimensageminicial() {
exibirTextoNaTela ('h1', 'jogo do numero secreto');
exibirTextoNaTela ('p', 'escolha um numero entre 1 e 10');

}

exibimensageminicial()

function verificarChute () {
    let chute = document.querySelector('input'). value;
    console.log (chute == numeroSecreto);
    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1', 'acerto');
        let palavratentativa = tentativas >  1 ? 'tentativas' : 'tentativa';
        let mensagemtentativa = `voce descobriu o numero secreto com ${tentativas} ${palavratentativa}`;
        exibirTextoNaTela ('p', mensagemtentativa); 
        document.getElementById('reiniciar').removeAttribute('disabled');
    
    } else if (chute < numeroSecreto) {
        exibirTextoNaTela ('p', 'o numero secreto e maior');
        } else{
        exibirTextoNaTela ('p', 'o numero secreto e menor');
    }
    tentativas++;
    limparCampo();
}



function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}
   
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibimensageminicial()
    document.getElementById('reiniciar').setAttribute('disabled', true);
    
}