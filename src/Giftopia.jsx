import { useState } from "react"
import { AddCategory } from "./Components/AddCategory"
import { GifGrid } from "./Components/GiFGrid"
const Giftopia=()=> {
  const [ categories ,setCategories] = useState([''])
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return ;
    setCategories([newCategory ,...categories ])
  }
  return (
    <>
     
      {/* titulo */}
      <h1 className="title__heading">GIF<strong>Topia</strong></h1>
      {/* input */}
      {/* recuerda que el llamar a onNewCategory desde addCategory le pasa un argumento que es el input escrito y e=>onAddCategory(e) actua como un arrow function donde el "e" es el parametro que toma el valor del inputValue traido desde addCategory 
      Siempre debemos buscar que el padre reciba las propiedades y no la contrario*/}
      <AddCategory onNewCategory={e=>onAddCategory(e)}/>
      {/* grid de las categorias */}
        {categories.map((category) => 
          <GifGrid
          key={category}
          category={category}
          />
        )
        }     
    </>
  )
}

export default Giftopia
