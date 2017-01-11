window.addEventListener('load', function () {

    let name = new RegExp('^[a-zA-Z-]{2}[a-zA-Z- ]+$');

    let textbox = document.querySelector('#name');
    textbox.addEventListener('keyup', function () {
        if (name.test(textbox.value) === true) {
            textbox.classList.add('valid');
            textbox.classList.remove('invalid');
        } else {
            textbox.classList.add('invalid');
            textbox.classList.remove('valid');
        }
    });

    let address = new RegExp('^[0-9]{1,4} [a-zA-Z ]* (Ave|Park|St|Lane|Blvd)$');

    let textbox2 = document.querySelector('#address');
    textbox2.addEventListener('keyup', function () {
        if (address.test(textbox2.value) === true) {
            textbox2.classList.add('valid');
            textbox2.classList.remove('invalid');
        } else {
            textbox2.classList.add('invalid');
            textbox2.classList.remove('valid');
        }
    });

    let email = new RegExp('^[a-zA-Z][a-zA-Z0-9_]+\\.?([a-zA-Z_]+)?@[a-zA-Z]+\\.[a-z]{2,3}\\.?([a-z]{2})?$'); //regex in JS, regular expression object,

    let textbox3 = document.querySelector('#email');
    textbox3.addEventListener('keyup', function () {
        if (email.test(textbox.value) === true) {
            textbox3.classList.add('valid');
            textbox3.classList.remove('invalid');
        } else {
            textbox3.classList.add('invalid');
            textbox3.classList.remove('valid');
        }
    });

    let username = new RegExp('^[a-zA-Z][a-zA-Z0-9]{1,15}$');

    let textbox4 = document.querySelector('#username');
    textbox4.addEventListener('keyup', function () {
        if (username.test(textbox.value) === true) {
            textbox4.classList.add('valid');
            textbox4.classList.remove('invalid');
        } else {
            textbox4.classList.add('invalid');
            textbox4.classList.remove('valid');
        }
    });

});
