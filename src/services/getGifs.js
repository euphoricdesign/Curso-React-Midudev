// En la función getGifs, cuando hacemos el map() y sacamos la URL de la imagen, lo que vamos a hacer es sacar
// sacar otra info a parte: title y id.

const apiKey = 'uPtq0getJnqlCXxbscbMDtq5SBazTx8C';

const getGifs = ({keyword} = {}) => {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`

    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const {data} = response

            const gifs = data.map(image => {
                const {images, title, id} = image
                const {url} = images.downsized_medium
                return {title, id, url}
            })

            return gifs
        })
}

export default getGifs;


