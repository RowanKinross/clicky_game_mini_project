function Header() {
  return (
    <>
      <div className="header">
        <h1 className="title"> Clicky Mushroom</h1>
        <p> click an image to begin </p>
        <p> score 0 : top score 0</p>
      </div>
      <div className="description">
        <h2>Clicky Game!</h2>
        <p>Click on an image to earn points, but don't click on any more than once!</p>
      </div>
    </>
  )
}

export default Header

// header 
  // sticky with 
    //title
    // you guessed correctly/incorrectly
    // current score
    // top score (resets on page refresh)
  // description of how to play