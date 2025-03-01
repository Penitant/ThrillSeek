import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@fontsource/righteous'; // Default
import '@fontsource/raleway';
import '@fontsource/lora';
import '@fontsource/open-sans';
import '@fontsource/roboto-condensed';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
