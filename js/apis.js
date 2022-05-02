const lista = document.querySelector ("#listado");
const sumarPost = async () => {
    const resp = await
fetch ("https://newsdata.io/api/1/news?apikey=pub_7014cffa8aab19d57149825860b37fc0bda9&q=cryptocurrency")

    const data = await resp.json()

    data.forEach ((post) => {
        const li = document.createElement ("li")
        li.innerHTML += `
            <h4> ${post.author} </h4>
            <p> ${post.content}</p>
        `

        lista.append(li)
    })
}
sumarPost();




