import { Navigate, useNavigate } from 'react-router-dom';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { API, LOGIN_ACTION, TOKEN } from '../constant';
import {authService} from '../services/authService'
import userService from '../services/userService';
// import Api from '...'

function* fetchLogin(action) {
    try{
        const token = yield call(authService.login, action.payload)
        localStorage.setItem(TOKEN, JSON.stringify(token.data))

        yield put({type: 'GET_PROFILE'})
    }
    catch(err) {
    }
}
function* getProfile(action) {
    try{
            const user = yield call(userService.getInfo)
            yield put({
                type: 'SET_PROFILE',
                payload: user.data
            })
    }catch(err){

    }
}
function* getCard(action) {
    try {
        const data = yield call(`${API}/ecommerce/v1/cart`);
        console.log(data)
    }catch(err) {

    }
}

function* mySaga() {
    yield takeLatest(LOGIN_ACTION , fetchLogin)
    yield takeLatest('GET_PROFILE' , getProfile)
    yield takeLatest('GET_PROFILE' , getCard)
}

export default mySaga;