import { CLOSE_CARD, OPEN_CARD, SET_CARD, CLEAR_CARD} from "../../constant"

let initValue = {
    card: {}
}

const cardReducer = (state = initValue,action) => {
    switch(action.type){
        case SET_CARD: return {
            ...state,
            card: action.payload
        }
        case CLEAR_CARD: return {
            ...initValue
        }
        default: return state
    }
}

export default cardReducer;