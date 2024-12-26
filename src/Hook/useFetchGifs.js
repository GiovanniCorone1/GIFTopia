import { useState , useEffect } from "react";
import { getGifs } from "../Api/getGif";
export const useFetchGifs = (category)=>{
const [dataGif , setDataGif] = useState([])
const [isLoading ,setIsLoading] = useState(true)
  //llamamos a la API para traer las imagenes
const getDataGif = async()=>{
  const gif = await getGifs(category);
  setDataGif(gif);
  setIsLoading(false)
}
//para que se monte la primera vez del renderizado
useEffect(()=>{
  getDataGif();
},[])
  return {
    dataGif,
    isLoading
  }
}