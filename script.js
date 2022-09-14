function calcular(tipo, valor){
    console.log(tipo,valor)
    if(tipo === 'acao'){
        if(valor === 'c'){
            document.getElementById('Result').value = 0
        }
        else if(valor ==='+'){
            document.getElementById('Result').value += valor
        }
        else if(valor ==='-'){
            document.getElementById('Result').value += valor
        }
        else if(valor ==='x'){
            document.getElementById('Result').value += '*'
        }
        else if(valor ==='='){
            var valor_final = eval(document.getElementById('Result').value) 
            document.getElementById('Result').value = valor_final
     
        }
        else if(valor ==='/'){
            document.getElementById('Result').value += valor
        }
        else if(valor ==='.'){
            document.getElementById('Result').value += valor
        }

    }
    else if (tipo==='valor'){
        var valor_c =  document.getElementById('Result').value 
        document.getElementById('Result').value = valor_c + valor
    }

}