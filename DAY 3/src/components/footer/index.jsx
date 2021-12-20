import FooterTop from "./FooterTop";
import ProductTag from "./ProductTag";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <FooterTop />
                <ProductTag />

                <p className="copyright">Copyright © 2020 petrbilek.com</p>
            </div>
        </footer>
    )
}

export default Footer;