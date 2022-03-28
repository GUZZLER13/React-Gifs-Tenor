import "./App.css"
import { useState } from "react"

function App() {
  const [value, updateValue] = useState([
    "https://media.giphy.com/media/l0MYJnJQ4EiYLxvQ4/giphy.gif",
  ])

  /**
   * (Déstructuration en javascript) - Même chose que :
   *
   * const state = useState([])
   * const value = state[0]
   * const updateValue = state[1]
   */

  return (
    <div className="App">
      <section className="App-content">
        <img src={value} alt="gif" />
      </section>
    </div>
  )
}

export default App
