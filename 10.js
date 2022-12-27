// Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
// ou false.

const analise = (num) => {
    if(num % 3 == 0){
        return true;
    }else{
        return false;
    }
}

console.log(analise(9));
console.log(analise(10));
console.log(analise(6));