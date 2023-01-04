const value = document.querySelector('#validation-input');
const checkLength = value.dataset.length;
value.addEventListener('blur', onBlur)
function onBlur(event) {
    if (event.currentTarget.value.length === Number(checkLength)) {
      value.classList.remove('invalid');
      value.classList.add('valid');
    }
    else {
      value.classList.remove('valid');
      value.classList.add('invalid');
    }
}