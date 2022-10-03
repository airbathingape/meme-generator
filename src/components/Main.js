import './Main.css'
import memesData from './memesData'
import React from 'react'

function Main() {

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  function getImage() {

    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevState => {
      return {
        ...prevState,
        randomImage: url
      }
    })

  }

  return (
    <main className='main'>
      <div className='main--input'>
        <input type="text" className='form--input' placeholder='Input Text'/>
        <input type="text" className='form--input' placeholder='Input Text'/>
        <button onClick={getImage} className='button--input'>Get a new meme image</button>
      </div>
      <img src={meme.randomImage} alt="Meme" className='meme--image' />
    </main>
  )
}

export default Main;
