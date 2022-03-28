import "./App.css"
import { useState, useEffect } from "react"

const apiURL =
  "https://g.tenor.com/v1/search?q=matrix&key=1GVBZ4H50Q4L&limit=25"

function App() {
  const [gifs, setGifs] = useState([])
  /**
   * (Déstructuration en javascript) - Même chose que :
   *
   * const state = useState([])
   * const value = state[0]
   * const updateValue = state[1]
   */

  useEffect(
    () =>
      fetch(apiURL)
        .then((res) => res.json())
        .then((response) => {
          const { results } = response
          const gifs = results.map((image) => image.media[0].mediumgif.url)
          console.log(gifs.length + " gifs à traiter")
          setGifs(gifs)
        }),
    // en second paramètre on met un array vide pour que useEffect soit appelé une seule fois au chargement de la page
    []
  )

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
