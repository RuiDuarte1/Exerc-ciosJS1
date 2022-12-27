// Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
// considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
// de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
// idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130

Number.prototype.entre = function(idadeInicial, idadeFinal){
    return this >= idadeInicial && this <= idadeFinal;
}

const conveniado = function(idade){
    if(idade.entre(1, 10)){
        return 'Vai pagar R$180';
    }else if(idade.entre(11, 30)){
        return 'Vai pagar R$150';
    }else if(idade.entre(31, 60)){
        return 'Vai pagar R$195';
    }else{
        return 'Vai pagar R$230';
    }
} 


console.log(conveniado(8));
console.log(conveniado(15));
console.log(conveniado(35));
console.log(conveniado(52));
console.log(conveniado(80));