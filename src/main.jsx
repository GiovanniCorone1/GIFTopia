import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Giftopia from './Giftopia'
import './styles.css' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Giftopia/>
  </StrictMode>,
)
