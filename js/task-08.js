const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormData);

function onFormData(event) {
    event.preventDefault();
    const formEl = event.currentTarget.elements;
    const email = formEl.email.value;
    const password = formEl.password.value;

    if (email === "" || password === "") {
        alert("Все поля должны быть заполнены")
    } else {
        const formData = {
            email,
            password,
        }
        console.log(formData);
        event.currentTarget.reset();
    }
}
