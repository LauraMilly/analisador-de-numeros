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
    // Verifica se o valor inserido é um número válido e se não está já na lista de valores.
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        // Adiciona o número à lista de valores.
        valores.push(Number(num.value)); 

        // Cria um novo elemento <option> para exibir a mensagem na lista.
        let item = document.createElement('option');

        // Define o texto do novo item da lista com o valor adicionado.
        item.text = `Valor ${num.value} adicionado`;

        // Adiciona o novo item à lista de opções (presumivelmente um <select> ou <datalist>).
        lista.appendChild(item);
        res.innerHTML=''
    } else {
        // Exibe um alerta se o valor for inválido ou já estiver na lista.
        window.alert('Valor inválido ou já encontrado na lista');
    }
    // Limpa o campo de entrada e coloca o foco de volta nele.
    num.value = '';
    num.focus();
}

function finalizar() {
    // Verifica se a lista de valores está vazia.
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar');
    } else {
        // Inicializa variáveis para armazenar o total de valores, maior, menor, soma e média.
        let tot = valores.length;
        let maior = valores[0]; // Assume que o primeiro valor é o maior inicialmente.
        let menor = valores[0]; // Assume que o primeiro valor é o menor inicialmente.
        let soma = 0; // Inicializa a soma dos valores.
        let media = 0; // Inicializa a média dos valores.

        // Itera sobre a lista de valores para calcular soma, maior, e menor valor.
        for (let pos in valores) {
            soma += valores[pos]; // Adiciona o valor atual à soma total.
            if (valores[pos] > maior) {
                maior = valores[pos]; // Atualiza o maior valor se o valor atual for maior.
            }
            if (valores[pos] < menor) {
                menor = valores[pos]; // Atualiza o menor valor se o valor atual for menor.
            }
        }

        // Calcula a média dos valores.
        media = soma / tot;

        // Limpa o conteúdo atual do elemento `res`.
        res.innerHTML = '';

        // Adiciona o total de números à lista ao conteúdo do elemento `res`.
        res.innerHTML += `<p>Você adicionou ${tot} números à lista.</p>`;
        // Adiciona o maior valor informado ao conteúdo do elemento `res`.
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        // Adiciona o menor valor informado ao conteúdo do elemento `res`.
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
        // Adiciona a soma de todos os valores ao conteúdo do elemento `res`.
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
        // Adiciona a média dos valores ao conteúdo do elemento `res`.
        res.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(2)}.</p>`; // Formata a média para duas casas decimais.
    }
}
        