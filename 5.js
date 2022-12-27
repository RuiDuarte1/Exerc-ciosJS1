// Desenvolva uma função JavaScript para
// que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).

const formatar = (decimal) => {
    const valor = `R$ ${decimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valor);
}

formatar(0.1 + 0.2);