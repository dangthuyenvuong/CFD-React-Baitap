import { API } from '../constant/api'
import callApiWithToken from '../utils/callApiWithToken'

const wishService = {
    addWishList(id) {
        return callApiWithToken(`${API}/profile/wishlist/${id}`, {
            method: 'POST'
        }).then(res => res.json())
    },
    deleteWishList(id) {
        return callApiWithToken(`${API}/profile/wishlist/${id}`, {
            method: 'DELETE'
        }).then(res => res.json())
    },
    getWishList() {
        return callApiWithToken(`${API}/profile/wishlist`).then(res => res.json())
    }
}

export default wishService