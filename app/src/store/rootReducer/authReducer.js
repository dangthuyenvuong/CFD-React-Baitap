import { LOGOUT, SET_PROFILE, TOKEN } from "../../constant";

const initValue = {
    username: null
}

const authReducer = (state = initValue,action) => {
    switch(action.type) {
        case SET_PROFILE: 
        return {
            state,
            ...action.payload
        }
        case LOGOUT: return {
            ...initValue
        }
        default: return state;
    }
}

export default authReducer