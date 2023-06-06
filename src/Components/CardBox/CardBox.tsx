import "./CardBox.css";
import { FC } from "react";

interface IChildren {
  children: React.ReactNode;
}

export const CardBox: FC<IChildren> = ({ children }) => {
  return <div className="card_box">{children}</div>;
};
