import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Element_by_id from './Element_by_id.jsx'
import Using_ref from './Using_ref.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Element_by_id/>  */}
    <Using_ref/>
  </StrictMode>,
)
