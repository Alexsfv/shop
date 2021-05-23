import axios from "axios"
import { RegisterFormValues, LoginFormValues, AccountFormValues } from "../types/forms"
import { RegisterResponse, LoginResponse, UserDataResponse, UpdateAvatarResponse, UpdataUserInfoResponse } from "../types/response"
import { getCookie } from "../utils/cookie"
import { userRegisterUrl, userLoginUrl, initialUserUrl, updateAvatarUrl, updateInfoUrl } from "./urls"

const tokenHeader = () => {
    const token = getCookie('token')
    return {
        headers: {'Authorization': `Bearer ${token}`}
    }
}

const api = {
    async registerUser(fields: RegisterFormValues) {
        try {
            const resp = await axios.post(userRegisterUrl, fields)
            return resp.data as RegisterResponse
        } catch (e) {
            console.log(e);
            return null
        }
    },
    async loginUser(fields: LoginFormValues) {
        try {
            const resp = await axios.post(userLoginUrl, fields)
            return resp.data as LoginResponse
        } catch (e) {
            console.log(e);
            return null
        }
    },
    async initialAuth() {
        try {
            const resp = await axios.get(initialUserUrl, tokenHeader())
            return resp.data as UserDataResponse
        } catch(e) {
            console.log(e)
            return null
        }
    },
    async updateAvatarUrl(file: File) {
        try {
            const formData = new FormData()
            formData.append('avatar', file)
            const resp = await axios.post(updateAvatarUrl, formData, tokenHeader())
            return resp.data as UpdateAvatarResponse
        } catch(e) {
            console.log(e)
            return null
        }
    },
    async updateUserInfo(fields: AccountFormValues) {
        try {
            const { _img, imageSrc, ...apiData } = fields
            const resp = await axios.post(updateInfoUrl, apiData, tokenHeader())
            return resp.data as UpdataUserInfoResponse
        } catch(e) {
            console.log(e)
            return null
        }
    }
}

export default api