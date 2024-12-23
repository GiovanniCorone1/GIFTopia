import { useState , useEffect } from "react";
import { getGifs } from "../Api/getGif";
export const useFetchGifs = (category)=>{

const [images , setImages] = useState([])
const [isLoading ,setIsLoading] = useState(true)
  //llamamos a la API para traer las imagenes
const getImages = async()=>{
  const newImages = await getGifs(category);
  setImages(newImages);
  setIsLoading(false)
}
//para que se monte la primera vez del renderizado
useEffect(()=>{
  getImages();
},[])
  return {
    images,
    isLoading
  }
}