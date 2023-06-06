import { IReview } from "../../utils/constant/reviews";
import "./ReviewCard.css";
import GradeIcon from "@mui/icons-material/Grade";
import { FC } from "react";

interface IReviewCard {
  el: IReview;
}

export const ReviewCard: FC<IReviewCard> = ({ el }) => {
  return (
    <div className="review">
      <div className="description_title">
        <p className="review_title">{el.author}</p>
        <div className="review_rating">
          <p>{el.rating}</p>
          <GradeIcon className="star_icon" />
        </div>
      </div>
      <p className="review_description">{el.body}</p>
      <p className="review_date">{el.date}</p>
    </div>
  );
};
