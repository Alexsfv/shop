import { AllActions } from "../../types/other"
import { USER_LOGOUT, USER_SET_STATUS_LOGIN, USER_SET_STATUS_REGISTER, USER_INITIAL, USER_UPDATE_AVATAR } from "../actionTypes/userActionTypes"
import { UserState } from "../reducers/userReducer"

export const userActions = {
    logout() {
        return {
            type: USER_LOGOUT
        } as const
    },
    initial(payload: UserState['info']) {
        return {
            type: USER_INITIAL,
            payload
        } as const
    },
    setRegisterStatus(payload: { success: boolean | null, isFetching: boolean }) {
        return {
            type: USER_SET_STATUS_REGISTER,
            payload
        } as const
    },
    setLoginStatus(payload: { success: boolean | null, isFetching: boolean }) {
        return {
            type: USER_SET_STATUS_LOGIN,
            payload
        } as const
    },
    updateAvatar(payload: string) {
        return {
            type: USER_UPDATE_AVATAR,
            payload
        } as const
    },
}

export type AllUserActions = ReturnType<AllActions<typeof userActions>>