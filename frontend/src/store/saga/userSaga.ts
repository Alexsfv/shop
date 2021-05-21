import { put, takeEvery, call } from 'redux-saga/effects'
import api from '../../api/api'
import { AllUserActions, userActions } from '../actions/userActions'
import { SAGA_INITIAL_USER, SAGA_REGISTER_USER } from './actionTypes'
import { RegisterResponse } from '../../types/response'
import { USER_SET_STATUS_REGISTER } from '../actionTypes/userActionTypes'
import { RegisterFormValues } from '../../types/forms'

export const userSagaActions = {
    register(fields: RegisterFormValues) {
        return {
            type: SAGA_REGISTER_USER,
            payload: fields
        }
    }
}

// function* initialUser() {
//     try {
//         const optiions = {
//             // headers: { 'Authorization':  }
//         }
//     } catch(e) {
//         console.log(e)
//         yield put(userActions.logout())
//     }
// }

function* registerUser(action: ReturnType<typeof userSagaActions['register']>) {

        yield put(userActions.fetchRegister())
        const data: RegisterResponse | null = yield call(api.registerUser, action.payload)
        if (data) {
            yield put(userActions.setRegisterStatus({
                success: data.success,
                message: data.message || ''
            }))
        } else {
            yield put(userActions.setRegisterStatus({
                success: false,
                message: 'A user with this email address is already registered'
            }))
        }
}

export function* userSaga() {
    // yield takeEvery(SAGA_INITIAL_USER, initialUser)
    yield takeEvery(SAGA_REGISTER_USER, registerUser)
}