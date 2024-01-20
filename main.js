
var numeroSecreto = Math.floor(Math.random() * 1001); // Use Math.floor para arredondar para o número inteiro mais próximo
var cont = 1; //Esta variável ( cont) será usada para contar quantas tentativas o jogador fez para adivinhar

function adivinhar() { //Aqui temos uma função chamada adivinhar, que será chamada quando o jogador fizer uma tentativa.
    var chute = parseInt(document.getElementById('txtn').value); // convertendo para um número inteiro
    var res = document.getElementById('res');
    
    if (chute == numeroSecreto) {
        res.innerHTML = `Você acertou! O número secreto é ${numeroSecreto}, e você tentou acertar o número ${cont - 1} vezes`;
    } else if (chute > numeroSecreto) {
        res.innerHTML = `Errou.. O número secreto é menor que ${chute} e você já fez ${cont} tentativas`;
        cont++;
    } else if (chute < numeroSecreto) {
        res.innerHTML = `Errou... O número secreto é maior que ${chute} e você já fez ${cont} tentativas`;
        cont++;
    }
}

// var numeroSecreto = parseInt(Math.random() * 1001)
// var cont = 1

// while (chute != numeroSecreto){
//  //   var chute = prompt("Digite um número entre 1 e 1000")
//     if(chute == numeroSecreto){
//        // alert('Acertou!')

//     } else if (chute > numeroSecreto){
//       //  alert(`Errou... o número secreto é menor que ${chute} e você já deu ${cont} chutes!`)
//         cont = cont + 1

//     } else if (chute < numeroSecreto) {
//       //  alert(`Errou... o número secreto é maior que ${chute} e você já deu ${cont} chutes!`)
//         cont = cont + 1
//     }

// }



/*var numeroSecreto = parseInt(Math.random() * 1001)
var cont = 1

function adivinhar(){
    var chute = document.getElementById('txtn')
    var res = document.getElementById('res')


    while (chute != numeroSecreto){
        if(chute == numeroSecreto){
            res.innerHTML= 'Acertou'
        } else if (chute > numeroSecreto){
            res.innerHTML = 'Errou.. o número secreto é menor'
            cont++
        }else if (chute < numeroSecreto){
            res.innerHTML = 'Errou... o número secreto é maior'
            cont++
        }
    }
} */
