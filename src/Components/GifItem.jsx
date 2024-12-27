import { RiLinksFill } from "@remixicon/react";
import styles from './GifItem.module.css'
import { useState } from "react";
export const GifItem =({title , url})=>{
  const [ copied , setCopied ] = useState(false)
  const copyUrl = ()=>{
    navigator.clipboard
    .writeText(url)
    .then(()=>{
      setCopied(true);
      setTimeout(() => {
        setCopied(false)
      }, 3000);
    })
  }
  return (
    <div className={styles.card}>
      <img className={styles.imagen} src={url} alt={title} />
      <div className={styles.iconos}>
      <a onClick={copyUrl}>
      <RiLinksFill className={`${styles.icono} ${styles.iconoLink}`}/>
      </a>
      { copied && <span className={styles.copiedMessage}>Enlace copiado</span>}
      </div>
      <p className={styles.parrafo}>{title}</p>
    </div>
  )
}