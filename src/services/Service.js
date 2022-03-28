const apiKey = "nE2Cxf3WmrV8lAWWWpXyEa8pwv3Zzjtt"
const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=panda&limit=25&offset=0&rating=g&lang=en`

export default function getGifs(keywords) {
  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response
      const gifs = data.map((image) => image.images.downsized_medium.url)
      return gifs
    })
}
