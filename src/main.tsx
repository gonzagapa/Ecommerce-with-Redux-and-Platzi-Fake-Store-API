import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'animate.css';
import {EcommerceApp} from './app/EcommerceApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EcommerceApp />
  </StrictMode>,
)
