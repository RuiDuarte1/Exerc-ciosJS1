// Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const imparPar = (vetor) =>{
    let qntdpar = 0;
    let qntdimpar = 0;

    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] % 2 == 0){
            qntdpar++;
        }else{
            qntdimpar++;
        }
    }

    console.log(`${qntdpar} pares e ${qntdimpar} ímpares`);
}

imparPar(vetor);
