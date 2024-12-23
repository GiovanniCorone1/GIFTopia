import { useState } from "react"

const Giftopia=()=> {
  const [ categories ,setCategories] = useState(['one puch man','dragon ball' , 'naruto'])
  return (
    <>
      {/* titulo */}
      <h1 className="title__heading">GIF<strong>Topia</strong></h1>
      {/* input */}

      {/* grid de las categorias */}
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>
        })
        }
      </ol>
    </>
  )
}

export default Giftopia
