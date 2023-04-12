import React, { useState, useEffect } from "react";

const Body = () => {
    const [gif, setGif] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        const input = e.target[0].value;
        console.log(input)
        setGif(input)
    }

    const getGifs = async () => {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=jwHt1vVbggrN9NqfVNNwnQFWye9WA6xI&q=${gif}&limit=25&offset=0&rating=g&lang=en`);
        const data = await response.json();
        console.log(data);
    }

    useEffect(() => {
        getGifs()
    }, [gif]);

  return (
    <div className="body-content">
      <form className="body-form" onSubmit={handleSubmit}>
        <input className="gif-typed" type="text" placeholder="Search for GIFs"></input>
        <button className="gif-submit-btn" type="submit">Submit</button>
      </form>

      {}
    </div>
  )
}

export default Body;