document.addEventListener('DOMContentLoaded', async function () {
    let posts = await getPosts();
    let articles = document.querySelector('.articles');
    articles.innerHTML = '';
    posts.forEach((post) => {
        let postHTML = `
        <div class="col-4">
                    <div class="card">
                        <img src="${post.imgUrl}" alt="${post.title}" class="card-img-top">
                        <div class="card-body">
                            <h4 class="card-title">${post.title}</h4>
                            <p class="card-text">${post.description}</p>
                            <button class="btn btn-primary">Details</button>
                        </div>
                    </div>
                </div>`;
        articles.insertAdjacentHTML("beforeend", postHTML);
        console.log(post.title);
    });
})