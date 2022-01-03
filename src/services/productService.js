import { API } from "constant/api"

const productService = {
    list(){
        return fetch(`${API}/product`).then(res => res.json())
    }
}
export default productService