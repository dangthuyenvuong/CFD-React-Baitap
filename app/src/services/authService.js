import { API, TOKEN } from '../constant';
const authService = {
    login(data) {
        return fetch(`${API}/login`,{
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json());
    },
    refreshToken() {
        const token = JSON.parse(localStorage.getItem(TOKEN));
        return fetch(`${API}/refresh-token` , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                refreshToken: token.refreshToken
            })
        }).then(res => res.json())
    }
}
export default authService