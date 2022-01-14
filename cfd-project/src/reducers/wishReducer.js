const init = {
    id: 123456
}

const wishReducer = (state = init, action ) => { 
    switch (action.type) {
        case 'SET_WISHLIST':
            return {
                ...state,
                wishList: action.payload
            }
        default:
            break;
    }
    return {
        ...state
    }
}

export default wishReducer