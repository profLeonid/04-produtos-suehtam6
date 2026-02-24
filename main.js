'use strict'

function adicionarProduto(){
    const produto = document.getElementById('produto')
    const lista = document.getElementById('listaDeProduto')

    const span = document.createElement('span')
    span.textContent = produto.value
    
    let nomeProduto = validarDado(produto.value)


       if(nomeProduto){
        span.className = 'bg-blue-200 py-2 px-8'    
        lista.appendChild(span)
        DeixaCampoVazio()
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
    
