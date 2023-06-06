import "./BasketPage.css";
import emptycart from "../../assets/emptycart.webp";
import { Card } from "../../Components/Card/Card";
import { CardBox } from "../../Components/CardBox/CardBox";
import { backHome } from "../../utils/constant/backHome";
import { useNavigate } from "react-router-dom";
import { MainButton } from "../../Ui/Buttons/MainButton";
import { useAppSelector } from "../../hooks/hooks";
import { FC } from "react";
import { IProduct } from "../../types/types";

const BasketPage: FC = () => {
  const cartItems = useAppSelector<IProduct[]>(
    (state) => state.cartItems.cartItems
  );
  const summ = cartItems.reduce((acc, cv) => acc + cv.finalSumm, 0);
  const sale = cartItems.reduce(
    (acc, cv) => acc + Math.floor(cv.price - (cv.price * 10) / 100),
    0
  );
  const navigate = useNavigate();

  return (
    <>
      {cartItems.length ? (
        <>
          <CardBox>
            {cartItems.map((el) => (
              <Card el={el} />
            ))}
          </CardBox>
          <div className="basket_footer">
            <div>
              <h2>Your summary is : {summ} $</h2>
              <h2>Your sale is : {sale} $</h2>
            </div>
            <div className="basket_footer_button">
              <MainButton onClick={() => backHome(navigate)}>
                Back Home
              </MainButton>
            </div>
          </div>
        </>
      ) : (
        <div className="empty_basket">
          <img src={emptycart} alt="Empty Basket" />
        </div>
      )}
    </>
  );
};

export default BasketPage;
