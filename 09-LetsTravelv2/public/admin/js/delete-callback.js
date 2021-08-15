let callbackList = document.querySelector('#v-pills-callback');

callbackList.addEventListener('click', function (e) {
    if (e.target.classList.contains('btn-remove')) {
        let id = e.target.parentNode.parentNode.querySelector('.id').value;
        fetch('http://localhost:3000/callback-request/' + id, {
            method: 'DELETE'
        }).then((resp) => resp.text)
            .then(() => window.history.go());
    }
})