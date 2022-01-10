const initialValue = {
    isOpenCart: false,
    page: 0
}

export default function pageReducer (state = initialValue, action){
    switch(action.type){
        case 'OPEN_CART':
            return {
                ...state,
                isOpenCart: true
            }
        case 'CLOSE_CART':
            return {
                ...state,
                isOpenCart: false
            }
        case 'PAGE':
            return {
                ...state,
                page: action.payload
            }
        
    }
    return state
}