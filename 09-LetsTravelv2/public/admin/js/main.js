let addPostBtn = document.querySelector('.create-post-btn');

document.addEventListener('DOMContentLoaded', async function () {
    addPosts();
    addCallbackRequests();
})

addPostBtn.addEventListener('click', () => {
    let articlesTab = document.getElementById('v-pills-articles');
    articlesTab.classList.remove('show');
    articlesTab.classList.remove('active');
    let createTab = document.getElementById('v-create-post');
    createTab.classList.add('show');
    createTab.classList.add('active');
})

async function addPosts() {
    let posts = await getPosts();
    let articles = document.querySelector('.articles');
    articles.innerHTML = '';
    let orderNumber = 1;
    posts.forEach((post) => {
        let postHTML = `
        <article class=" d-flex justify-content-between align-items-center articles-inline">
            <div class="num w5">${orderNumber++}</div>
            <input type="hidden" value="${post.id}" class="id">
            <div class="name w30">${post.title}</div>
            <div class="date w30">${post.date}</div>
            <div class="countr w20">${post.country}</div>
            <div class="edit w10"><button class="btn btn-link btn-edit">Edit</button></div>
            <div class="remove w5"><button class="btn btn-link btn-remove">X</button></div>
        </article>`;
        articles.insertAdjacentHTML("beforeend", postHTML);
        console.log(post.title);
    });
}

async function addCallbackRequests() {
    let callbackRequests = await getCallbackRequests();
    let requestBlock = document.querySelector('#v-pills-callback');
    requestBlock.innerHTML = '';
    let OrderNumber = 1;
    callbackRequests.forEach((request) => {
        let requestHTML = `        
        <article class=" d-flex justify-content-between align-items-center articles-inline">
            <div class="num w5">${OrderNumber++}</div>
            <input type="hidden" value="${request.id}" class="id">
            <div class="name w60">${request.phoneNumber}</div>
            <div class="date w30">${request.date}</div>
            <div class="remove w5"><button class="btn btn-link btn-remove">X</button></div>
        </article>`;
        requestBlock.insertAdjacentHTML('beforeend', requestHTML);
        console.log(callbackRequests.phoneNumber)
    })

}