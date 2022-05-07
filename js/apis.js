// Identifica el div con el #id para determinar donde crear las cards
const noticias = document.querySelector ("#noticias");
// Llamada a la API de NewsData
const sumarPost = async () => {
    const resp = await
fetch ("http://api.mediastack.com/v1/news?access_key=b43b6966e94071f82b3d2acdde071467&keywords=salud+visual&languages=es");

const data = await resp.json()
// Creación de las cards con los contenidos del array de las noticias
     data.data.forEach ((post) => {
        const div = document.createElement ("div")
        div.innerHTML += `
            <div class="card w-100">
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.description}</p>
                    <p class="card-text"><small class="text-muted">Origen: ${post.source}</small></p>
                    <a href="${post.url}" class="btn btn-primary">Ver más ...</a>
                </div>
            </div>
        `
        noticias.append(div)
    })
}
// Ejecución de la función
sumarPost();




