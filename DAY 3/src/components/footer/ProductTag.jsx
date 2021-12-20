import ProductItem from "./ProductItem";

const ProductTag = () => {
    return (
        <div className="product-tag">
            <h4 className="heading --h4">Product tags</h4>
            <div className="product-tag__wrap">
                <ProductItem name='Beans'/>
                <ProductItem name='Carrots'/>
                <ProductItem name='Apples'/>
                <ProductItem name='Garlic'/>
                <ProductItem name='Mushrooms'/>
                <ProductItem name='Tomatoes'/>
                <ProductItem name='Chilli peppers'/>
                <ProductItem name='Watermelons'/>
                <ProductItem name='Oranges'/>
                <ProductItem name='Bananas'/>
                <ProductItem name='Grapes'/>
                <ProductItem name='Cherries'/>
                <ProductItem name='Meat'/>
                <ProductItem name='Seo tag'/> 
                <ProductItem name='Fish'/>
                <ProductItem name='Seo tag'/> 
                <ProductItem name='Fresh food'/> 
                <ProductItem name='Lemons' />
            </div>
        </div>
    )
}

export default ProductTag;