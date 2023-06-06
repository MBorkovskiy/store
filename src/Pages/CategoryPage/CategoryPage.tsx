import "./CategoryPage.css";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Card } from "../../Components/Card/Card";
import { getCategory } from "../../store/categorySlice";
import { CardBox } from "../../Components/CardBox/CardBox";
import { Head } from "../../Components/Head/Head";
import { MainButton } from "../../Ui/Buttons/MainButton";
import { backHome } from "../../utils/constant/backHome";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { IdProps } from "../../types/types";

const CategoryPage = () => {
  const dispatch = useAppDispatch();
  const params = useParams<keyof IdProps>() as IdProps;
  const category = useAppSelector((state) => state.category.category);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCategory({ id: params.id }));
  }, []);

  return (
    <>
      <Head
        title={`${params.id[0].toUpperCase() + params.id.slice(1)} category`}
      ></Head>
      <CardBox>
        {category.map((el) => (
          <Card el={el} />
        ))}
      </CardBox>
      <div className="button_box">
        <MainButton onClick={() => backHome(navigate)}>Back Home</MainButton>
      </div>
    </>
  );
};

export default CategoryPage;
