import troll from "../images/troll-face.png";

function Header() {
  return (
    <div>
      <div className="nav--header">
        <img src={troll} alt="face" />
        <h1>Meme Generator</h1>
      </div>
      <div>
        <p>React Course - Project 3</p>
      </div>
    </div>
  )
}

export default Header;
