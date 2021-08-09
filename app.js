
const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '' ) {
      
        const valorImc = ( peso/(altura*altura)).toFixed(1);
        
        let valoresimc = '';
        if (valorImc < 18.5){
            valoresimc = 'Abaixo do Peso'
        } else if(valorImc < 25) {
            valoresimc= 'No peso Ideal'
        }
        else if(valorImc < 30) {
            valoresimc= 'Com sobrepeso'
        }
        else if(valorImc < 35) {
            valoresimc= 'Com inicio de Obesidade'
        }
        else if(valorImc < 40) {
            valoresimc= 'Com Obesidade'
        } else {
            valoresimc= 'Com Obesidade Grave'

        }



        resultado.textContent = `${nome} Seu IMC e ${valorImc} Voce esta ${valoresimc}`;


    }else { resultado.textContent = 'Os campos precisam ser preenchidos!';
    }
}

calcular.addEventListener ('click', imc);

