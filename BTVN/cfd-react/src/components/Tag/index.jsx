import classnames from "classnames";
import "./style.scss";
function Tag({
  children,
  icon,
  color,
  type = "default",
  background = "default",
  size = "small",
  long= false,
}) {
  return (
    <div
      className={classnames(
        "tag",
        `color-${color}`,
        `background-${background}`,
        `size-${size}`,
        {long}
      )}
    >
      {children}
      {type === "close" && icon}
    </div>
  );
}

export default Tag;
