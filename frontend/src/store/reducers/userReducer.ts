import { AllUserActions } from "../actions/userActions"
import { USER_LOGOUT, USER_SET_STATUS_LOGIN, USER_SET_STATUS_REGISTER, USER_INITIAL } from "../actionTypes/userActionTypes"

type FormState = {
    isFetching: boolean
    success: boolean | null
}

export type UserState = {
    isAuth: boolean
    info: {
        image: string
        name: string
        email: string
        phone: string
        country: string
        city: string
    },
    registerForm: FormState
    loginForm: FormState
}

const userState: UserState = {
    isAuth: false,
    info: {
        image: '',
        name: '',
        email: '',
        phone: '',
        country: '',
        city: '',
    },
    registerForm: {
        isFetching: false,
        success: null,
    },
    loginForm: {
        isFetching: false,
        success: null,
    }
}

export const userReducer = (state = userState, action: AllUserActions): UserState => {
    switch(action.type) {
        case(USER_INITIAL): {
            return {
                ...state,
                isAuth: true,
                info: {
                    ...state.info,
                    ...action.payload
                }
            }
        }
        case(USER_LOGOUT): {
            return {
                ...state,
                isAuth: false,
                info: {...userState.info}
            }
        }
        case(USER_SET_STATUS_REGISTER): {
            return {
                ...state,
                registerForm: {
                    ...state.registerForm,
                    isFetching: action.payload.isFetching,
                    success: action.payload.success,
                }
            }
        }
        case(USER_SET_STATUS_LOGIN): {
            return {
                ...state,
                loginForm: {
                    ...state.loginForm,
                    isFetching: action.payload.isFetching,
                    success: action.payload.success,
                }
            }
        }
        default: {
            return state
        }
    }
}