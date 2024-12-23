import { useState } from "react"

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
    <form onSubmit={(e)=>onSubmit(e)}>
    <input 
    type="text" 
    placeholder="Ingrese una categoria"
    value={inputValue}
    onChange={e=>onInputChange(e)}
    />
    <button onClick={(e)=>onSubmit(e)} >Buscar</button>
    </form>
  )
}