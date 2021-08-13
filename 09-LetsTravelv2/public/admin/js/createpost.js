let createPostForm = document.querySelector('.create-post-form');
let createTitle = document.querySelector('#create-title');
let createCountry = document.querySelector('#create-title');
let createImageURL = document.querySelector('#create-image-url');
let createText = document.querySelector('#create-text');

createPostForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let text = createText.value;
    fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: createTitle.value,
            country: createCountry.value,
            imageURL: createImageURL.value,
            text: text,
            description: text.substring(0, text.indexOf('.') + 1)
        })
    }).then((response) => response.text())
        .then((data) => window.history.go())
});