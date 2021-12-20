import React from 'react';
import { Basket } from '../Icon';
function HeaderCart(props) {
    return (
        <a href="#!" className="header__cart">
            <Basket width={25} height={25} color={"#151515"} />
            <span className="bill">
                4
            </span>
    </a>
    );
}

export default HeaderCart;