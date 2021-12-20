import "./HeaderTop.scss";
export default function HeaderTop() {
  return (
    <>
      <div className="header__top">
        <ul className="header__top-left">
          <li className="item">
            <a href="" className="item-link">
             chat with us
            </a>
          </li>
          <li className="item">+420 336 775 664</li>
          <li className="item">info@freshnesecom.com</li>
        </ul>
        <ul className="header__top-right">
          <li className="item">
            <a href="" className="item-link">
              Blog
            </a>
          </li>
          <li className="item">
            <a href="" className="item-link">
              About Us
            </a>
          </li>
          <li className="item">
            <a href="" className="item-link">
              Careers
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
