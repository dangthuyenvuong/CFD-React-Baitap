import "./App.css";
import "../src/assets/styles/styles.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CategoryHeader from "./components/CategoryHeader";
import CategoryHeadLine from "./components/CategoryHeadLine";
import Tag from "./components/Tag";
import { IconCloseGreen } from "../src/components/Icon";
import { IconCloseGray } from "../src/components/Icon";
import { IconStar } from "../src/components/Icon";
import CheckBox from "./components/Checkbox";
import ProductItem from "./components/ProductItem";
import Button from "./components/Buttons";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="mainwrapper">
        <CategoryHeader />
        <CategoryHeadLine />
        <Tag
          type="close"
          color="green"
          background="white"
          size="large"
          icon={<IconCloseGreen />}
          long
        />
        <Tag
          color="green"
          background="gray"
          size="large"
          icon={<IconCloseGray />}
          long
        />
        <br />
        <CheckBox children="Text field" />

        <div class="container">
          <div className="pd__list">
            <ProductItem
              image={<img src="../images/product.jpg" />}
              title="Product title"
              border="gray"
              description="Space for a small product description"
              sale
              rate
              icon={<IconStar />}
              price="36.99 USD"
              percent="- 36 %"
              mainPrice="48.56"
              color="white"
              children="Buy now"
              background="green"
              size="small"
            />
            <ProductItem
              image={<img src="../images/product.jpg" />}
              title="Product title"
              border="gray"
              description="Space for a small product description"
              sale
              rate
              icon={<IconStar />}
              price="36.99 USD"
              percent="- 36 %"
              mainPrice="48.56"
              color="white"
              children="Buy now"
              background="green"
              size="small"
            />
            <ProductItem
              image={<img src="../images/product.jpg" />}
              title="Product title"
              border="gray"
              description="Space for a small product description"
              sale
              rate
              icon={<IconStar />}
              price="36.99 USD"
              percent="- 36 %"
              mainPrice="48.56"
              color="white"
              children="Buy now"
              background="green"
              size="small"
            />
            <ProductItem
              image={<img src="../images/product.jpg" />}
              title="Product title"
              border="gray"
              description="Space for a small product description"
              sale
              rate
              icon={<IconStar />}
              price="36.99 USD"
              percent="- 36 %"
              mainPrice="48.56"
              color="white"
              children="Buy now"
              background="green"
              size="small"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
