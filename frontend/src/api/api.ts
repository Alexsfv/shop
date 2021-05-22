import axios from "axios"
import { RegisterFormValues, LoginFormValues } from "../types/forms"
import { RegisterResponse, LoginResponse, UserDataResponse } from "../types/response"
import { getCookie } from "../utils/cookie"
import { userRegisterUrl, userLoginUrl, initialUserUrl } from "./urls"

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
            const token = getCookie('token')
            if (!token) return false
            const resp = await axios.get(initialUserUrl, {
                headers: {'Authorization': `Bearer ${token}`}
            })
            return resp.data as UserDataResponse
        } catch(e) {
            console.log(e)
            return null
        }
    }
}

export default api