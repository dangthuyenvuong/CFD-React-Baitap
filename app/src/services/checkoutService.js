import { API } from "../constant";

const checkoutService = {
    postForm(form) {
        return fetch(`${API}/ecommerce/v1/order`,{
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(form)
        }).then(res => res.json());
    }
}

export default checkoutService;