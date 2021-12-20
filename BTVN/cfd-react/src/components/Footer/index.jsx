import CategoryItem from "../CategoryItem";
import CategoryTitle from "../CategoryTitle";
import Tag from "../Tag";
import "./style.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__top-list">
            <CategoryTitle title="Get in touch" />
            <CategoryItem children="About Us" />
            <CategoryItem children="Careers" />
            <CategoryItem children="Press Releases" />
            <CategoryItem children="Blog" />
          </div>
          <div className="footer__top-list">
            <CategoryTitle title="Connections" />
            <CategoryItem children="Facebook" />
            <CategoryItem children="Twitter" />
            <CategoryItem children="Instagram" />
            <CategoryItem children="Youtube" />
            <CategoryItem children="LinkedIn" />
          </div>
          <div className="footer__top-list">
            <CategoryTitle title="Earnings" />
            <CategoryItem children="Become an Affiliate" />
            <CategoryItem children="Advertise your product" />
            <CategoryItem children="Sell on Market" />
          </div>
          <div className="footer__top-list">
            <CategoryTitle title=" Account" />
            <CategoryItem children="Your account" />
            <CategoryItem children="Returns Centre" />
            <CategoryItem children="100 % purchase protection" />
            <CategoryItem children="Chat with us" />
            <CategoryItem children="Help" />
          </div>
        </div>
        <div className="footer__bottom">
          <h3 className="title heading --h5">Product tags</h3>
          <div className="footer__bottom-tag">
            <Tag
              children="Beans"
              color="black"
              background="gray"
              size="large"
            />
            <Tag
              children="Carrots"
              color="black"
              background="gray"
              size="large"
            />
            <Tag
              children="Apples"
              color="black"
              background="gray"
              size="large"
            />
            <Tag
              children="Garlic"
              color="black"
              background="gray"
              size="large"
            />
            <Tag
              children="Mushrooms"
              color="black"
              background="gray"
              size="large"
            />
            <Tag
              children="Tomatoes"
              color="black"
              background="gray"
              size="large"
            />
            <Tag
              children="Chilli peppers"
              color="black"
              background="gray"
              size="large"
            />
            <Tag
              children="Broccoli"
              color="black"
              background="gray"
              size="large"
            />
            <Tag
              children="Watermelons"
              color="black"
              background="gray"
              size="large"
            />
            <Tag
              children="Oranges"
              color="black"
              background="gray"
              size="large"
            />
            <Tag
              children="Bananas"
              color="black"
              background="gray"
              size="large"
            />
            <Tag
              children="Grapes"
              color="black"
              background="gray"
              size="large"
            />
            <Tag
              children="Cherries"
              color="black"
              background="gray"
              size="large"
            />
            <Tag children="Meat" color="black" background="gray" size="large" />
            <Tag
              children="Seo tag"
              color="black"
              background="gray"
              size="large"
            />
            <Tag children="Fish" color="black" background="gray" size="large" />
            <Tag
              children="Seo tag"
              color="black"
              background="gray"
              size="large"
            />
            <Tag
              children="Fresh food"
              color="black"
              background="gray"
              size="large"
            />
            <Tag
              children="Lemons"
              color="black"
              background="gray"
              size="large"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
