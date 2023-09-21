// Ex. 1

let valor = parseFloat(prompt('Digite um número entre 0 e 10'))

while(valor >= 0 && valor <= 10) {
    alert(`Valor digitado foi: ${valor}`);
    valor = parseFloat(prompt('Digite um número entre 0 e 10'));
}

alert('Saiu do laço de repetição');


// Ex. 2

let username = prompt('Digite seu nome de usuário!');
let password = prompt('Digite sua senha!');

while(username == password) {
    alert('ERRO: Senha e Usuário iguais!');
    username = prompt('Digite seu nome de usuário!');
    password = prompt('Digite sua senha!');
}

alert('Saiu do laço de repetição!');

// Ex. 3

let numero = parseInt(prompt('Digite o número'));
let soma = 0;
let quantidade = 0;

while(numero >= 0 && numero <= 10) {
    soma+=numero;
    quantidade++;
    numero = parseInt(prompt('Digite o numero'));
}

alert(`A soma é: ${soma} e a média é: ${parseInt(soma/quantidade)}`);


// Ex. 4

let candidato_A = 0;
let candidato_B = 0;
let candidato_C = 0;

let voto = prompot('Digite seu voto (A, B ou C)');

while(voto != 'x') {
    if(voto == 'A') {
        candidato_A++;
        alert('Voto registrado com sucesso!');
    }
    else if(voto == 'B') {
        candidato_B++;
        alert('Voto registrado com sucesso!')
    }
    else if(voto == 'C') {
        candidato_C++;
        alert('Voto registrado com sucesso!') 
    }
    else {
        alert ('Candidato não encontrado!')
    }

    voto = prompot('Digite seu voto (A, B ou C)');
}

alert(`O candidato A teve ${candidato_A} votos!
\nO candidato B teve ${candidato_B} votos!
\nO candidato C teve ${candidato_C} votos!`);