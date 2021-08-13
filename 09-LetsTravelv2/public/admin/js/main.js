let addPostBtn = document.querySelector('.create-post-btn');

document.addEventListener('DOMContentLoaded', async function () {
    let posts = await getPosts();
    let articles = document.querySelector('.articles');
    articles.innerHTML = '';
    posts.forEach((post) => {
        let postHTML = `
        <article class=" d-flex justify-content-between align-items-center articles-inline">
            <div class="id w5">${post.id}</div>
            <div class="name w30">${post.title}</div>
            <div class="date w30">${post.date}</div>
            <div class="countr w20">${post.country}</div>
            <div class="edit w10"><button class="btn btn-link">Edit</button></div>
            <div class="remove w5"><button class="btn btn-link">X</button></div>
        </article>`;
        articles.insertAdjacentHTML("beforeend", postHTML);
        console.log(post.title);
    });
})

addPostBtn.addEventListener('click', () => {
    let articlesTab = document.getElementById('v-pills-articles');
    articlesTab.classList.remove('show');
    articlesTab.classList.remove('active');
    let createTab = document.getElementById('v-create-post');
    createTab.classList.add('show');
    createTab.classList.add('active');

})