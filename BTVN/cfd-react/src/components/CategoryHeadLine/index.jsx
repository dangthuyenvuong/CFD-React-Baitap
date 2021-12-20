import CategoryTitle from "../CategoryTitle";
import CategoryItem from "../CategoryItem";
import SpaceHeading from "./SpaceHeading";
import './style.scss';

function CategoryHeadLine() {
  return (
    <section className="headeline">
      <div className="container">
        <div className="headeline__left">
          <CategoryTitle title="Category menu" />
          <CategoryItem children="Bakery" />
          <CategoryItem children="Fruit and vegetables" />
          <CategoryItem children="Meat and fish" />
          <CategoryItem children="Drinks" />
          <CategoryItem children="Kitchen" />
        </div>
        <div className="headeline__right">
          <SpaceHeading />
          <SpaceHeading />
        </div>
      </div>
    </section>
  );
}

export default CategoryHeadLine;
