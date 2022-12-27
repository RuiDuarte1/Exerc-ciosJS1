// Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
const vetor = [2, 3, 4, 5, 6, 10];

const maiorMenor = (vetor) =>{
    let maior;
    let menor;

    for(let i = 0; i < vetor.length; i++){
        if(maior === undefined && menor === undefined){
            maior = vetor[i];
            menor = vetor[i];
        }else{
            if(vetor[i] > maior){
                maior = vetor[i];
            }if(vetor[i] < menor){
                menor = vetor[i];
            }
        }
    }
    
    return `maior: ${maior}\nmenor: ${menor}`;
}

console.log(maiorMenor(vetor));