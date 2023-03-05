import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userLogin } from '../../../Redux/Actions/AuthAction';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
export default function UserLogin() {
    const dispatch = useDispatch()
    const [user, setUser] = React.useState({
        email: null,
        password: null,
    })
    const { isLoading } = useSelector(state => state.auth)
    const { error } = useSelector(state => state.auth)
    const onChangeInput = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        // validate
        if (user.email === null || user.password === null) {
            return toast.error('Vui lòng nhập đầy đủ thông tin')
        }

        dispatch(userLogin(user.email, user.password))
        if (error) {
            return toast.error(error.message)
        }
    }
    return (
        <div className='login-wrapper'>
            <ToastContainer />
            <div className='login-form'>
                <h1>Đăng nhập</h1>
                <form>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' name='email' id='email' onChange={onChangeInput} placeholder='Email' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' name='password' id='password' onChange={onChangeInput} placeholder='Password' required />
                    </div>
                    <div className='form-group'>
                        <button type='submit' disabled={
                            isLoading ? true : false
                        } onClick={handleSubmit}>{
                                isLoading ? 'Loading...' : 'Đăng nhập'
                            }</button>
                        <div className="form-link">
                            <Link to='/register'>Đăng ký tài khoản ?</Link>
                            <Link>Quên mặt khẩu ?</Link>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}
