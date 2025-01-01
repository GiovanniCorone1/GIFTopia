import { useState } from "react";
import styles from './AddCategory.module.css';
import {ThemeToggle} from './ThemeToggle';
export const AddCategory = ({onNewCategory}) => {
  const [inputValue ,setInputValue] = useState('');
  const onSubmit = (e)=>{
    e.preventDefault()
    if (inputValue.trim().length<=1) return ;
    onNewCategory(inputValue.trim())
    setInputValue('')
  }
  const onInputChange = ({target})=>{
    setInputValue(target.value)
  }
  return (
    <div className={`formulario__contenedor ${styles.contenido}`}>
    <form 
    className={styles.formulario}
    onSubmit={onSubmit}>
      <input 
      className={styles.input}
      type="text" 
      placeholder="Ingrese una categoría"
      value={inputValue}
      onChange={onInputChange}
     />
      <button 
      className={styles.boton}
      onClick={onSubmit} 
      >Buscar</button>
    </form>
    <ThemeToggle/>
    </div>
  )
}