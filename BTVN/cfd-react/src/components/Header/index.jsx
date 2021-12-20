import "./style.scss";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <HeaderTop />
        <HeaderBottom />
      </div>
    </div>
  );
}

export default Header;
