// Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
// para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
// Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
// informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
// nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.


const withDraw = (value) =>{
    let note100 = 0;
    let note50 = 0;
    let note10 = 0;
    let note5 = 0;
    let note1 = 0;

    let noteValue = calculateValue(value);

    while(value >= noteValue){
        switch(noteValue){
            case 100:
                value -= 100;
                note100++;
                break;
            case 50:
                value -= 50;
                note50++;
                break;
            case 10:
                value -= 10;
                note10++;
                break;
            case 5:
                value -= 5;
                note5++;
                break;
            case 1:
                value -= 1;
                note1++;
                break;
        }

        noteValue = calculateValue(value);
    }

    return showResult(note100, note50, note10, note5, note1);
}

const calculateValue = (value) =>{
    if(value >= 100){
        return 100;
    }else if(value >= 50){
        return 50;
    }else if(value >= 10){
        return 10;
    }else if(value >= 5){
        return 5;
    }else if(value >= 1){
        return 1;
    }
}

const showResult = (note100, note50, note10, note5, note1) =>{
    let result = '';

    if(note100 > 0){
        result += `${note100} nota(s) de 100\n`;
    }if(note50 > 0){
        result += `${note50} nota(s) de 50\n`;
    }if(note10 > 0){
        result += `${note10} nota(s) de 10\n`;
    }if(note5 > 0){
        result += `${note5} nota(s) de 5\n`;
    }if(note1 > 0){
        result += `${note1} nota(s) de 1\n`;
    }

    return result;
}

console.log(withDraw(265));