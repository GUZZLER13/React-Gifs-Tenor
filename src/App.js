import "./App.css"
import { useState, useEffect } from "react"
import getGifs from "./services/Service"

function App() {
  const [gifs, setGifs] = useState([])
  /**
   * (Déstructuration en javascript) - Même chose que :
   *
   * const state = useState([])
   * const value = state[0]
   * const updateValue = state[1]
   */

  useEffect(() => {
    getGifs().then((gifs) => setGifs(gifs))
  })

  return (
    <div className="App">
      <section className="App-content">
        {gifs.map((singleGif) => (
          <img src={singleGif} alt="gif" />
        ))}
      </section>
    </div>
  )
}

export default App
