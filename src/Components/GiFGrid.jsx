
import { GifItem } from "./GifItem"
import { useFetchGifs } from "../Hook/useFetchGifs";
export const GifGrid = ({category}) => {
const {images , isLoading} = useFetchGifs(category)
// console.log(images)
return (
  <>
  <h2>{category}</h2>
  {
    isLoading && <h2>Cargando ... </h2>
  }
  {/* El grid de las cards */}
  <div>
    {
      images.map((image)=>{
        <GifItem
        key={image.id}
        {...image}
        />
      })
    } 
  </div>
  </>
)
}