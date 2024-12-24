export const getGifs = async(category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=3W5EvoU2cowOigxOHbXXUSM7U0nizcD7&q=${category}&limit=10`;
  try {
    const response = await fetch(url);
    const {data} = await response.json();
    console.log(response)
    const gifs = data.map((info)=>{
      return{
        id:info.id ,
        title : info.title,
        url:info.images.downsized_medium.url
      }
    })
    return gifs
  } catch (error) {
    console.log(error.message)
  }
}