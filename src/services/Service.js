const apiKey = "nE2Cxf3WmrV8lAWWWpXyEa8pwv3Zzjtt"

export default function getGifs(keywords = "ok") {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keywords}&limit=25&offset=0&rating=g&lang=en`
  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response
      const gifs = data.map((image) => {
        const { images, title, id } = image
        const { url } = images.downsized_medium
        return { url, title, id }
      })
      return gifs
    })
}
