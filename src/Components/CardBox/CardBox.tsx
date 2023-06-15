import "./CardBox.css";
import { FC } from "react";

interface IChildren {
  children: React.ReactNode;
  variant?: string;
}

export const CardBox: FC<IChildren> = ({ children, variant = "default" }) => {
  return (
    <div
      className={
        variant === "default" ? "card_box_default_gap" : "card_box_wide_gap"
      }
    >
      {children}
    </div>
  );
};
