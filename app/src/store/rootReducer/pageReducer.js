import { CLOSE_CARD, OPEN_CARD } from "../../constant"

const initValue = {
    isOpen: false
}

const pageReducer = (state = initValue , action) => {
    switch(action.type){
        case OPEN_CARD:
            return {
                ...state,
                isOpen: true
            }
        case CLOSE_CARD:
            return {
                ...state,
                isOpen: false
            }
        default: return state
    }
}

export default pageReducer;