const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', (event)=>{
    const fontSize = event.currentTarget.value;
    textEl.style.fontSize = `${fontSize}px`;
})