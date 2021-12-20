import CategoryHeaderItem from "./CategoryHeaderItem";
import "./style.scss";
function CategoryHeader() {
  return (
    <div className="category__header">
      <div className="container">
        <ul className="category__header-list">
          <CategoryHeaderItem children="Bakery" />
          <CategoryHeaderItem children="Fruit and vegetables" />
          <CategoryHeaderItem children="Meat and fish" />
          <CategoryHeaderItem children="Drinks" />
          <CategoryHeaderItem children="Kitchen" />
          <CategoryHeaderItem children="Special nutrition" />
          <CategoryHeaderItem children="Baby" />
          <CategoryHeaderItem children="Pharmacy" />
        </ul>
      </div>
    </div>
  );
}

export default CategoryHeader;
