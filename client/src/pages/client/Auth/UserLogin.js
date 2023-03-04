import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
export default function UserLogin() {
    return (
        <div className='login-wrapper'>
            <div className='login-form'>
                <h1>Đăng nhập</h1>
                <form>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' name='email' id='email' placeholder='Email' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' name='password' id='password' placeholder='Password' required />
                    </div>
                    <div className='form-group'>
                        <button type='submit'>Log In</button>
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
