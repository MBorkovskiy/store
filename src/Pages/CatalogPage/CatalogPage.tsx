import "./CatalogPage.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Slider from "@mui/material/Slider";
import { Card } from "../../Components/Card/Card";
import { useEffect, useState } from "react";
import { IProduct } from "../../types/types";
import { getAllProducts } from "../../store/allProductsSlice";
import { Head } from "../../Components/Head/Head";
import { CardBox } from "../../Components/CardBox/CardBox";
import { MainButton } from "../../Ui/Buttons/MainButton";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getAllCategories } from "../../store/allCategoriesSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { scrollToTop } from "../../utils/constant/scrollToTop";

const CatalogPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const catalog = useAppSelector((state) => state.allProducts.allProducts);
  const allCategories = useAppSelector(
    (state) => state.allCategories.allCategories
  );
  const [filteredGoods, setFilteredGoods] = useState<IProduct[]>([]);
  const [page, setPage] = useState(1);
  const [skip, setSkip] = useState(0);
  const [priceValue, setPriceValue] = useState<number[]>([0, 2000]);
  const [sort, setSort] = useState("Popular");

  const filterProducts = () => {
    if (sort === "Popular") {
      setFilteredGoods(
        [...catalog]
          .sort((a, b) => b.rating - a.rating)
          .filter(
            (el) => el.price >= priceValue[0] && el.price <= priceValue[1]
          )
      );
    }
    if (sort === "Sale") {
      setFilteredGoods(
        [...catalog]
          .sort((a, b) => b.discountPercentage - a.discountPercentage)
          .filter(
            (el) => el.price >= priceValue[0] && el.price <= priceValue[1]
          )
      );
    }
    if (sort === "Alphabet") {
      setFilteredGoods(
        [...catalog]
          .sort((a, b) => (a.title > b.title ? 1 : -1))
          .filter(
            (el) => el.price >= priceValue[0] && el.price <= priceValue[1]
          )
      );
    }
  };

  const choseCategory = (cat: string) => {
    navigate(`/category/${cat}`);
  };

  const pageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    if (value == 1) {
      setSkip(0);
    } else {
      setSkip(page * 9);
    }
  };

  const priceChange = (e: Event, newValue: number | number[]) => {
    setPriceValue(newValue as number[]);
  };

  const handleChangeSort = (e: SelectChangeEvent) => {
    setSort(e.target.value);
  };

  useEffect(() => {
    dispatch(getAllProducts({ limit: 9, skip: skip }));
    dispatch(getAllCategories());
    filterProducts();
    scrollToTop();
  }, [page]);

  useEffect(() => {
    setFilteredGoods(catalog);
  }, [catalog]);

  return (
    <>
      <Head title={"Catalog"} />
      <div className="all_goods">
        <div className="all_goods_categories">
          <h3>Categories</h3>
          {allCategories.map((el) => (
            <div
              className="all_goods_categories_list"
              onClick={() => choseCategory(el)}
            >
              <div className="all_goods_categories_text">{el}</div>
              <div className="arrow">
                <ArrowForwardIcon />
              </div>
            </div>
          ))}
          <h3>Price</h3>
          <div style={{ paddingInline: "15px" }}>
            <Slider
              getAriaLabel={() => "Price range"}
              value={priceValue}
              onChange={priceChange}
              valueLabelDisplay="auto"
              max={2000}
            />
          </div>

          <h3>Sort</h3>
          <FormControl fullWidth size="small" sx={{ mt: "15px" }}>
            <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
            <Select
              sx={{ borderRadius: 0 }}
              value={sort}
              label="Sort By"
              onChange={handleChangeSort}
            >
              <MenuItem value={"Popular"}>Popular</MenuItem>
              <MenuItem value={"Alphabet"}>Alphabet</MenuItem>
              <MenuItem value={"Sale"}>Sale</MenuItem>
            </Select>
          </FormControl>
          <MainButton onClick={filterProducts}>Accept filters</MainButton>
        </div>
        <CardBox variant="wide">
          {filteredGoods.map((el) => (
            <Card el={el} />
          ))}
        </CardBox>
      </div>
      {filteredGoods.length >= 9 && (
        <Pagination
          count={Math.ceil(100 / 8)}
          page={page}
          onChange={pageChange}
          variant="outlined"
          color="primary"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        />
      )}
    </>
  );
};
export default CatalogPage;
