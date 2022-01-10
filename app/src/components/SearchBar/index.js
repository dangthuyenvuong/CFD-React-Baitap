import React from 'react'
import { Arrow , Search} from '../icons';
import './style.scss';
export default function SearchBar() {
    return (
        <div className="searchBar">
            <div className="select">
                <div className="select_box">
                    <div className="item">
                        <span>All categories</span>
                    </div>
                    <div className="item">
                        <span>All categories</span>
                    </div>
                    <div className="item">
                        <span>All categories</span>
                    </div>
                </div>
                <Arrow color="#6A983C" />
            </div>
            <div className="text">
                <input type="text" placeholder='Search Products, categories ...'/>
                <Search />
            </div>
        </div>
    )
}
