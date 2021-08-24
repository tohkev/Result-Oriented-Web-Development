let callMeForm = document.querySelector('.call-me-form');

callMeForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let phoneInput = callMeForm.querySelector('.phone-input')
    fetch(' /callback-request', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            phoneNumber: phoneInput.value
        })
    }).then((resp) => resp.text())
        .then(() => alert('We will call you back as soon as possible!'))
});