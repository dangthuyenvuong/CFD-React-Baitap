import { API } from "../constant";

const productService = {
    getProduct() {
        return fetch(`${API}/product`).then(res => res.json())
    }
}

export default productService;