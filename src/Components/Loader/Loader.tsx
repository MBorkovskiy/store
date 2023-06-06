import "./Loader.css";
import { FC } from "react";

export const Loader: FC = () => {
  return (
    <div className="loader_container">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
