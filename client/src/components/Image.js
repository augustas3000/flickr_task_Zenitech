import React from "react";
import "./css/Images.css";

export default function Image({ image }) {
  const imgUrl = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_n.jpg`;

  return (
    <div className="image-container row">

      <div className="image-wrapper column-L">
        <img className="image" src={imgUrl} alt="" />
      </div>

      <div className="image-info column-R">
        <h4 className="heading-secondary"> title: {image.title}</h4>
        <h4 className="heading-secondary">id: {image.id}</h4>
        <p className="paragraph"><span className="paragraph-description">description:</span> Fugiat duis aliqua sunt occaecat qui quis. Exercitation ea nostrud non aute amet et dolore pariatur. Reprehenderit excepteur sunt dolor eiusmod. Ea irure dolore enim aliqua duis sint ullamco fugiat. Anim ut qui irure voluptate non Lorem qui ea.</p>
      </div>

    </div>
  );
}

