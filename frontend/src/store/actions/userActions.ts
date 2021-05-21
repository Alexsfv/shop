import { RegisterFormValues } from "../../types/forms"
import { AllActions } from "../../types/other"
import { USER_CLEAR_STATUS_REGISTER, USER_FETCH_REGISTER, USER_LOGOUT, USER_SET_STATUS_REGISTER, USER_UPDATE_INFO } from "../actionTypes/userActionTypes"
import { UserState } from "../reducers/userReducer"
import { SAGA_INITIAL_USER, SAGA_REGISTER_USER } from "../saga/actionTypes"

export const userActions = {
    updateInfo(newInfo: UserState['info']) {
        return {
            type: USER_UPDATE_INFO,
            payload: newInfo
        } as const
    },
    logout() {
        return {
            type: USER_LOGOUT
        } as const
    },
    initial() {
        return {
            type: SAGA_INITIAL_USER
        } as const
    },
    fetchRegister() {
        return {
            type: USER_FETCH_REGISTER
        } as const
    },
    setRegisterStatus(payload: { success: boolean, message: string }) {
        return {
            type: USER_SET_STATUS_REGISTER,
            payload
        } as const
    },
    clearRegisterStatus() {
        return {
            type: USER_CLEAR_STATUS_REGISTER
        } as const
    }
}

export type AllUserActions = ReturnType<AllActions<typeof userActions>>