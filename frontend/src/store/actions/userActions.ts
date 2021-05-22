import { AllActions } from "../../types/other"
import { USER_LOGOUT, USER_SET_STATUS_LOGIN, USER_SET_STATUS_REGISTER, USER_INITIAL } from "../actionTypes/userActionTypes"
import { UserState } from "../reducers/userReducer"

export const userActions = {
    logout() {
        return {
            type: USER_LOGOUT
        } as const
    },
    initial(payload: UserState['info']) {
        console.log('payload 23', payload);
        
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
}

export type AllUserActions = ReturnType<AllActions<typeof userActions>>