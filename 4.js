// Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
// e o resto da divisão destes dois valores.

const divide = (dividendo, divisor) => {
    const divisao = dividendo / divisor;
    const result = divisao.toFixed(1);
    const resto = dividendo % divisor;

    console.log(`resultado: ${result}`);
    console.log(`resto: ${resto}`);
}

divide(10, 5);
divide(8, 3);