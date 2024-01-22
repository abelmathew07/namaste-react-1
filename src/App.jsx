import { useState } from 'react'
import lovelogo from './assets/logo.svg'
import mulogo from '/mulearn-logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
      <div>
        <a href="https://mulearn.org/" target="_blank">
          <img src={mulogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://www.love.com/" target="_blank">
          <img src={lovelogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Asst-Love &#129505;{count}</h1>
      
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          click here to send love
        </button>
        <p>
          Sneham kodthenkil pokkolu &#128075;
        </p>
      </div>
      
    </>
  )
}

export default App
