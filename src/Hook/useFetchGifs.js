import { useState , useEffect } from "react";
import { getGifs } from "../Api/getGif";
export const useFetchGifs = (category)=>{
const [dataGif , setDataGif] = useState([])
const [isLoading ,setIsLoading] = useState(true)
const getDataGif = async()=>{
  const gif = await getGifs(category);
  setDataGif(gif);
  setIsLoading(false)
}

useEffect(()=>{
  getDataGif();
},[])
  return {
    dataGif,
    isLoading
  }
}