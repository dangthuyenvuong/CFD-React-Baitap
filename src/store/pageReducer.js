const initialValue = {
    isOpenCart: false
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
        
    }
    return state
}