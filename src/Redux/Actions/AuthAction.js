import axios from "axios";
import { LoginSuccess, LoginFail, LoginStart } from "../Slices/AuthSlice";

export const Login = (email, password) => async (dispatch) => {
    try {
        dispatch(LoginStart());
        const res = await axios.post("https://fphone-api.vercel.app/api/auth/admin-login", {
            email,
            password,
        });
        dispatch(LoginSuccess(res.data));
        window.location.href = "/admin";
    } catch (error) {
        dispatch(LoginFail(error.response.data));
    }
}