import './Main.css'
import memesData from './memesData'
import React from 'react'

function Main() {

  const [image, setImage] = React.useState("")

  function getImage() {

    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setImage(memesArray[randomNumber].url)

  }

  return (
    <main className='main'>
      <div className='main--input'>
        <input type="text" className='form--input' placeholder='Input Text'/>
        <input type="text" className='form--input' placeholder='Input Text'/>
        <button onClick={getImage} className='button--input'>Get a new meme image</button>
      </div>
      <img src={image} alt="Meme" className='meme--image' />
    </main>
  )
}

export default Main;
