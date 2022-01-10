import { API, TOKEN } from "../constant"

const userService = {
    getInfo() {
        const token = JSON.parse(localStorage.getItem(TOKEN))
        return fetch(`${API}/user/get-info` , {
            headers: {
                'Authorization': `Bearer ${token.accessToken}`
            }
        }).then(res => res.json())
    }
}
export default userService