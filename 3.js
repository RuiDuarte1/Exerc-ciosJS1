// Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

const potencia = (base, expoente) => {
    let resultado = Math.pow(base, expoente);
    resultado = base ** expoente;

    return resultado;
}

console.log(potencia(5, 2));