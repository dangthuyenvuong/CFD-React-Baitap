import authReducer from "./authReducer";
import {combineReducers} from 'redux'
import cardReducer from "./cardReducer";
import pageReducer from './pageReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    card: cardReducer,
    page: pageReducer
})

export default rootReducer