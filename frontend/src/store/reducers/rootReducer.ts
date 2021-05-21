import { combineReducers } from 'redux'
import { cartReducer } from './cartReducer'
import { sideMenuReducer } from './sideMenuReducer'
import { userReducer } from './userReducer'

export const rootReducer = combineReducers({
    cart: cartReducer,
    sideMenu: sideMenuReducer,
    user: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>