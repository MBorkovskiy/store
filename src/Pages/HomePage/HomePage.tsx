import "./HomePage.css";
import Slider from "react-slick";
import { useEffect } from "react";
import { Card } from "../../Components/Card/Card";
import { CategoryCard } from "../../Components/CategoryCard/CategoryCard";
import { getAllProducts } from "../../store/allProductsSlice";
import { getAllCategories } from "../../store/allCategoriesSlice";
import { Head } from "../../Components/Head/Head";
import { CardBox } from "../../Components/CardBox/CardBox";
import { otherInformation } from "../../utils/constant/faq";
import { MyAccordion } from "../../Components/MyAccordion/MyAccordion";
import { ReviewCard } from "../../Components/Reviews/ReviewCard";
import { reviews } from "../../utils/constant/reviews";
import { Banner } from "../../Components/Banner/Banner";
import { Loader } from "../../Components/Loader/Loader";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

const HomePage = () => {
  const products = useAppSelector((state) => state.allProducts.allProducts);
  const isLoadingProducts = useAppSelector(
    (state) => state.allProducts.isLoading
  );
  const allCategories = useAppSelector(
    (state) => state.allCategories.allCategories
  );

  const isLoadingAllCategories = useAppSelector(
    (state) => state.allCategories.isLoading
  );
  const dispatch = useAppDispatch();

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    dots: true,
  };

  useEffect(() => {
    dispatch(getAllProducts({ limit: 5, skip: 0 }));
    dispatch(getAllCategories());
  }, []);
  console.log(products);
  return (
    <>
      <Banner />
      <Head title={"Tranding"} />
      {isLoadingProducts ? (
        <Loader />
      ) : (
        <CardBox>
          {products?.map((el) => (
            <Card el={el} />
          ))}
        </CardBox>
      )}
      <Head title={"Categories"} />
      {isLoadingAllCategories ? (
        <Loader />
      ) : (
        <div
          style={{ display: "flex", flexWrap: "wrap", marginBottom: "100px" }}
        >
          {allCategories.map((el, index) => (
            <CategoryCard el={el} index={index} />
          ))}
        </div>
      )}
      <Head title={"Popular Questions"} />
      <div className="accordion_div">
        {otherInformation.map((el) => (
          <MyAccordion el={el} />
        ))}
      </div>
      <Head title={"What People Talk About Us"} />
      <div className="people_talk">
        <Slider {...settings}>
          {reviews.map((el) => (
            <ReviewCard el={el} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default HomePage;
