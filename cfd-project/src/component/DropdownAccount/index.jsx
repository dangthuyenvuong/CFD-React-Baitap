import React from 'react';
import { ArrowDown } from '../Icon';

function DropdownAccount({title}) {
    return (
        <li className="menu__type">
            <p className="menu__title">
                {title}
                <ArrowDown width={16} height={16}/>
            </p>
        </li>
    );
}

export default DropdownAccount;