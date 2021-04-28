import React from "react";
import { useFetchGIfs } from "../hooks/useFetchGIfs";
import GifAppItem from "./GifAppItem";



function GifGridd({ category }) {
  const {data:images,loading} =  useFetchGIfs(category);
  return (
    <div>
      <h3 className="display-6">{category}</h3>
        {loading && <p className="animate__animated animate__pulse">Loading....</p>}
        <div className="row">
            {images.map((img) => {
              return <GifAppItem key={img.id} {...img} />;
            })}
        </div>
    </div>
  );
}

export default GifGridd;
