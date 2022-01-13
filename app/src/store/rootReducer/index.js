import authReducer from "./authReducer";
import {combineReducers} from 'redux'
import cardReducer from "./cardReducer";
import pageReducer from './pageReducer'
import productReducer from "./productReducer";
const rootReducer = combineReducers({
    auth: authReducer,
    card: cardReducer,
    page: pageReducer,
    product: productReducer
})

export default rootReducer