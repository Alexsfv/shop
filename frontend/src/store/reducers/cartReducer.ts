export type CartState = {
    cart: string
}

const initialState = {
    cartItem: 'test'
}

export const cartReducer = (state = initialState, action: any) => {
    switch(action.type) {
        default: return state
    }
}