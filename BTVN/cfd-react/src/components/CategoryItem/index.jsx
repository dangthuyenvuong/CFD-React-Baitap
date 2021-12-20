import "./style.scss";

function CategoryItem({children}) {
    return (
        <ul className="category__item">
            <li className="item ">
            <a href="" className="item-link --green-bold">
            {children}
            </a>
            </li>
        </ul>
    )
}

export default CategoryItem
