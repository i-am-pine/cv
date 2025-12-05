let firstNumber = '';
let secondNumber = '';
let operation = '';

const numbers = ['0','1','2','3','4','5','6','7','8','9','.']
const operations = ['/', '*', '-', '+']

const result = document.querySelector('.result')

function deleteAll(){
    firstNumber = '';
    secondNumber = '';
    operation = '';
    result.textContent = 0;
}

function deleteLast(){
    if (secondNumber !== ''){
        secondNumber = secondNumber.slice(0,-1);
        if (secondNumber==='') result.textContent = 0;
        else result.textContent = secondNumber;
    }
    else{
        if (operation === ''){
            firstNumber = firstNumber.slice(0,-1);
            if (firstNumber==='') result.textContent = 0;
            else result.textContent = firstNumber;
        }
    } 
}

function countResult(){
    switch (operation) {
        case '+':
            firstNumber = ((+firstNumber)+(+secondNumber)).toString();
            break;
        case '-':
            firstNumber = ((+firstNumber)-(+secondNumber)).toString();
            break;
        case '*':
            firstNumber = ((+firstNumber)*(+secondNumber)).toString();
            break;
        case '/':
            if (+secondNumber!=0){
                firstNumber = ((+firstNumber)/(+secondNumber)).toString();
                break;
            }
            else{ 
                result.textContent = 'ERROR';
                firstNumber = '';
                secondNumber = '';
                operation = '';
                return;
            }
    }
    result.textContent = firstNumber;
    secondNumber = '';
    operation = '';
}

function mainCalcFunction(event){
    if (event.target.tagName!='BUTTON') return;
    //result.textContent = '';

    const value = event.target.textContent;
    console.log(value)
    if (numbers.includes(value)){
        if (operation === '' && secondNumber === ''){
            firstNumber += value;
            result.textContent = firstNumber;
        }
        else {
            secondNumber += value;
            result.textContent = secondNumber;
        }
        console.log('1===', value, firstNumber, secondNumber, operation)
        return;
    }
    if (operations.includes(value) && firstNumber!==''){
        if (operation!=''){
            countResult()
        }
        operation = value;
        result.textContent = operation;
        console.log('2===', value, firstNumber, secondNumber, operation)

        return;
    }

    if (value==='='){
        countResult()
        // switch (operation) {
        //     case '+':
        //         firstNumber = ((+firstNumber)+(+secondNumber)).toString();
        //         break;
        //     case '-':
        //         firstNumber = ((+firstNumber)-(+secondNumber)).toString();
        //         break;
        //     case '*':
        //         firstNumber = ((+firstNumber)*(+secondNumber)).toString();
        //         break;
        //     case '/':
        //         if (+secondNumber!=0){
        //             firstNumber = ((+firstNumber)/(+secondNumber)).toString();
        //             break;
        //         }
        //         else{ 
        //             result.textContent = 'ERROR';
        //             firstNumber = '';
        //             secondNumber = '';
        //             operation = '';
        //             return;
        //         }
        // }
        // result.textContent = firstNumber;
        // secondNumber = '';
        // operation = '';
    }
    console.log('4===', value, firstNumber, secondNumber, operation)

//    console.log(firstNumber, secondNumber, operation)
}

document.querySelector('.delete-all').addEventListener('click', deleteAll);
document.querySelector('.delete-last').addEventListener('click', deleteLast);
document.querySelector('.buttons').addEventListener('click', (event) => {mainCalcFunction(event) })