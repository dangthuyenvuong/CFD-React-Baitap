import { API } from "constant/api"
import { callApiWithToken } from "utils"

const cartService = {
    getCart() {
        return callApiWithToken(`${API}/ecommerce/v1/cart`)
    },
    updateQuantity(id, quantity) {
        return callApiWithToken(`${API}/ecommerce/v1/cart/quantity/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                quantity
            })
        })
    }
}

export default cartService