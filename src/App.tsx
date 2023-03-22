import { useState, FC } from 'react'
import logo from './logo.svg'
import './App.css'

const App: FC = (): JSX.Element => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <p>Open Sauced Extension</p>
    </div>
  )
}

export default App
