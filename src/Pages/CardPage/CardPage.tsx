import "./CardPage.css";
import { Link, useParams } from "react-router-dom";
import { MainButton } from "../../Ui/Buttons/MainButton";
import { addItemToCart, deleteItemFromCart } from "../../store/cartSlice";
import { FC, useEffect, useState } from "react";
import { getProduct } from "../../store/productSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { IProduct, IdProps } from "../../types/types";

const CardPage: FC = () => {
  const dispatch = useAppDispatch();
  const params = useParams<keyof IdProps>() as IdProps;
  const product = useAppSelector((state) => state.product.product);
  const cartItems = useAppSelector((state) => state.cartItems.cartItems);
  const isItemAdded = cartItems.find(
    (item: IProduct) => item.id === Number(params.id)
  );
  const [counter, setCounter] = useState(1);
  const finalSum = product.price * counter;

  const plusCounter = () => {
    setCounter(counter + 1);
  };

  const minusCounter = () => {
    if (counter >= 2) {
      setCounter(counter - 1);
    }
  };

  const addToCart = (el: IProduct) => {
    const find = cartItems.find((item) => el.id === item.id);
    if (!find) {
      dispatch(addItemToCart({ ...el, finalSumm: finalSum }));
    }
  };

  const deleteFromCart = (el: IProduct) => {
    dispatch(deleteItemFromCart(el));
  };

  useEffect(() => {
    dispatch(getProduct({ id: params.id }));
  }, []);

  return (
    <>
      {Object.keys(product).length !== 0 && (
        <div className="cardPageMain">
          <img className="cardImageMain" src={product.thumbnail} alt="Image" />
          <div className="cardInfo_btn">
            <div className="crdInfo_title">
              <h3>{product.title}</h3>
              <h5 className="card_description_category">
                {product?.category[0]?.toUpperCase() +
                  product?.category?.slice(1)}
              </h5>
              <div className="brand_stock_rating">
                <h4>Brand:</h4>
                <p>{product.brand}</p>
              </div>
              <div className="brand_stock_rating">
                <h4>Stock:</h4>
                <p>{product.stock}</p>
              </div>
              <div className="brand_stock_rating">
                <h4>Rating:</h4>
                <p>{product.rating}</p>
              </div>
              <p className="card_description_category">{product.description}</p>
              <h1>{product?.price * counter}$</h1>
            </div>
            <div className="counter">
              <MainButton onClick={plusCounter}>+</MainButton>
              <div>{counter}</div>
              <MainButton
                onClick={minusCounter}
                variant={counter === 1 ? "disabled" : "primary"}
              >
                -
              </MainButton>
            </div>
            <div className="cardButtons">
              {isItemAdded ? (
                <MainButton
                  variant="secondary"
                  onClick={() => deleteFromCart(product)}
                >
                  Delete from cart
                </MainButton>
              ) : (
                <MainButton onClick={() => addToCart(product)}>
                  Add to cart
                </MainButton>
              )}

              <Link to="/">
                <MainButton variant="secondary" className="full_width_btn">
                  Back to main
                </MainButton>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardPage;
