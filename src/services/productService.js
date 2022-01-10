import { API } from "constant/api"

const productService = {
    list(query = ''){
        return fetch(`${API}/product${query}`).then(res => res.json())
    }
}
export default productService