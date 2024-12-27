import { useState } from "react"
import { AddCategory } from "./Components/AddCategory"
import { GifGrid } from "./Components/GiFGrid"
const Giftopia=()=> {
  const [ categories ,setCategories] = useState(['año nuevo'])
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return ;
    setCategories([newCategory ,...categories ])
  }
  return (
    <>
      <h1 className="title__heading">GIF<strong>Topia</strong></h1>
      <AddCategory onNewCategory={onAddCategory}/>
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
