// Um funcionário irá receber um aumento de acordo com o seu plano de
// trabalho, de acordo com a tabela abaixo:
// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
// novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

const icreaseSalary = (workPlan, currentWage) =>{
    switch(workPlan){
        case 'A':
            newSalary = (currentWage * 0.1) + currentWage;
            console.log(`Novo salário: ${newSalary}`);
            break;
        case 'B':
            newSalary = (currentWage * 0.15) + currentWage;
            console.log(`Novo salário: ${newSalary}`);
            break;
        case 'C':
            newSalary = (currentWage * 0.2) + currentWage;
            console.log(`Novo salário: ${newSalary}`);
            break;
        default: {
            console.log('plano inválido!');
        }
    }
}

icreaseSalary('A', 1000);
icreaseSalary('B', 1500);
icreaseSalary('C', 2000);
icreaseSalary('D');