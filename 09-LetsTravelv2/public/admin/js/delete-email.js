let emailsBlock = document.querySelector('#v-pills-mails');

emailsBlock.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-remove')) {
        let id = e.target.parentNode.parentNode.querySelector('.id').value;
        fetch(' /emails/' + id, {
            method: 'DELETE'
        }).then((resp) => resp.text)
            .then(() => window.history.go());
    }
})