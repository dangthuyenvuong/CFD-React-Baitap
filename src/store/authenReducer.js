
const user = JSON.parse(localStorage.getItem('login'))

const initialState = {
    login: !!user,
    user
}

const authReducer = ( state = initialState, action ) => {
    switch(action.type){
        case 'LOGIN':
            return {
                login: true,
                user: action.payload
            }
        case 'LOGOUT': 
            localStorage.removeItem('token')
            return {
                login: false,
                user: null
            }
    }

    return state
}


export default authReducer