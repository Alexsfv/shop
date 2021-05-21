import { AllSideMenuActions } from "../actions/sideMenuActions"
import { SIDE_MENU_SET_INDEX } from "../actionTypes/sideMenuActionTypes"

export type SideMenuState = typeof sideMenuState

const sideMenuState = {
    currentIndex: 0
}

export const sideMenuReducer = (state = sideMenuState, action: AllSideMenuActions) => {
    switch(action.type) {
        case(SIDE_MENU_SET_INDEX): {
            return {
                ...state,
                currentIndex: action.payload
            }
        }
        default: {
            return state
        }
    }
}