const User = require('../models/authModel')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

exports.authMiddleware = asyncHandler(async (req, res, next) => {
    let token
    if (req?.headers?.authorization?.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1]
        try {
            if (token) {
                const decoded = jwt.verify(token, process.env.JWT_SECRET)
                const user = await User.findById(decoded.id)
                req.user = user
                next()
            }
        } catch (error) {
            throw new Error("Token da het han, vui long dang nhap lai")
        }
    } else {
        throw new Error("Ban chua truyen token vao headers")
    }
})

exports.isAdmin = asyncHandler(async (req, res, next) => {
    const { email } = req.user
    const adminUser = await User.findOne({ email })
    if (adminUser.role !== 'Admin') {
        throw new Error("Ban khong phai la quan tri vien")
    } else {
        next()
    }
})