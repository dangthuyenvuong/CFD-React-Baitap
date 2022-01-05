import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import userService from 'services/userService'
import authReducer from './authenReducer'
import pageReducer from './pageReducer'
import rootSaga from './rootSaga'
import createSagaMiddleware from 'redux-saga'
import { countReducer } from './countReducer'
import cartReducer from './cartReducer'

const reducer = combineReducers({
    auth: authReducer,
    page: pageReducer,
    count: countReducer,
    cart: cartReducer
})


const sagaMiddleware = createSagaMiddleware()

// const logger = store => next => action => {
//     console.log('dispatching', action)
//     let result = next(action)
//     console.log('next state', store.getState())
//     return result
// }


const composeEnhancers = typeof window === 'object' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ? 
window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({ }) : compose

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)


store.dispatch({type: 'GET_PROFILE'})

// const token = JSON.parse(localStorage.getItem('token'))
// if (token) {
//     userService.getInfo()
//         .then(user => {
//             store.dispatch({
//                 type: 'LOGIN',
//                 payload: user.data
//             })
//         })

// }

export default store