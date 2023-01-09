const User = require('../models/authModel')
const asyncHandler = require('express-async-handler')
const { generateRefreshToken, generateToken } = require('../utils/jwt')

exports.register = asyncHandler(async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const confirmPassword = req.body.confirmPassword
    const findUser = await User.findOne({ email })
    if (findUser) throw new Error("Email da ton tai")
    
    if(confirmPassword !== password) throw new Error("Mat khau nhap lai khong khop")
    
    const newUser = await User.create(req.body)
    res.json(newUser)
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
        throw new Error('Email hoac mat khau khong dung!')
    }
})
