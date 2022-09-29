import './Main.css'

function Main() {
  return (
    <main className='main'>
      <form className='main--input'>
        <input type="text" className='form--input' />
        <input type="text" className='form--input' />
        <button className='button--input'>Get a new meme image</button>
      </form>
    </main>
  )
}

export default Main;
