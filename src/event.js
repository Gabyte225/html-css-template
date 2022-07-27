document.addEventListener('keydown', (event) => {
    alert(event.code);
});

//-----------------------------------------------------
const button = document.querySelector('.size__black')

button.addEventListener('click', (event) => {
    alert(`${event} size is 0.5m`);
});

//----------------------------------------------------
let scrollPosition = 0;

document.addEventListener('scroll', (e) => {
    scrollPosition = alert(scrollY);
})

//----------------------------------------------------
const numberInput = document.querySelector("#number");
const numberValue = document.querySelector("body > main > div > section.thuja-card > div.quantity > p");

numberInput.addEventListener('change', (e) => {
   numberValue.append(e.target.value);
});

//--------------------------------------------------

const submitButton = document.querySelector("body > main > div > section.thuja-card > button.border-button");
submitButton.addEventListener('click', (event) => {
    alert('Items was added to card');
});

//-----------------------------------------------

const selectedLinkButtons = document.querySelectorAll('button > a');

selectedLinkButtons.forEach((value, i) => {
    console.log(value, i);
    addEventListener('click', (e) => {
        alert(`Button was clicked ${i}`);
    })
})
