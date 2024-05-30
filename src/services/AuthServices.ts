import {FormLogin} from "@/types/FormLogin.ts";
import apiInstance from "@api/ApiInstance.ts";

const AuthServices = {
    loginSeller: async (payload: FormLogin) => {
        const {data} = await apiInstance.post('/auth/login', payload);
        if (data.statusCode == 200) {
            console.log(data.data)
            localStorage.setItem('token', data.data.token);
            localStorage.setItem('storeId', data.data.storeId);
        }
        return data;
    }
}

export default AuthServices;