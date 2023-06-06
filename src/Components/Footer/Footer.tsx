import "./Footer.css";
import { Link } from "react-router-dom";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_links">
          <Link className="footer_link" to="/">
            Home
          </Link>
          <Link className="footer_link" to="/catalog">
            Catalog
          </Link>
          <Link to="/faq" className="footer_link">
            FAQ
          </Link>
          <Link className="footer_link" to="/basket">
            Cart
          </Link>
        </div>
        <p className="creator">Made by Maxim Borkovskiy</p>
        <p className="rights">
          Copyright c 2023 Shopify.All rights are reserved
        </p>
      </div>
    </footer>
  );
};
