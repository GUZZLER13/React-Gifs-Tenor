import "./App.css"
import { useState, useEffect } from "react"
import getGifs from "./services/Service"

export default function App() {
  const [gifs, setGifs] = useState([])
  /**
   * (Déstructuration en javascript) - Même chose que :
   *
   * const state = useState([])
   * const gifs = state[0]
   * const setGifs = state[1]
   */

  useEffect(() => {
    getGifs().then((gifs) => setGifs(gifs))
  })

  return (
    <div className="App">
      <section className="App-content">
        {gifs.map((singleGif) => (
          <div>
            <h4>{singleGif.title}</h4>
            <h5>{singleGif.id}</h5>
            <img src={singleGif.url} alt={singleGif.title} />
          </div>
        ))}
      </section>
    </div>
  )
}
