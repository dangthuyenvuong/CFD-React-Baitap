import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects'
import authService from 'services/authService';
import cartService from 'services/cartService';
import userService from 'services/userService';
// import Api from '...'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* count(action) {
    // try {
    //     const user = yield call(Api.fetchUser, action.payload.userId);
    //     yield put({ type: "USER_FETCH_SUCCEEDED", user: user });
    // } catch (e) {
    //     yield put({ type: "USER_FETCH_FAILED", message: e.message });
    // }

    yield put({ type: 'INCREMENT' })

    console.log('count')
}

function* fetchLogin(action) {
    try {
        const token = yield call(authService.login, action.payload)
        localStorage.setItem('token', JSON.stringify(token.data))

        yield put({ type: 'GET_PROFILE' })
    } catch (err) {

    }
}

function* getProfile(action) {
    try {
        const token = JSON.parse(localStorage.getItem('token'))
        if (token) {
            const user = yield call(userService.getInfo)
            yield put({ type: 'SET_PROFILE', payload: user.data })
        }
    } catch (err) {

    }
}

function* getCart() {
    try {
        yield delay(300)
        const token = JSON.parse(localStorage.getItem('token'))
        if (token) {
            const cart = yield call(cartService.getCart)
            yield put({ type: 'SET_CART', payload: cart.data })
        }
    } catch (err) {

    }
}


function* updateQuantity(action) {
    try {
        const { productId, quantity } = action.payload
        const res = yield call(cartService.updateQuantity, productId, quantity)
        yield put({type: "GET_CART"})
    } catch (err) {
        console.log(err)
    }
}

function* clearCart(){
    console.log('clearCart')
    try{
        yield put({type: 'CLEAR_CART'})
    }catch(err){
        console.log(err)
    }
}



/*
    Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
    Allows concurrent fetches of user.
*/


function* rootSaga() {
    yield takeEvery("COUNT", count);
    yield takeLatest('LOGIN', fetchLogin)
    yield takeLatest('GET_PROFILE', getCart)
    yield takeLatest('GET_PROFILE', getProfile)
    yield takeLatest('GET_CART', getCart)
    yield takeEvery(['INCREMENT', 'DECREMENT'], updateQuantity)
    yield takeLatest('LOGOUT', clearCart)
    // yield takeLatest(['INCREMENT', 'DECREMENT', 'QUANTITY', 'REMOVE_ITEM'], getCart)
    // yield takeLatest('COUNT', count)
}

export default rootSaga;