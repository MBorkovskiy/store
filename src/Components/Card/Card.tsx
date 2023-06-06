import "./Card.css";
import { useNavigate } from "react-router-dom";
import { FC } from "react";
import { IProduct } from "../../types/types";

interface IElement {
  el: IProduct;
}

export const Card: FC<IElement> = ({ el }) => {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate(`/card/${el.id}`);
  };

  return (
    <div className="card" onClick={navigateTo}>
      <div className="rating_image">
        <img className="cardImage" src={el.thumbnail} alt="" />
        <div className="rating">{el?.rating.toFixed(1)}</div>
      </div>
      <div className="cardInfo">
        <div className="cardInfo_title">
          <span className="cardInfo_title_title">{el.title}</span>
          {el?.finalSumm && (
            <span className="cardInfo_title_qty">
              ({el?.finalSumm / el?.price} QTY)
            </span>
          )}
        </div>
        <div className="description">{el.description}</div>
        <div className="price">
          <h3>{el.price}$</h3>
          <p className="slash">{el.discountPercentage}%</p>
        </div>
      </div>
    </div>
  );
};
