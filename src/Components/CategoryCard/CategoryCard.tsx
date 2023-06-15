import "./CategoryCard.css";
import { Link } from "react-router-dom";
import { categroyImage } from "../../utils/constant/categoryImage";
import { FC } from "react";

interface ICategoryCard {
  el: string;
  index: number;
}

export const CategoryCard: FC<ICategoryCard> = ({ el, index }) => {
  const url = categroyImage.find((_, number) => index === number);

  return (
    <Link to={`/category/${el}`}>
      <div className="category_card_box">
        <img className="category_image" src={url?.url} alt="" />
        <p>{el[0].toUpperCase() + el.slice(1)}</p>
      </div>
    </Link>
  );
};
