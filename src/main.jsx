import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import Resume from './components/Resume.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="@container/main mx-min-w-screen-md mx-auto">
      <Navbar />
      <Resume />
      <Footer />
    </div>
  </StrictMode>,
)
