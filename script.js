// Seleciona o elemento de entrada do usuário (input) com o ID 'fnum'.
let num = document.querySelector('input#fnum');

// Seleciona o elemento da lista (select) com o ID 'flista', onde os valores serão exibidos.
let lista = document.getElementById('flista');

// Seleciona o elemento para mostrar resultados com o ID 'res'.
let res = document.getElementById('res');

// Cria um array vazio para armazenar os valores válidos inseridos pelo usuário.
let valores = [];

// Função para verificar se o número está no intervalo válido (1 a 100).
function isNumero(n) {
    let num = Number(n); // Converte o valor de entrada para um número.
    return num >= 1 && num <= 100; // Retorna verdadeiro se o número estiver entre 1 e 100, caso contrário, falso.
}

// Função para verificar se o número já está na lista de valores.
function inLista(n, l) {
    return l.indexOf(Number(n)) != -1; // Retorna verdadeiro se o número já estiver na lista (indexOf retorna -1 se não encontrado).
}

// Função chamada quando o usuário clica para adicionar um valor.
function add() {
    // Verifica se o valor é um número válido e não está na lista.
    if (isNumero(num.value) && !inLista(num.value, valores)) {}
}
        