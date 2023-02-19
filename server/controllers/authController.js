const User = require('../models/authModel')
const Verify = require('../models/verifyModel')
const asyncHandler = require('express-async-handler')
const { generateRefreshToken, generateToken } = require('../utils/jwt')
const { generateVerifyCode, isVerifyEmail } = require('../middlewares/verify')
const { sendEmail, htmlSignupAccount } = require('../utils/nodemailer')

exports.sendVerifyUser = asyncHandler(async (req, res) => {
    const { email } = req.body
    const findUser = await User.findOne({ email })
    if (findUser) throw new Error('Gửi mã thất bại người dùng đã tồn tại')
    const verifyCode = generateVerifyCode(6)
    const mail = {
        to: email,
        subject: 'Mã xác thực tạo tài khoản',
        html: htmlSignupAccount(verifyCode)
    }
    await Verify.findOneAndDelete({ email })
    await Verify.create({
        code: verifyCode,
        email,
        dateCreated: Date.now()
    })
    const result = await sendEmail(mail)
    if (result) return res.status(200).json({ message: 'success' })
})

exports.register = asyncHandler(async (req, res) => {
    try {
        const { verifyCode, firstname, lastname, email, mobile, password, confirmPassword, address } = req.body
        if (!verifyCode || !firstname || !lastname || !email || !mobile || !password || !confirmPassword || !address) throw new Error('Vui lòng nhập đầy đủ thông tin!')
        const findUser = await User.findOne({ email })
        if (findUser) throw new Error('Email đã tồn tại')
        if(confirmPassword !== password) throw new Error('Mật khẩu nhập lại không khớp')
        const isVerify = await isVerifyEmail(email, verifyCode)
        if (!isVerify) return res.status(400).json({ message: 'Mã xác nhận không hợp lệ !' })
        const newUser = await User.create({ firstname, lastname, email, mobile, password, confirmPassword, address })
        if (newUser) {
            await Verify.deleteOne({ email })
        }
        res.json(newUser)
    } catch (error) {
        return res.status(400).json({
            message: 'Đăng ký người dùng thất bại.',
            error
        })
    }
})

exports.login = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const findUser = await User.findOne({ email })
    if (findUser && (await findUser.isPasswordMatched(password))) {
        const refreshToken = await generateRefreshToken(findUser?._id)
        await User.findByIdAndUpdate(findUser?._id, { refreshToken: refreshToken }, { new: true })
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 72 * 60 * 60 * 1000,
        })
        res.json({
            _id: findUser?._id,
            firstname: findUser?.firstname,
            lastname: findUser?.lastname,
            email: findUser?.email,
            mobile: findUser?.mobile,
            token: generateToken(findUser?._id),
        })
    } else {
        throw new Error('Email hoặc mật khẩu không khớp!')
    }
})

exports.loginAdmin = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const findAdmin = await User.findOne({ email })
    if (findAdmin.role !== "Admin") throw new Error("Yêu cầu quyền Admin thì mới có thể truy cập")
    if (findAdmin && (await findAdmin.isPasswordMatched(password))) {
        const refreshToken = await generateRefreshToken(findAdmin?._id)
        await User.findByIdAndUpdate(findAdmin?._id, { refreshToken: refreshToken }, { new: true })
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 72 * 60 * 60 * 1000,
        })
        res.json({
            _id: findAdmin?._id,
            firstname: findAdmin?.firstname,
            lastname: findAdmin?.lastname,
            email: findAdmin?.email,
            mobile: findAdmin?.mobile,
            token: generateToken(findAdmin?._id),
        })
    } else {
        throw new Error('Email hoặc mật khẩu không đúng!')
    }
})

exports.logout = asyncHandler(async (req, res) => {
    const cookie = req.cookies
    if (!cookie?.refreshToken) throw new Error('Không có Refresh Token trong Cookies này')
    const refreshToken = cookie.refreshToken
    const user = await User.findOne({ refreshToken })
    if (!user) {
      res.clearCookie('refreshToken', {
        httpOnly: true,
        secure: true,
      })
      return res.sendStatus(204) // forbidden
    }
    await User.findOneAndUpdate(refreshToken, {
      refreshToken: '',
    })
    res.clearCookie('refreshToken', {
      httpOnly: true,
      secure: true,
    })
    res.sendStatus(204) // forbidden
})