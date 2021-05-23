import { put, takeEvery, call } from 'redux-saga/effects'
import api from '../../api/api'
import { userActions } from '../actions/userActions'
import { SAGA_LOGIN_USER, SAGA_REGISTER_USER, SAGA_CHECK_AUTH, SAGA_UPDATE_AVATAR, SAGA_UPDATE_INFO } from './actionTypes'
import { RegisterResponse, LoginResponse, UserDataResponse, UpdateAvatarResponse, UpdataUserInfoResponse } from '../../types/response'
import { RegisterFormValues, LoginFormValues, AccountFormValues } from '../../types/forms'
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
    },
    updateAvatar(payload: File) {
        return {
            type: SAGA_UPDATE_AVATAR,
            payload
        }
    },
    updateInfo(payload: AccountFormValues) {
        return {
            type: SAGA_UPDATE_INFO,
            payload
        }
    },
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
            image: data.user.image,
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
            image: user.image,
            name: user.name,
            email: user.email,
            phone: user.phone,
            country: user.country,
            city: user.city,
        }))
    }
}

function* updateAvatar(action: ReturnType<typeof userSagaActions['updateAvatar']>) {
    const data: UpdateAvatarResponse | null = yield call(api.updateAvatarUrl, action.payload)
    if (data) {
        yield put(userActions.updateAvatar(data.path))
    }
}

function* updateInfo(action: ReturnType<typeof userSagaActions['updateInfo']>) {
    const data: UpdataUserInfoResponse | null = yield call(api.updateUserInfo, action.payload)
    if (data) {
        yield put(userActions.initial({
            image: data.user.image,
            name: data.user.name,
            email: data.user.email,
            phone: data.user.phone,
            country: data.user.country,
            city: data.user.city,
        }))
    }
}

export function* userSaga() {
    yield takeEvery(SAGA_REGISTER_USER, registerUser)
    yield takeEvery(SAGA_LOGIN_USER, loginUser)
    yield takeEvery(SAGA_CHECK_AUTH, initialAuth)
    yield takeEvery(SAGA_UPDATE_AVATAR, updateAvatar)
    yield takeEvery(SAGA_UPDATE_INFO, updateInfo)
}