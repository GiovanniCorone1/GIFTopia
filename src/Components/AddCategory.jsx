import { useState } from "react"
import styles from './AddCategory.module.css'
export const AddCategory = ({onNewCategory}) => {
  const [inputValue ,setInputValue] = useState('');
  const onInputChange = ({target})=>{
    setInputValue(target.value)
  }

  const onSubmit = (e)=>{
    e.preventDefault()
    if (inputValue.trim().length<=1) return ;
    onNewCategory(inputValue.trim())
    setInputValue('')
  }
  return (
    <div className="formulario__contenedor">
    <form 
    className={styles.formulario}
    onSubmit={(e)=>onSubmit(e)}>
      <input 
      className={styles.input}
      type="text" 
      placeholder="Ingrese una categoria"
      value={inputValue}
      onChange={e=>onInputChange(e)}
     />
      <button 
      className={styles.boton}
      onClick={(e)=>onSubmit(e)} 
      >Buscar</button>
    </form>
    </div>
  )
}