
import { GifItem } from "./GifItem"
import { useFetchGifs } from "../Hook/useFetchGifs";
import styles from './GifGrid.module.css'
export const GifGrid = ({category}) => {
const {images , isLoading} = useFetchGifs(category)
return (
  <div className="main__contenedor">

  <h2 className={styles.texto}>{category}</h2>
  {
    isLoading && <h2>Cargando ... </h2>
  }
  {/* El grid de las cards */}
  <div className={styles.grid}>
    {
      images.map((image)=>
        <GifItem
        key={image.id}
        {...image}
        />
      )
    } 
  </div>
 
  </div>
)
}