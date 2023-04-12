import React, { useState, useEffect } from "react";
import GifContainer from "./GifContainer";
import "./body.css";

const Body = () => {
  const [gif, setGif] = useState("");
  const [data, setData] = useState(null);
  const [limit, setLimit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
    const input01 = e.target[0].value;
    const input02 = e.target[1].value;
    setGif(input01);
    setLimit(input02);
  }

  const getGifs = async () => {
    const API_KEY = "jwHt1vVbggrN9NqfVNNwnQFWye9WA6xI"
    const TRENDING_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${limit}&rating=g`
    const SEARCH_URL = `https://api.giphy.com/v1/gifs/search?api_key=jwHt1vVbggrN9NqfVNNwnQFWye9WA6xI&q=${gif}&limit=${limit}&lang=en`
    const response = await fetch(gif === "" ? TRENDING_URL : SEARCH_URL);
    const r = await response.json();
    setData(r.data);
    console.log(data)
  }

  useEffect(() => {
    getGifs()
  }, [gif, limit]);

  return (
    <div className="body-content">
      <form className="body-form" onSubmit={handleSubmit}>
        <input className="gif-wanted" type="text" placeholder="Search for GIFs"/>
        <input className="gif-search-limit" type="text" placeholder="Limit" />
        <button className="gif-submit-btn" type="submit">Submit</button>
      </form>

      {data &&
        <div className="results">
          {data.map((item) => <GifContainer photo={item.images.fixed_width.url} />)}
        </div>
      }
    </div>
  )
}

export default Body;