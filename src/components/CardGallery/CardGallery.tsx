import { FC } from "react";
import CardElement from "../Card/Card";
import "./CardGallery.css";
import { ImagesType } from "../../redux/typesTS";

type PropsType = {
  images: Array<ImagesType>,
}

const CardGallery: FC<PropsType> = ({ images }) => (
  <div className="card-gallery">
    {images.map((item) => {
      return <CardElement key={item.id} image={item} />;
    })}
  </div>
);

export default CardGallery;
