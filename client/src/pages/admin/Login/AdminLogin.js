import React from 'react'
import './adminlogin.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Login } from '../../../Redux/Actions/AuthAction'
function AdminLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { isLoading } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(Login(email, password))
    }
    return (
        <div className='admin_login_container'>
            <div className="admin_login">
                <h1>Admin Login</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" value={email} name="email" required onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} name='password' required onChange={(e) => setPassword(e.target.value)} />
                    <button className="login_btn" type='submit'>
                        {isLoading ? 'Loading...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AdminLogin