// Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo)

const triangulo = (comp1, comp2, comp3) => {
    if(comp1 == comp2 && comp2 == comp3){
        console.log('triângulo equilátero');
    }else if(comp1 == comp2 || comp2 == comp3 || comp1 == comp3){
        console.log('triângulo isósceles');
    }else{
        console.log('triângulo escaleno');
    }
}

triangulo(2, 2, 2);
triangulo(2, 2, 3);
triangulo(1, 2, 3);
triangulo(3, 2, 2);
triangulo(1, 5, 7);

