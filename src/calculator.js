//Functions:

// const inputOne = document.querySelector("body > div > form > input.InputOne");
// const inputTwo = document.querySelector("body > div > form > input.InputTwo");
// const resultCount = document.querySelector("body > div > div.result");

// const sumButton = document.querySelector("body > div > div.div-calculator > button.sum");
// const subButton = document.querySelector("body > div > div.div-calculator > button.sub");
// const divButton = document.querySelector("body > div > div.div-calculator > button.div");
// const mulButton = document.querySelector("body > div > div.div-calculator > button.mul");
// const modButton = document.querySelector("body > div > div.div-calculator > button.mod");
// const clearButton = document.querySelector("body > div > button");

// const handleValidation = (() => {
//     if (inputOne.value === '' || inputTwo.value === ''){
//         resultCount.append('all inputs must be filled');
//     };
// });

// const inputValue = (() => {
//     inputOne.value = '';
//     inputTwo.value = '';
// });

// clearButton.addEventListener('click', () => {
//     resultCount.value = '';
// });

// sum:

// const sumSum = (() => {
//     return Number(inputOne.value) + Number(inputTwo.value);
// });
// sumButton.addEventListener('click', (e) => {
//     // if ( inputOne.value !== '' && inputTwo.value !== ''){
//     //     return resultCount.append(sumSum()), inputValue();
//     // };
//     handleValidation();
// });


// //sub:

// const subSub = (() => {
//     return inputOne.value - inputTwo.value;
// });

// subButton.addEventListener('click', (e) => {
//     if ( inputOne.value !== '' && inputTwo.value !== ''){
//         return resultCount.append(subSub()), inputValue();
//     };
//     handleValidation();
// });

// //div:

// const divDiv = (() => {
//     return inputOne.value / inputTwo.value;
// });

// divButton.addEventListener('click', (e) => {
//     if ( inputOne.value !== '' && inputTwo.value !== ''){
//         return resultCount.append(divDiv()), inputValue();
//     };
//     handleValidation();
// });

// //mul:

// const mulMul = (() => {
//     return inputOne.value * inputTwo.value;
// });

// mulButton.addEventListener('click', (e) => {
//     if ( inputOne.value !== '' && inputTwo.value !== ''){
//         return resultCount.append(mulMul()), inputValue();
//     };
//     handleValidation();
// });

// //mod:

// const modMod = (() => {
//     return inputOne.value % inputTwo.value;
// });

// modButton.addEventListener('click', (e) => {
//     if ( inputOne.value !== '' && inputTwo.value !== ''){
//         return resultCount.append(modMod()), inputValue();
//     };
//     handleValidation();
// });

//Switch:
// const inputOne = document.querySelector("body > div > form > input.InputOne");
// const inputTwo = document.querySelector("body > div > form > input.InputTwo");
// const resultCount = document.querySelector("body > div > div.result");
// const clearButton = document.querySelector("body > div > button");

// const calculatorButton = document.querySelectorAll("body > div > div.div-calculator > button");

// const handleValidation = (() => {
//     if (inputOne.value === '' || inputTwo.value === ''){
//         resultCount.append('all inputs must be filled');
//     };
// });

// calculatorButton.forEach((i) => {
//     i.addEventListener('click', (e) => {
//         if ( e ){
//             switch (e[i]) {
//                 case e[0]:
//                     result = Number(inputOne.value) + Number(inputTwo.value);
//                     resultCount.textContent = result;
//                     break;
//                 case e[1]:
//                     result = inputOne.value - inputTwo.value;
//                     resultCount.textContent = result;
//                     break;
//             }
//         };
//         console.log(e[0]);
//     });
//     console.log(i);
// })



//Dėstytojo

// document.querySelector('.form-calculator').addEventListener("input", (e) => {
//     if(e.target.name === 'first'){
//         inputOne = Number(e.target.value);
//     } else if (e.target.name === 'second'){
//         inputTwo = Number(e.target.value);
//     }
// })


// document.querySelector("body > div > div.div-calculator > button.sum").addEventListener('click', () => {
//     printOutput(inputOne + inputTwo);
// });

// document.querySelector("body > div > div.div-calculator > button.sub").addEventListener('click', () => {
//     printOutput(inputOne - inputTwo);
// });

// document.querySelector("body > div > div.div-calculator > button.div").addEventListener('click', () => {
//     printOutput(inputOne / inputTwo);
// });

// document.querySelector("body > div > div.div-calculator > button.mul").addEventListener('click', () => {
//     printOutput(inputOne * inputTwo);
// });

// document.querySelector("body > div > div.div-calculator > button.mod").addEventListener('click', () => {
//     printOutput(inputOne % inputTwo);
// });

// document.querySelector("body > div > button").addEventListener('click', () => {
//     printOutput(null);
// })

//Dėstytojo su switch:

const resultCount = document.querySelector("body > div > div.result");

let inputOne = null;
let inputTwo = null;

function printOutput(content) {
    document.querySelector("body > div > div.result").textContent = content;
}


function handleAction(action){
    switch (action) {
        case 'sum':
            printOutput(inputOne + inputTwo);
            break;
        case 'sub':
            printOutput(inputOne - inputTwo);
            break;
        case 'div':
            printOutput(inputOne / inputTwo);
            break;
        case 'mul':
            printOutput(inputOne * inputTwo);
            break;
        case 'mod':
            printOutput(inputOne & inputTwo);
            break;
    }
}

document.querySelector('.form-calculator').addEventListener("input", (e) => {
    if(e.target.name === 'first'){
        inputOne = Number(e.target.value);
    } else if (e.target.name === 'second'){
        inputTwo = Number(e.target.value);
    }
})

document.querySelector('.actions').addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON' && e.target.name){
        handleAction(e.target.value);
    }
})


