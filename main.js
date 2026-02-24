'use strict'

function adicionarProduto(){
    const produto = document.getElementById('produto')
    const codigo = document.getElementById('codigo')
    const quantidade = document.getElementById('quantidade')
    const listaProduto = document.getElementById('listaDeProduto')

    const produtoSpan = document.createElement('span')
    produtoSpan.textContent = produto.value

    const codigoSpan = document.createElement('span')
    codigoSpan.textContent = codigo.value

    const qtdeSpan = document.createElement('span')
    qtdeSpan.textContent = quantidade.value

    let nomeProduto = validarDado(produto.value)
    
       if(nomeProduto){
        produtoSpan.className = 'bg-blue-200 py-2 px-8'    
        listaProduto.appendChild(produtoSpan)
        DeixaCampoVazio()
       }else{
        return false
       }

       let numeroCodigo = validarDado(codigo.value)

       if(numeroCodigo){
        codigoSpan.className = 'bg-red-200 py-2 px-8'    
        listaProduto.appendChild(codigoSpan)
        codigoVazio()
       }else{
        return false
       }

       let numeroQtde = validarDado(quantidade.value)

       if(numeroQtde){
        qtdeSpan.className = 'bg-green-200 py-2 px-8'    
        listaProduto.appendChild(qtdeSpan)
        qtdeVazio()
       }else{
        return false
       }
       
    }

    function validarDado(produto){

        let nomeProduto = produto
        if(nomeProduto.value == ""){
            return false
        }else{
            return nomeProduto
        }

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

    
    
