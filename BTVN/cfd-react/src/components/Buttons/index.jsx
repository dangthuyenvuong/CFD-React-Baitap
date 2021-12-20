import "./style.scss";
import classnames from "classnames";

function Button({
  children,
  color = "default",
  background = "default",
  size = "small",
  type = "default",
  round = false,
  icon
}) {
  return (
    <button
      className={classnames(
        "Button",
        `color-${color}`,
        `background-${background}`,
        `size-${size}`,
        `type-${type}`,
        { round }
      )}
    >
      {type === "icon-left" && icon}
      {children}
      {type === "icon-right" && icon}
    </button>
  );
}

export default Button;
