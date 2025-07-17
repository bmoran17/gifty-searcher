import React, { useState, useEffect } from "react";
import GifContainer from "./GifContainer";
import "./body.css";

const Body = () => {
  const [gif, setGif] = useState("");
  const [data, setData] = useState(null);
  const [limit, setLimit] = useState("");
  const [none, setNone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    const input01 = e.target[0].value;
    const input02 = e.target[1].value;
    setGif(input01);
    setLimit(input02);
  }

  const getGifs = async () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const TRENDING_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${limit}&rating=g`
    const SEARCH_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${gif}&limit=${limit}&lang=en`
    const response = await fetch(gif === "" ? TRENDING_URL : SEARCH_URL);
    const r = await response.json();

    console.log(r)

    if (r.data.length === 0) {
      setNone(true)
      setGif("")
    } else {
      setData(r.data)
      if(gif !== "") {
        setNone(false)
      }
    }
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
      {none === true && <h2 className="none-found-message">No Gifs found, trending gifs shown below</h2>}
      {data &&
        <div className="results">
          {data.map((item) => <GifContainer photo={item.images.fixed_width.url} />)}
        </div>
      }
    </div>
  )
}

export default Body;
