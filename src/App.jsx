import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import WalletInput from './components/WalletInput'
import SumInput from './components/SumInput'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <WalletInput />
        <p className="text-3xl font-bold underline">
        Put the NEAR Wallet address
      </p> 
        <SumInput />
        <p className="text-3xl font-bold underline">
        Put the ammount of NEAR for Split
      </p>
        <Button />
        <p className="text-3xl font-bold underline">
        Click the Split NEAR button to start
      </p>
       </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
