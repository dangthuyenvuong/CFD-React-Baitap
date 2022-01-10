import {API} from '../constant';
export const authService = {
    login(data) {
        return fetch(`${API}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json());
    },
    register(){},
    refreshToken(){}
}
