let callbackList = document.querySelector('#v-pills-callback');

callbackList.addEventListener('click', function (e) {
    if (e.target.classList.contains('btn-remove')) {
        let id = e.target.parentNode.parentNode.querySelector('.id').value;
        fetch(' /callback-request/' + id, {
            method: 'DELETE'
        }).then((resp) => resp.text)
            .then(() => window.history.go());
    }
})