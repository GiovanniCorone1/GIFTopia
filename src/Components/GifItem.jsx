export const GifItem =({title , url})=>{
  return (
    // para una card
    <div>
    <img src={url} alt={title} />
    <p>{title}</p>
    </div>
  )
}