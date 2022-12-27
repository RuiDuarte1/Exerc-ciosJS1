const vetor = [1, 2, 3, 4, 5, 6];

const mediaVetor = (vetor) =>{
    let soma = 0;
  
    for(let i = 0; i < vetor.length; i++){
        soma += vetor[i]
    }

    console.log(`soma dos vetores: ${soma}`);

    media = soma / vetor.length;
    console.log(`media: ${media}`);
}

mediaVetor(vetor);