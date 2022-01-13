import {SET_PRODUCT, CLEAR_PRODUCT} from "../../constant"

let initValue = {
    product: {}
}

const productReducer = (state = initValue,action) => {
    switch(action.type){
        case SET_PRODUCT: return {
            ...state,
            product: action.payload
        }
        case CLEAR_PRODUCT: return {
            ...initValue
        }
        default: return state
    }
}

export default productReducer;