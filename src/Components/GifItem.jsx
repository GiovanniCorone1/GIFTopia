import { RiHeartLine } from "@remixicon/react";
import styles from './GifItem.module.css'
export const GifItem =({title , url})=>{
  console.log({title})
      console.log(url)
  return (
    // para una card
    <div className={styles.card}>
      <img className={styles.imagen} src={url} alt={title} />
      <RiHeartLine className={styles.icono} />
      <p className={styles.parrafo}>{title}</p>
    </div>
  )
}