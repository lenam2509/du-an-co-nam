import React from 'react'
import './adminlogin.css'
import { useState } from 'react'
import axios from 'axios'
function AdminLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email === '' || password === '') {
            alert('Xin hãy nhập đầy đủ thông tin')
            return false
        }
        axios.post('https://fphone-api.vercel.app/api/auth/admin-login', { email, password })
            .then(res => {
                console.log(res.data)
                localStorage.setItem('admin', JSON.stringify(res.data))
                window.location.href = '/admin'
            }).catch(err => {
                console.log(err)
            })

        // console.log(email, password)
    }
    return (
        <div className='admin_login_container'>
            <div className="admin_login">
                <h1>Admin Login</h1>
                <form>
                    <input type="text" placeholder="Email" value={email} name="email" required onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} name='password' required onChange={(e) => setPassword(e.target.value)} />
                    <button className="login_btn" onClick={handleSubmit} type='submit'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default AdminLogin