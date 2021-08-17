let emailRequestForm = document.querySelector('.email-request-form');

emailRequestForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let emailName = document.querySelector('#your-name');
    let emailEmail = document.querySelector('#your-email');
    let emailMessage = document.querySelector('#your-message');
    fetch('http://localhost:3000/emails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: emailName.value,
            email: emailEmail.value,
            message: emailMessage.value
        })
    }).then((resp) => resp.text())
        .then((data) => console.log(data))
})