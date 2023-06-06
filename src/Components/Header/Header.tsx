import "./Header.css";
import logo from "../../assets/logo.png";
import userProfile from "../../assets/userProfile.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { isLogOut } from "../../store/authSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { IUser } from "../../store/userSlice";
import { FC } from "react";

export const Header: FC = () => {
  const dispatch = useAppDispatch();
  const logInState = useAppSelector((state) => state.isAuth.logIn);
  const logOutState = useAppSelector((state) => state.isAuth.logOut);
  const [user, setUser] = useState<IUser | null>(null);

  const logOut = () => {
    localStorage.removeItem("user");
    dispatch(isLogOut(true));
  };
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user") || "null"));
  }, [logInState, logOutState]);

  return (
    <header className="header">
      <div className="header_container">
        <div className="left">
          <Link to="/catalog" className="header_links">
            Catalog
          </Link>
          <Link to="/faq" className="header_links">
            FAQ
          </Link>
        </div>
        <div className="logo">
          <Link to="/" className="header_links">
            <img className="header_logo" src={logo} alt="" />
          </Link>
        </div>
        <div className="right">
          <Link to="/basket" className="header_links">
            Cart
          </Link>
          {user !== null ? (
            <>
              <div className="user_profile">
                <img
                  className="user_profile_image"
                  src={userProfile}
                  alt="User"
                />
                <div>
                  <p>{user?.username}</p>
                  <Link
                    to="/auth"
                    className="header_link_logout"
                    onClick={logOut}
                  >
                    Log Out
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <Link to="/auth" className="header_links">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};
