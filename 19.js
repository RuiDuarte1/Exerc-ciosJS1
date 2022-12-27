// O cardápio de uma lanchonete é o seguinte: *cardapio xD*
// Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
// a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
// comando switch. Crie um caso default para produto não existente.

const lanchoneteDoZe = (code, quantity) => {
    switch(code){
        case 100:
            total = quantity * 3.00;
            console.log(`${quantity} Cachorro Quente, total: R$ ${total}`);
            break;
        case 200:
            total = quantity * 4.00;
            console.log(`${quantity} Hambúrguer Simples, total: R$ ${total}`);
            break;
        case 300:
            total = quantity * 5.50;
            console.log(`${quantity} Cheeseburguer, total: R$ ${total}`);
            break;
        case 400:
            total = quantity * 7.50;
            console.log(`${quantity} Baurú, total: R$ ${total}`);
            break;
        case 500:
            total = quantity * 3.50;
            console.log(`${quantity} Refrigerante, total: R$ ${total}`);
            break;
        case 600:
            total = quantity * 2.80;
            console.log(`${quantity} Suco, total: R$ ${total}`);
            break;

        default:{
            console.log('Produto não existente');
        }
    }
}

lanchoneteDoZe(100, 2);
lanchoneteDoZe(200, 3);
lanchoneteDoZe(300, 1);
lanchoneteDoZe(400, 4);
lanchoneteDoZe(500, 3);
lanchoneteDoZe(600, 5);
lanchoneteDoZe(700, 2);