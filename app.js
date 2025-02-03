//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//VARIÁVEIS NECESSÁRIAS//
let amigos = []
let lista = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');
let campo = document.querySelector('h2'); 


function adicionarAmigo() {
    //VALOR A SER ADICIONADO
    let amigo = document.getElementById('amigo').value;

    //VERIFICA SE O VALOR É VÁLIDO
    if(!amigo) {
        campo.innerHTML = 'Por favor, informe um nome válido!'; //INFORMA O AVISO

        //LIMPA O CAMPO DE ENTRADA
        amigo = document.getElementById('amigo');
        amigo.value = '';

        amigo = document.getElementById('amigo').value;
    }
    //VERIFICA SE POSSUI NOME REPETIDO
    else if(amigos.includes(amigo)) {
        campo.innerHTML = 'Nome já inserido na lista, por favor, altere o nome!'; //INFORMA O AVISO

        //LIMPA O CAMPO DE ENTRADA
        amigo = document.getElementById('amigo');
        amigo.value = '';

        amigo = document.getElementById('amigo').value;
    }
    else {
        //ADICIONA VALOR AO ARRAY
        amigos.push(amigo);

        //LIMPA O CAMPO DE ENTRADA
        amigo = document.getElementById('amigo');
        amigo.value = '';
        
        campo.innerHTML = 'Digite o nome dos seus amigos';
    }

    //MOSTRA A LISTA DE AMIGOS NA TELA
    atualiza_lista();
}

function atualiza_lista() {
    lista.innerHTML = '';

    for(let i = 0; i < amigos.length; i++) {
        //CRIANDO ITEM NA LISTA HTML
        let amigo_lista = document.createElement('li');

        //ADICIONA TEXTO DO ARRAY 'AMIGOS' PARA A VARIÁVEL
        amigo_lista.textContent = amigos[i];

        //ADICIONA O AMIGO NA LISTA HTML
        lista.appendChild(amigo_lista);
    }
}

function sortearAmigo() {
    //ESCOLHE NÚMERO ALEATÓRIO
    let ind_aleatorio = Math.floor(Math.random() * amigos.length);

    //VERIFICA SE A LISTA DE AMIGOS ESTÁ VAZIA
    if(amigos.length == 0) {
        campo.innerHTML = 'Não há amigos para sortear, por favor, adicione amigos na lista!'; //INFORMA O AVISO
    }
    //ESCOLHE AMIGO ALEATÓRIO
    else {
        lista.innerHTML = '';
        resultado.innerHTML = `O amigo secreto sorteado é:${amigos[ind_aleatorio]}`;
    }
}