import { RiMoonFill ,RiSunFill} from "@remixicon/react";
import styles from './ThemeToggle.module.css'
import { useState , useEffect} from "react";
export const ThemeToggle = () => {
  const [isDarkmode ,setIsDarkMode] = useState(false)
  useEffect(()=>{
    if(isDarkmode){
      document.body.classList.add('darkMode');
    }else{
      document.body.classList.remove('darkMode');
    }
  },[isDarkmode])
  const onThemeToggle = () => {
    setIsDarkMode(!isDarkmode)
  }
  return (
    isDarkmode ?
    <RiSunFill 
      onClick={onThemeToggle}
      className={`${styles.icono} ${styles.iconoSun}`}
      />:
    <RiMoonFill 
    onClick={onThemeToggle}
    className={`${styles.icono} ${styles.iconoBlack}`}/>
  )
}
