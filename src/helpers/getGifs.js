
export const getGifs = async(categoria) => {
  
    const url = `http://api.giphy.com/v1/gifs/search?api_key=ZnBmOx6MOzx1mTlRT0Lse9oSMqHYhPQw&q=${ categoria}`;
    const resp = await fetch(url)
    const {data} = await resp.json();
    const listaGifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    //console.log(listaGifs);
    return listaGifs
}
