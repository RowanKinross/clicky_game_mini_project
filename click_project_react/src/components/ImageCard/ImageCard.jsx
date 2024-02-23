function ImageCard({image}) {

  return (
      <div className="imageCard grid-item">
        <img className="imageCardImage"
          alt="mushroom"
          src={image}
        />
      </div>
  );
}

export default ImageCard;
