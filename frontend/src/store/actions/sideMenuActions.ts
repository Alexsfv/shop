import { AllActions } from "../../types/other"
import { SIDE_MENU_SET_INDEX } from "../actionTypes/sideMenuActionTypes"





export const sideMenuActions = {
    setIndex(payload: number) {
        return {
            type: SIDE_MENU_SET_INDEX,
            payload
        } as const
    },
}

export type AllSideMenuActions = ReturnType<AllActions<typeof sideMenuActions>>