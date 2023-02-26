import { LoginSuccess, LoginFail, LoginStart, Logout } from "../Slices/AuthSlice";
import AuthApi from "../../Api/Authapi";
export const Login = (email, password) => async (dispatch) => {
    try {
        dispatch(LoginStart());
        const res = await AuthApi.login({ email, password });
        dispatch(LoginSuccess(res.data));
        window.location.href = "/admin";
    } catch (error) {
        dispatch(LoginFail(error.response.data));
    }
}

export const logout = () => async (dispatch) => {
    dispatch(Logout());
    window.location.href = "/admin/login";
}