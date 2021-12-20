import { IconArrowDownGreenSmall } from "../Icon";
import "./CategoryHeaderItem.scss";

function CategoryHeaderItem({ children }) {
  return (
    <>
      <li className="item --black-text">
        <span>{children}</span>
        <IconArrowDownGreenSmall />
      </li>
    </>
  );
}

export default CategoryHeaderItem;
