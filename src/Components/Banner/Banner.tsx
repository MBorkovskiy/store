import "./Banner.css";
import banner2 from "../../assets/banner2.png";
import { MainButton } from "../../Ui/Buttons/MainButton";
import { Link } from "react-router-dom";
import { FC } from "react";

export const Banner: FC = () => {
  return (
    <div className="banner">
      <div>
        <h1 className="fullWidthTxt">BIG SALE 20%</h1>
        <p>THE BESTSELLER OF 2022</p>
        <h2>LENNON R2D2 WITH NVIDIA 5090 TI</h2>
        <Link to="/catalog">
          <div className="banner_button_box">
            <MainButton className="width440px">Shop Now</MainButton>
          </div>
        </Link>
      </div>
      <div>
        <img className="banner_image" src={banner2} alt="" />
      </div>
    </div>
  );
};
