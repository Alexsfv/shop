import { put, takeEvery, call } from 'redux-saga/effects'
import api from '../../api/api'
import { userActions } from '../actions/userActions'
import { SAGA_LOGIN_USER, SAGA_REGISTER_USER, SAGA_CHECK_AUTH } from './actionTypes'
import { RegisterResponse, LoginResponse, UserDataResponse } from '../../types/response'
import { RegisterFormValues, LoginFormValues } from '../../types/forms'
import { removeCookie, setCookie } from '../../utils/cookie'

export const userSagaActions = {
    register(fields: RegisterFormValues) {
        return {
            type: SAGA_REGISTER_USER,
            payload: fields
        }
    },
    login(fields: LoginFormValues) {
        return {
            type: SAGA_LOGIN_USER,
            payload: fields
        }
    },
    checkAuth() {
        return {
            type: SAGA_CHECK_AUTH
        }
    }
}


function* registerUser(action: ReturnType<typeof userSagaActions['register']>) {
    yield put(userActions.setRegisterStatus({
        success: null,
        isFetching: true
    }))
    const data: RegisterResponse | null = yield call(api.registerUser, action.payload)
    if (data) {
        yield put(userActions.setRegisterStatus({
            success: data.success,
            isFetching: false
        }))
    } else {
        yield put(userActions.setRegisterStatus({
            success: false,
            isFetching: false
        }))
    }
}

function* loginUser(action: ReturnType<typeof userSagaActions['login']>) {
    yield put(userActions.setLoginStatus({
        success: null,
        isFetching: true
    }))
    const data: LoginResponse | null = yield call(api.loginUser, action.payload)
    if (data) {
        yield put(userActions.setLoginStatus({
            success: true,
            isFetching: false
        }))
        setCookie('token', data.token)
        yield put(userActions.initial({
            image: '',
            name: data.user.name,
            email: data.user.email,
            phone: data.user.phone,
            country: data.user.country,
            city: data.user.city,
        }))
    } else {
        yield put(userActions.setLoginStatus({
            success: false,
            isFetching: false
        }))
        removeCookie('token')
    }
}

function* initialAuth() {
    const user: UserDataResponse | null = yield call(api.initialAuth)
    if (!user) {
        yield put(userActions.logout())
    } else {
        yield put(userActions.initial({
            image: '',
            name: user.name,
            email: user.email,
            phone: user.phone,
            country: user.country,
            city: user.city,
        }))
    }
}

export function* userSaga() {
    yield takeEvery(SAGA_REGISTER_USER, registerUser)
    yield takeEvery(SAGA_LOGIN_USER, loginUser)
    yield takeEvery(SAGA_CHECK_AUTH, initialAuth)
}