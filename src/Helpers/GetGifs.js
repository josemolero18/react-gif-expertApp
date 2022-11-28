export const getGif = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=7143CeNgFDjIw75GL31NkVjo5hHvgH0X&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    console.log( data )

    const gifs = data.map( img =>({
      id : img.id,
      title : img.title,
      url: img.images.downsized_medium.url
    }))
    
    return gifs;
}