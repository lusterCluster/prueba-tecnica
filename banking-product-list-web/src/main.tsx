import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/main.tsx'
import ProvideGlobalContext from './store/context/Global.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProvideGlobalContext>
    <RouterProvider router={router}/>
    </ProvideGlobalContext>
  </StrictMode>,
)
