import {LOGIN_ACTION , LOGOUT_ACTION , TOKEN} from '../constant'
const initValue = {
    username: null
}

const authReducer = (state = initValue , action) => {
    switch (action.type){
        case 'SET_PROFILE':
            // console.log(state)
            return {
                // state,
                ...action.payload
            }
        case LOGOUT_ACTION:
            window.localStorage.removeItem(TOKEN)
            return {
                ...initValue
            }
        default: 
            return state
    }
}



export default authReducer;