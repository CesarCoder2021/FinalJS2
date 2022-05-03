const noticias = document.querySelector ("#noticias");
const sumarPost = async () => {
    const resp = await
fetch ("https://newsdata.io/api/1/news?apikey=pub_7014cffa8aab19d57149825860b37fc0bda9&q=cryptocurrency")

    const data = await resp.json()

    data.results.forEach ((post) => {
        const div = document.createElement ("div")
        div.innerHTML += `
            <div class="card w-100">
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.description}</p>
                    <a href="${post.link}" class="btn btn-primary">Ver más ...</a>
                </div>
            </div>
            <p> </p>
        `

        noticias.append(div)
    })
}
sumarPost();




