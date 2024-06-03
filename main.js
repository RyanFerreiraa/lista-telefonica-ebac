const form = document.getElementById('form-atividade');

const nomes = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaLista();
});

function adicionaLinha() {
    const inputNomePessoa = document.getElementById('nome-pessoa');
    const inputNumPessoa = document.getElementById('num-pessoa');
    

    if (numeros.includes(inputNumPessoa.value)) {
        alert('Número já foi cadastrado!');
    } else if (inputNumPessoa.value.length !== 11) {
        alert('Esse número não possui 11 dígitos!');
    } else {
        nomes.push(inputNomePessoa.value);
        numeros.push(inputNumPessoa.value);
    
        let linha = '<tr>';
        linha += '<td>' + inputNomePessoa.value + '</td>';
        linha += '<td>' + inputNumPessoa.value + '</td>';
        linha += '</tr>';
    
        linhas += linha;
    }

    inputNomePessoa.value = '';
    inputNumPessoa.value = '';
}

function atualizaLista() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

