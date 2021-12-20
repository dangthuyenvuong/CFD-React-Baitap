import classnames from "classnames";
import Button from "../Buttons";

import "./style.scss";
function ProductItem({
  image,
  title,
  description,
  price,
  percent,
  icon,
  border = "default",
  rate = false,
  sale = false,
  mainPrice,
  color,
children,
background,
size,
}) {
  return (
    <div
      className={classnames("product_item", `border-${border}`, { rate, sale })}
    >
      <div className="image">
        {image}
        <span className="percent">{sale === true && percent}</span>
      </div>
      <div className="textbox">
        <h3 className="product_item-title">{title}</h3>
        <p className="desc">{description}</p>
        {rate === true && icon}
        <p className="price">{price}</p>
        <p className="mainprice">{sale === true && mainPrice}</p>
      </div>
      <Button
        // color="white"
        // children="Buy now"
        // background="green"
        // size="small"
        color={color}
        children={children}
        background={background}
        size={size}
      />
    </div>
  );
}

export default ProductItem;
