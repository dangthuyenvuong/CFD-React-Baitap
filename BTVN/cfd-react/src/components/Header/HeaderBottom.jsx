import Logo from "../../assets/img/logo.png";
import "./HeaderBottom.scss";
import { IconSearch } from "../Icon";
import { IconArrowDownGreenLarge } from "../Icon";
import { IconUser } from "../Icon";
import { IconCart } from "../Icon";

export default function HeaderBottom() {
  return (
    <>
      <div className="header__bottom">
        <div className="header__bottom-logo">
          <a href="">
            <img src={Logo} alt="" />
          </a>
        </div>
        <div className="header__bottom-form">
          <div className="category">
            <div className="dropdown">
              <div className="dropdown-select">
                <span>All Category</span>
                <IconArrowDownGreenLarge />
              </div>
              {/* <div className="dropdown-list">
                  <div className="dropdown-item">title</div>
                  <div className="dropdown-item">title</div>
                  <div className="dropdown-item">title</div>
                </div> */}
            </div>
          </div>
          <div className="input-search">
            <input type="text" placeholder="Search Products, categories ..." />
          </div>
          <div className="btn">
            <button className="btn-search">
              <IconSearch />
            </button>
          </div>
        </div>
        <div className="header__bottom-cart">
          <IconUser />
          <IconCart />
        </div>
      </div>
    </>
  );
}
