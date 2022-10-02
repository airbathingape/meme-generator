import './Main.css'
import data from './memesData'
import React from 'react'

function Main() {

  const [image, setImage] = React.useState("")

  function getImage() {

    const memesArray = data.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setImage(memesArray[randomNumber].url)

}

  return (
    <main className='main'>
      <form className='main--input'>
        <input type="text" className='form--input' />
        <input type="text" className='form--input' />
        <button onClick={getImage} className='button--input'>Get a new meme image</button>
      </form>
      <img src={image} alt="Meme" className='meme--image'/>
    </main>
  )
}

export default Main;
