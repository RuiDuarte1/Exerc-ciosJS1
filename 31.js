// Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console.

const vetor = [-1, -2, 3, 5, 6];

const negativos = (vetor) => {
    let qntdNegativos = 0;

    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] < 0){
            qntdNegativos++;
        }
    }

    return `Quantidade de numeros negativos: ${qntdNegativos}`;
}

console.log(negativos(vetor));