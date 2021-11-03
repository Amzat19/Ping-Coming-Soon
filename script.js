const input = document.getElementById('email');
const form = document.getElementById('form');

form.addEventListener('submit', text => {
    text.preventDefault();

    let inputValue = input.value;
    if(!validateEmail(inputValue)) {
        return form.classList.add('error')

    } else {
        return form.classList.remove('error')
    }
});

function validateEmail(email) {
    let correctEmail = /\w+@[a-z].[a-z]/;
    return correctEmail.test(email);
}