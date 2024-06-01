import {FormLogin} from "@/types/FormLogin.ts";
import apiInstance from "@api/ApiInstance.ts";

const AuthServices = () => {
    const loginSeller = async (payload: FormLogin) => {
        const {data} = await apiInstance.post('/auth/login', payload);
        if (data.statusCode == 200) {
            console.log(data.data)
            localStorage.setItem('token', data.data.token);
            localStorage.setItem('storeId', data.data.storeId);
        }
        return data;
    }

    const validateToken = async () => {
        try {
            const {data} = await apiInstance.get('/auth/validate-token');
            return data.statusCode === 200;
        } catch (error) {
            return false;
        }
    }

    return {
        loginSeller,
        validateToken
    }
}

export default AuthServices;