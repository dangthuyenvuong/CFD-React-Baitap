import { createStore, combineReducers } from 'redux'
import userService from 'services/userService'
import authReducer from './authenReducer'

const reducer = combineReducers({
    auth: authReducer
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



const token = JSON.parse(localStorage.getItem('token'))
if(token){
    userService.getInfo()
    .then(user => {
        store.dispatch({
            type: 'LOGIN', 
            payload: user.data
        })
    })
    
}

export default store