import {FormLogin} from "@/types/FormLogin.ts";
import apiInstance from "@api/ApiInstance.ts";

const AuthServices = {
    loginSeller: async (payload: FormLogin) => {
        const {data} = await apiInstance.post('/auth/login-seller', payload);
        if (data.statusCode == 200) {
            localStorage.setItem('token', data.data.token);
        }
        return data;
    }
}

export default AuthServices;