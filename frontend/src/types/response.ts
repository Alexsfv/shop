export type UserDataResponse = {
    image: string
    cart: []
    city: string
    country: string
    email: string
    favourite: []
    isAdmin: boolean
    name: string
    phone: string
    _id: string
}

export type RegisterResponse = {
    success: boolean
    message: string
}

export type LoginResponse = {
    user: UserDataResponse,
    token: string
}

export type UpdateAvatarResponse = {
    path: string
}

export type UpdataUserInfoResponse = {
    user: UserDataResponse
}