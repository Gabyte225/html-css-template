const listInput = document.querySelector('#listInput');
let inputButtons = document.querySelector('.input');
const list = document.querySelector('.guest-list');

let ulList = document.createElement('ul');
list.appendChild(ulList);

let guestListArr = [];

function addGuest(){
    if(guestListArr.length){
        const template = document.createElement("li");
        template.textContent = listInput.value;
        ulList.appendChild(template);
    }
}
addGuest();

const addToEnd = document.createElement('button');
inputButtons.appendChild(addToEnd);
addToEnd.className = 'addToEnd';
document.querySelector('.addToEnd').textContent = 'Add to end';

addToEnd.addEventListener('click', () =>{
    guestListArr.push(listInput.value);
    listInput.value = '';
    addGuest();
});

const addToStart = document.createElement('button');
inputButtons.appendChild(addToStart);
addToStart.className = 'addToStart';
document.querySelector('.addToStart').textContent = 'Add to start';

addToStart.addEventListener('click', () =>{
    guestListArr.unshift(listInput.value);
    listInput.value = '';
    addGuest();
});

const removeFirst = document.createElement('button');
inputButtons.appendChild(removeFirst);
removeFirst.className = 'removeFirst';
document.querySelector('.removeFirst').textContent = 'Remove first';

removeFirst.addEventListener('click', () =>{
    guestListArr.shift();
    listInput.value = '';
    addGuest();
});

const removeLast = document.createElement('button');
inputButtons.appendChild(removeLast);
removeLast.className = 'removeLast';
document.querySelector('.removeLast').textContent = 'Remove last';

removeLast.addEventListener('click', () =>{
    guestListArr.pop();
    listInput.value = '';
    addGuest();
});

const reverseList = document.createElement('button');
inputButtons.appendChild(reverseList);
reverseList.className = 'reverseList';
document.querySelector('.reverseList').textContent = 'Reverse list';

reverseList.addEventListener('click', () =>{
    guestListArr.reverse();
    listInput.value = '';
    addGuest();
});