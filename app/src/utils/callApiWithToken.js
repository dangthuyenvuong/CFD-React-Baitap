import { TOKEN } from "../constant"
import { authService } from "../services"

const callApiWithToken = async (url, options={}) => {
    let token = JSON.parse(localStorage.getItem('token'))

    options = {
        ...options,
        headers: {
            ...options.headers,
            'Authorization': `Bearer ${token.accessToken}`,
            'Content-Type': 'application/json'
        }
    }
    const res = await fetch(url,options)
    if(res.status === 403){
        const refresh = await authService.refreshToken()
        if(refresh.data.accessToken){
            token.accessToken = refresh.data.accessToken
            localStorage.setItem(TOKEN, JSON.stringify(token))

            options = {
                ...options,
                headers: {
                    ...options.headers,
                    'Authorization': `Bearer ${token.accessToken}`
                }
            }
            return fetch(url, options).then(res => res.json())
        }
    }
    return res.json();
}

export default callApiWithToken