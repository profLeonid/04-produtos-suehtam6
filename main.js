'use strict'

function adicionarProduto(){
    const produto = document.getElementById('produto')
    const lista = document.getElementById('listaDeProduto')

    const span = document.createElement('span')
    span.textContent = produto.value
    
    
    
    
    span.className = 'bg-blue-200 py-2 px-8'    
    lista.appendChild(span)}