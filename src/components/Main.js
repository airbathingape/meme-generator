import './Main.css'
import React from 'react'

function Main() {

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemeImages, setAllMemeImages] = React.useState([])

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemeImages(data.data.memes))
  }, [])


  function getImage() {

    const randomNumber = Math.floor(Math.random() * allMemeImages.length)
    const url = allMemeImages[randomNumber].url
    setMeme(prevState => {
      return {
        ...prevState,
        randomImage: url
      }
    })

  }

  function handleChange(event) {
    const { name, value } = event.target
    setMeme(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <main className='main'>
      <div className='main--input'>
        <input type="text" className='form--input' placeholder='Input Text' name='topText' value={meme.topText} onChange={handleChange} />
        <input type="text" className='form--input' placeholder='Input Text' name='bottomText' value={meme.bottomText} onChange={handleChange} />
        <button onClick={getImage} className='button--input'>Get a new meme image</button>
      </div>

      <div className="meme">
        <img src={meme.randomImage} alt="Meme" className='meme--image' />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  )
}

export default Main;
