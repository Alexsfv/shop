import axios from "axios"
import { RegisterFormValues } from "../types/forms"
import { RegisterResponse } from "../types/response"
import { userRegisterUrl } from "./urls"

const api = {
    async registerUser(fields: RegisterFormValues) {
        try {
            const resp = await axios.post(userRegisterUrl, fields)
            return resp.data as RegisterResponse
        } catch (e) {
            console.log(e);
            return null
        }
    }
}

export default api