import "./Head.css";
import { FC } from "react";

interface IHead {
  title: string | undefined;
}

export const Head: FC<IHead> = ({ title }) => {
  return (
    <div className="head">
      <hr />
      <div className="h1_container">
        <h1>{title}</h1>
      </div>
      <hr />
    </div>
  );
};
