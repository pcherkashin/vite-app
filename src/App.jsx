import { useState } from 'react'
import NearSplitLogo from './assets/NEARSplit_Logo_w.png'
import './App.css'
import WalletInput from './components/WalletInput'
import SumInput from './components/SumInput'
import Button from './components/Button'

<link rel="stylesheet" href="style.css">

</link>

function App() {
  const [count, setCount] = useState(0)

  return (

    
    <div className="App">
      <div>
        <a href="https://kedos.io" target="_blank">
          <img src={NearSplitLogo} className="logo" alt="Near Split logo" justify-content="center"/>
        </a>
      </div>
      
      <div>
        <div>
        <p className="text-3xl font-bold">
        NEAR Split App
      </p>
      <div>
          <br></br>
        </div> 
        </div>
        <p className="text-xl font-bold">
        Put the NEAR Wallet address
      </p>
      <div>
          <br></br>
        </div> 
      <WalletInput />
      <div>
          <br></br>
        </div>  
        <p className="text-xl font-bold">
        Put the ammount of NEAR for Split
      </p>
      <div>
          <br></br>
        </div>
      <SumInput />
      <div>
          <br></br>
        </div> 
        <p className="text-xl font-bold">
        Click the Split NEAR button to start
      </p>
      <div>
          <br></br>
        </div>
      <Button />
      <div>
          <br></br>
        </div>
       </div>

        {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>  */}
      
    </div>
  )
}

export default App
