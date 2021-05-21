import { AllUserActions } from "../actions/userActions"
import { USER_CLEAR_STATUS_REGISTER, USER_FETCH_REGISTER, USER_LOGOUT, USER_SET_STATUS_REGISTER, USER_UPDATE_INFO } from "../actionTypes/userActionTypes"

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
    registerForm: {
        isFetching: boolean
        success: boolean | null
        message: string
    }
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
        message: '',
    }
}

export const userReducer = (state = userState, action: AllUserActions): UserState => {
    switch(action.type) {
        case(USER_UPDATE_INFO): {
            return {
                ...state,
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
        case(USER_FETCH_REGISTER): {
            return {
                ...state,
                registerForm: {
                    ...state.registerForm,
                    isFetching: true,
                    message: '',
                }
            }
        }
        case(USER_CLEAR_STATUS_REGISTER): {
            return {
                ...state,
                registerForm: {
                    ...userState.registerForm
                }
            }
        }
        case(USER_SET_STATUS_REGISTER): {
            return {
                ...state,
                registerForm: {
                    ...state.registerForm,
                    isFetching: false,
                    success: action.payload.success,
                    message: action.payload.message
                }
            }
        }
        default: {
            return state
        }
    }
}