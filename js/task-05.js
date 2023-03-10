const inputEl = document.querySelector('#name-input');
const textEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInput);

function onInput(event){
    if (event.currentTarget.value === "") {
        return textEl.textContent = "Anonymous";
    }
    textEl.textContent = event.currentTarget.value;
}