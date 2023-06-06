import "./MainButton.css";

interface IMainButton {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: string;
  disabled?: boolean;
}

export const MainButton = ({
  onClick,
  children,
  className = "",
  variant = "primary",
}: IMainButton) => {
  return (
    <button
      onClick={onClick}
      className={
        variant === "primary"
          ? "primary_button " + className
          : variant === "secondary"
          ? "secondary_button " + className
          : variant === "disabled"
          ? "disabled_button  " + className
          : ""
      }
    >
      {" "}
      {children}
    </button>
  );
};
