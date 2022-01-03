import { API } from "constant/api"
import { callApiWithToken } from "utils"

const userService = {
    getInfo(){
        return callApiWithToken(`${API}/user/get-info`)

        // const token = JSON.parse(localStorage.getItem('token'))
        // return fetch(`${API}/user/get-info`, {
        //     headers: {
        //         'Authorization': `Bearer ${token.accessToken}`
        //     }
        // }).then(res => res.json())
    },
    updateInfo(data){

        return callApiWithToken(`${API}/user/get-info`, {
            method: 'POST',
            body: JSON.stringify(data)
        })

        // const token = JSON.parse(localStorage.getItem('token'))
        // return fetch(`${API}/user/update`, {
        //     method: 'POST',
        //     headers: {
        //         'Authorization': `Bearer ${token.accessToken}`
        //     }
        // }).then(res => res.json())
    }
}

export default userService