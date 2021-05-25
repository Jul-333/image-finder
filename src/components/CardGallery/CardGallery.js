import React from "react";
import CardElement from "../Card/Card";
import "./CardGallery.css";

const CardGallery = ({ images }) => {
  return (
    <div className="card-gallery">
      {images.map((item) => {
        return <CardElement key={item.id} image={item} />;
      })}
    </div>
  );
};

export default CardGallery;
