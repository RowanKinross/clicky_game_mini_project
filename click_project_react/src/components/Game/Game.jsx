import React, { useState } from 'react'
import ImageCard from "../ImageCard/ImageCard";
import mushrooms from "./mushrooms.json"

function Game() {
  const [currentScore, setCurrentScore] = useState(0);

  const handleClickImage = () => {
    setCurrentScore((prevScore) => (prevScore + 1));
  };

  
  // const getImages = () => {
  //   const randomImagesArray = [];
  //   return randomImagesArray;
  // };

  return (
    <div>
    <div className="game">
        <div className="grid-container">
          {mushrooms.map((image, index) => (
            <div key={index} onClick={handleClickImage}>
              <ImageCard 
              key={image.id} 
              image={image.image}
              />
            </div>
          ))}
        </div>
    </div>
    </div>
  );
};

export default Game;

// components:
// game
  // 12 images.json
  // render the 12 images
  // user score
  // what user clicked on
  //