import React from 'react'
import './register.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
            <button type='button' className='btn-code'>Gửi mã xác nhận</button>
          </div>
          <div className='form-group'>
            <label htmlFor='verifyCode'>Mã xác nhận</label>
            <input type='text' name='verifyCode' id='verifyCode' onChange={onChangeInput} placeholder='Mã xác nhận của email' required />
          </div>
          <div className='form-group'>
            <button type='submit' onClick={handleSubmit} className='btn-submit'>
              Đăng ký
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
