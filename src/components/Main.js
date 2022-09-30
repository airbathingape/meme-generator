import './Main.css'
import data from './memesData'

function Main() {

  function getImage() {

    const memesArray = data.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    console.log(url)
}

  return (
    <main className='main'>
      <form className='main--input'>
        <input type="text" className='form--input' />
        <input type="text" className='form--input' />
        <button onClick={getImage} className='button--input'>Get a new meme image</button>
      </form>
    </main>
  )
}

export default Main;
