// const numbers = document.querySelectorAll(".number");
// console.log(numbers);

// numbers.forEach((number) => {
//     number.addEventListener("click",()=>{
//         console.log(event.target.value)
//     })
// })

const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number 
}


let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'




const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    }else{
        currentNumber += number
    }
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener("click",()=>{
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) =>{
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator)=> {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}


const calculate = () => {
    let result = ''
    switch(calculationOperator){
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break;
        case "-":
            result = prevNumber - currentNumber
            break;
        case "*":
            result = prevNumber * currentNumber
            break;
        case "/":
            result = prevNumber / currentNumber
            break;
        default:
            break;
    }
    currentNumber =result 
    calculationOperator = ''           
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click',()=>{
    calculate()
    updateScreen(currentNumber)
})

const clearBtn = document.querySelector('.all-clear')

const clearAll = () => {
prevNumber = ''
calculationOperator = ''
currentNumber = '0'
}

clearBtn.addEventListener('click',()=>{
    clearAll()
    updateScreen(currentNumber)
})

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event)=>{
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot)=>{
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}