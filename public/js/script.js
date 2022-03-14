const btn = document.getElementById('btn');
const emailValue = document.getElementById('email');
const errText = document.querySelector('.hidden');
const regx = /^([a-zA-Z0-9\._])+@([a-zA-Z0-9])+.([a-z])+$/;

const validate = () => {
    if(regx.test(emailValue.value)) {
        errText.classList.remove('error');
        emailValue.classList.remove('err-border');
        emailValue.value = "";
    }
    else { 
        errText.classList.add('error');
        emailValue.classList.add('err-border');
     }
}

btn.addEventListener('click', (e) => {
    e.preventDefault()
    validate()
})