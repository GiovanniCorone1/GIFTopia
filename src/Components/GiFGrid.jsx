import { GifItem } from "./GifItem"
import { useFetchGifs } from "../Hook/useFetchGifs";
import styles from './GifGrid.module.css'
export const GifGrid = ({category}) => {
const {dataGif , isLoading} = useFetchGifs(category)
return (
  <div className="main__contenedor">
  <h2 className={styles.texto}>{category}</h2>
  {
    isLoading && <h2>Cargando ... </h2>
  }
  {/* El grid de las cards */}
  <div className={styles.grid}>
    {
      dataGif.map((data)=>
        <GifItem
        key={data.id}
        {...data}
        />
      )
    } 
  </div> 
  </div>
)
}