import React from "react";

const Body = () => {
  return (
    <div className="body-content">
      <form className="body-form">
        <input className="gif-typed" type="text" placeholder="Search for GIFs"></input>
        <button className="gif-submit-btn" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Body;