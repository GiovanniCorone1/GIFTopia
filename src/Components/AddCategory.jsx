import { useState } from "react";
import styles from './AddCategory.module.css';
import {ThemeToggle} from './ThemeToggle';
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
    <div className={`formulario__contenedor ${styles.contenido}`}>
    <form 
    className={styles.formulario}
    onSubmit={(e)=>onSubmit(e)}>
      <input 
      className={styles.input}
      type="text" 
      placeholder="Ingrese una categoría"
      value={inputValue}
      onChange={e=>onInputChange(e)}
     />
      <button 
      className={styles.boton}
      onClick={(e)=>onSubmit(e)} 
      >Buscar</button>
    </form>
    <ThemeToggle/>
    </div>
  )
}