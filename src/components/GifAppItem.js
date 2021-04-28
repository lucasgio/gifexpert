import React from 'react'

function GifAppItem({title,url}) {

    return (

      <>
      <div className="card animate__animated animate__lightSpeedInRight" style={{ width: "18rem" }}>
        <img src={url} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{title}</p>
        </div>
      </div>
      </>
    );
}

export default GifAppItem
