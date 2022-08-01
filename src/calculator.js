const inputOne = document.querySelector("body > div > form > input.InputOne");
const inputTwo = document.querySelector("body > div > form > input.InputTwo");
const resultCount = document.querySelector("body > div > div.result");

const sumButton = document.querySelector("body > div > div.div-calculator > button.sum");
const subButton = document.querySelector("body > div > div.div-calculator > button.sub");
const divButton = document.querySelector("body > div > div.div-calculator > button.div");
const mulButton = document.querySelector("body > div > div.div-calculator > button.mul");
const modButton = document.querySelector("body > div > div.div-calculator > button.mod");
const clearButton = document.querySelector("body > div > button");

const inputValue = (() => {
    inputOne.value = '';
    inputTwo.value = '';
});

clearButton.addEventListener('click', () => {
    resultCount.value = '';
});

const ifFunction = (() => {
    if (inputOne.value === '' || inputTwo.value === ''){
        resultCount.append('all inputs must be filled');
    };
});

// sum:

const sumSum = (() => {
    return Number(inputOne.value) + Number(inputTwo.value);
});
sumButton.addEventListener('click', (e) => {
    if ( inputOne.value !== '' && inputTwo.value !== ''){
        return resultCount.append(sumSum()), inputValue();
    };
    ifFunction();
});


//sub:

const subSub = (() => {
    return inputOne.value - inputTwo.value;
});

subButton.addEventListener('click', (e) => {
    if ( inputOne.value !== '' && inputTwo.value !== ''){
        return resultCount.append(subSub()), inputValue();
    };
    ifFunction();
});

//div:

const divDiv = (() => {
    return inputOne.value / inputTwo.value;
});

divButton.addEventListener('click', (e) => {
    if ( inputOne.value !== '' && inputTwo.value !== ''){
        return resultCount.append(divDiv()), inputValue();
    };
    ifFunction();
});

//mul:

const mulMul = (() => {
    return inputOne.value * inputTwo.value;
});

mulButton.addEventListener('click', (e) => {
    if ( inputOne.value !== '' && inputTwo.value !== ''){
        return resultCount.append(mulMul()), inputValue();
    };
    ifFunction();
});

//mod:

const modMod = (() => {
    return inputOne.value % inputTwo.value;
});

modButton.addEventListener('click', (e) => {
    if ( inputOne.value !== '' && inputTwo.value !== ''){
        return resultCount.append(modMod()), inputValue();
    };
    ifFunction();
});

