let operator = '';
let firstNumber=0;
let secondNumber=0;
let result=0;
let currentNumber = '';


// this function will get the number input from the user and it store as firstnumber and secondnumber 
function setNumber(number) {
    // Check if it's the first or second number
    if (!currentNumber.includes('.')) {
        currentNumber += number;
    }
     else {
    currentNumber += number;
     }
    
    document.getElementById('secondNumber').textContent = currentNumber;
    
}

function setOperator(selectedOperator) {
    operator = selectedOperator;
    firstNumber = parseFloat(currentNumber);
    document.getElementById('firstNumber').textContent=`${operator} ${firstNumber}`
    currentNumber = '';
    
}


function performCalculation() {
    secondNumber = parseFloat(currentNumber);

    switch (operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            if(secondNumber !== 0){
            result = firstNumber / secondNumber;
            }
            else{
                result=null
            }
            break;
        case '%':
            result = firstNumber % 100;
            break;
        default:
            return null
    }
    document.getElementById('secondNumber').textContent = result;
    document.getElementById('firstNumber').textContent=`${firstNumber} ${operator} ${secondNumber} `
    currentNumber = result.toString();
}

function clearAll(){
    document.getElementById('secondNumber').textContent = '0';
    document.getElementById('firstNumber').textContent = '0';
    currentNumber = '';
    operator = '';
    firstNumber = 0;
    secondNumber = 0;
}
function clear() {
    document.getElementById('secondNumber').textContent = '0';
    secondNumber = 0;
}

function deleteLastCharacter() {
    let secondNum = document.getElementById('secondNumber').textContent;
    if (secondNum.length > 1) {
        secondNum = secondNum.slice(0, secondNum.length - 1);
    } else {
        secondNum = '0';
    }
    document.getElementById('secondNumber').textContent = secondNum;
    secondNumber = parseFloat(secondNum);
}



