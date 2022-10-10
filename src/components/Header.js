import './Header.css'
import troll from "../images/troll-face.png";

function Header() {
  return (
    <div className="nav--header">
      <div className='nav--meme'>
        <img src={troll} alt="face" />
        <h1>Meme Generator</h1>
      </div>
      <div>
        <p>Memes! Memes! Memes!</p>
      </div>
    </div>
  )
}

export default Header;
