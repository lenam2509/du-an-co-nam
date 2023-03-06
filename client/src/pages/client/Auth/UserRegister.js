import React from 'react'
import './register.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthApi from '../../../Api/Authapi';
import axios from 'axios'
export default function UserRegister() {
  const [user, setUser] = React.useState({
    firstname: null,
    lastname: null,
    mobile: null,
    password: null,
    confirmPassword: null,
    address: null,
    email: null,
    verifyCode: null,
  })
  const [Loading, setLoading] = React.useState(false)
  const onChangeInput = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    // validate 
    if (
      user.firstname === null ||
      user.lastname === null ||
      user.mobile === null ||
      user.password === null ||
      user.confirmPassword === null ||
      user.address === null ||
      user.email === null ||
      user.verifyCode === null
    ) {
      return toast.error('Vui lòng nhập đầy đủ thông tin')
    }
    if (user.password !== user.confirmPassword) {
      return toast.error('Mật khẩu không khớp')
    }
    try {
      setLoading(true)
      const res = await AuthApi.register(user)
      console.log(res)
      toast.success('Đăng ký thành công')
      window.location.href = '/login'
    } catch (error) {
      toast.error(error.response.data.msg)
    }
  }
  const handleVerify = async (e) => {
    e.preventDefault()
    if (user.email === null) {
      return toast.error('Vui lòng nhập email')
    } else if (user.email.indexOf('@') === -1) {
      return toast.error('Email không hợp lệ')
    } else {
      console.log(user.email)
    }
    try {
      setLoading(true)
      const res = await axios.post('https://fphone-api.vercel.app/api/auth/verify', { email: user.email })
      console.log(res)
      toast.success('Gửi mã xác nhận thành công')
      setLoading(false)
    } catch (error) {
      toast.error(error.response.data.message)
      setLoading(false)
    }
  }
  return (
    <div className='register-wrapper'>
      <div className='register-form'>
        <h1>Đăng ký</h1>
        <form>
          <ToastContainer />
          <div className='form-group'>
            <label htmlFor='firstname'>Họ</label>
            <input type='text' name='firstname' id='firstname' placeholder='Họ' onChange={onChangeInput} required />
          </div>
          <div className='form-group'>
            <label htmlFor='lastname'>Tên</label>
            <input type='text' name='lastname' id='lastname' placeholder='Tên' onChange={onChangeInput} required />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Số điện thoại</label>
            <input type="number" name="mobile" id="mobile" placeholder="Số điện thoại" onChange={onChangeInput} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mật khẩu</label>
            <input type="password" name="password" id="password" placeholder="Mật khẩu" onChange={onChangeInput} required />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Nhập lại mật khẩu</label>
            <input type="password" name="confirmPassword" id="confirmPassword" onChange={onChangeInput} placeholder="Nhập lại mật khẩu" required />
          </div>
          <div className="form-group">
            <label htmlFor="address">Địa chỉ</label>
            <input type="text" name="address" id="address" onChange={onChangeInput} placeholder="Địa chỉ" required />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' onChange={onChangeInput} placeholder='Email' required />
            <button type='button' onClick={handleVerify} className='btn-code'>{
              Loading ? 'Loading...' : 'Gửi mã xác nhận'
            }</button>
          </div>
          <div className='form-group'>
            <label htmlFor='verifyCode'>Mã xác nhận</label>
            <input type='text' name='verifyCode' id='verifyCode' onChange={onChangeInput} placeholder='Mã xác nhận của email' required />
          </div>
          <div className='form-group'>
            <button type='submit' onClick={handleSubmit} className='btn-submit'>
              {
                Loading ? 'Loading...' : 'Đăng ký'
              }
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
