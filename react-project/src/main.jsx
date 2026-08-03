import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// going to index.html and finding the element that has the id = root
createRoot(document.getElementById('root')).render(<App />)
