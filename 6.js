// Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos

const jurosSimples = (c, i, t) =>{
    return c + (c * (i/100) * t);
}

const jurosCompostos = (c, i, t) => {
    return c * (1 + (i/100)) ** t;
}

console.log(jurosSimples(400, 5, 4));
console.log(jurosCompostos(10000, 6, 12));