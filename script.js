const text = document.querySelector('.title');
const strText = 'Ran.Dev';
const splitText = strText.split('');

for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += `<span>${splitText[i]}</span>`
};

let character = 0;

let timer = setInterval(onTick, 400);

function onTick() {
    const span = text.querySelectorAll('span')[character];
    span.classList.add('fade');
    character++;
    if(character === splitText.length){
        complete();
        return;
    }
};

function complete(){
    clearInterval(timer);
    timer = null;
};

window.addEventListener('click', function() {
    location.reload();
})