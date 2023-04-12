import React from "react";
import "./gifContainer.css"

const GifContainer = ({photo}) => {
  
  return (
    <div className="ind-gif"> 
      <img className="ind-gif-photo" src={photo} />
    </div>
  )
}

export default GifContainer