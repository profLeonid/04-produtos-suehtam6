'use strict'

function adicionarProduto(){
    const produto = document.getElementById('produto')
    const codigo = document.getElementById('codigo')
    const quantidade = document.getElementById('quantidade')
    const listaProduto = document.getElementById('listaDeProduto')

    // Enviando para validar os dados, caso algum dado venha faltando
    let nomeProduto = validarDado(produto.value, "O produto")
    let numeroCodigo = validarDado(codigo.value, "O código")
    let numeroQtde = validarQuantidade(quantidade.value)

    // Aqui eu verifico se está diferente de verdadeiro
    // Caso seja diferente de verdadeiro, vai retornar false
    if(!nomeProduto || !numeroCodigo || !numeroQtde){
        return false
    }

    // Nesta parte eu crio o span e ja deixo settado as cores
    // E o tamanho de cada item criado

    const codigoSpan = document.createElement('span')
    codigoSpan.textContent = codigo.value
    codigoSpan.className = 'bg-red-200 py-2 px-8 border hover:bg-red-400 opacity-0 translate-y-4 transition-all duration-300 ease-out'

    const produtoSpan = document.createElement('span')
    produtoSpan.textContent = produto.value
    produtoSpan.className = 'bg-blue-200 py-2 px-8 border hover:bg-blue-400 opacity-0 translate-y-4 transition-all duration-300 ease-out'

    const qtdeSpan = document.createElement('span')
    qtdeSpan.textContent = quantidade.value
    qtdeSpan.className = 'bg-green-200 py-2 px-8 border hover:bg-green-400 opacity-0 translate-y-4 transition-all duration-300 ease-out'

    // Lista para colocar o que foi digitado na tela
    listaProduto.appendChild(codigoSpan)
    listaProduto.appendChild(produtoSpan)
    listaProduto.appendChild(qtdeSpan)

    // Pequeno delay para ativar a animação das caixas aparecendo
    setTimeout(() => {
        codigoSpan.classList.remove('opacity-0', 'translate-y-4')
        produtoSpan.classList.remove('opacity-0', 'translate-y-4')
        qtdeSpan.classList.remove('opacity-0', 'translate-y-4')
    }, 10)

    // Campos para limpar o que foi digitado
    DeixaCampoVazio()
    codigoVazio()
    qtdeVazio()
}

//  .Trim() serve para remover espaços desnecessarios
// do começo e do final da string 
function validarDado(valor, nomeCampo){
    if (valor.trim() === "") {
        alert(nomeCampo + " não pode estar vazio.")
        return false
    }

    return true
}

// Validação para não permitir quantidade vazia,
// menor ou igual a zero e nem valores que não sejam número
function validarQuantidade(valor){
    const numero = Number(valor)

    if (valor.trim() === "") {
        alert("A quantidade não pode estar vazia.")
        return false
    }

    if (isNaN(numero)) {
        alert("A quantidade deve ser um número.")
        return false
    }

    if (numero <= 0) {
        alert("A quantidade deve ser maior que 0.")
        return false
    }

    return true
}

function DeixaCampoVazio(){
    document.getElementById('produto').value = ''
}

function codigoVazio(){
    document.getElementById('codigo').value = ''
}

function qtdeVazio(){
    document.getElementById('quantidade').value = ''
}