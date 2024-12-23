export const GetGif = async() => {
  const url = `api.giphy.com/v1/gifs/search?api_key=3W5EvoU2cowOigxOHbXXUSM7U0nizcD7&q=cheeseburgers`
  try {
    const respuesta =  await fetch(url);
    const data = await respuesta.json();
    return data
  } catch (error) {
    console.log(error)
  }
}
