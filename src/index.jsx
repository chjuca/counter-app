import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import HelloWorldApp from './HelloWorldApp.jsx'
// import FirstApp from './FirstApp.jsx'
import CounterApp from './CounterApp.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <CounterApp value={10}/>
  </StrictMode>
)