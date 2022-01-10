import {createStore, combineReducers , applyMiddleware , compose} from 'redux'
import { LOGIN_ACTION, LOGOUT_ACTION, TOKEN } from '../constant';
import userService from '../services/userService';
import authReducer from './authenReducer'
import pageReducer from './pageReducer';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './rootSaga'

const rootRedecre = combineReducers({
    auth: authReducer,
    page: pageReducer
})

const composeEnhancers =  typeof window === 'object' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ? 
      window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({ }) : compose;
const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootRedecre,
    composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)


const token = JSON.parse(localStorage.getItem(TOKEN));
if(token){
    store.dispatch({type: 'GET_PROFILE'})
}
export default store;