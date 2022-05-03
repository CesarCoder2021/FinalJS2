const noticias = document.querySelector ("#noticias");
const sumarPost = async () => {
    const resp = await
fetch ("https://newsdata.io/api/1/news?apikey=pub_7014cffa8aab19d57149825860b37fc0bda9&q=cryptocurrency")

    const data = await resp.json()

    data.results.forEach ((post) => {
        const span = document.createElement ("span")
        span.innerHTML += `
            <h4> ${post.title} </h4>
            <p> ${post.description}</p>
        `

        noticias.append(span)
    })
}
sumarPost();




