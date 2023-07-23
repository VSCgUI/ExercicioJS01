let firstNumber = prompt("Insira o primeiro número!")
let secondNumber = prompt("Insira o segundo número!")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

let sum = firstNumber + secondNumber;
let sub = firstNumber - secondNumber;
let mut = firstNumber * secondNumber;
let div = (firstNumber / secondNumber).toFixed(2);
let rest = firstNumber % secondNumber;

alert(`A soma dos dois números é igual á: ${sum}`)
alert(`A subtração dos dois números é igual á: ${sub}`)
alert(`A multiplicação dos dois números é igual á: ${mut}`)
alert(`A divisão dos dois números é igual á: ${div}`)
alert(`O resto da divisão dos dois números é igual á: ${rest}`)

if(sum%2 == 0 ) {
  alert(`A soma é par: ${sum}`)
} else {
  alert(`A soma é impar: ${sum}`)
}

if(firstNumber == secondNumber) {
  alert(`Os dois números são iguais!`)
} else {
  alert(`Os dois números são diferentes!`)
}
