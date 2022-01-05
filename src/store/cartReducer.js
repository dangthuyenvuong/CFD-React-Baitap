const initialValue = {
    cart: {}
}

export default function cartReducer(state = initialValue, action){
    switch(action.type){
        case 'SET_CART':
            return {
                ...state,
                cart: action.payload
            }
        case 'CLEAR_CART':
            return {
                ...initialValue
            }
    }
    return state
} 