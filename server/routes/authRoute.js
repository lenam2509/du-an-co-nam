const { sendVerifyUser, register, login, logout, loginAdmin } = require('../controllers/authController')

const router = require('express').Router()

router.post('/verify', sendVerifyUser)

router.post('/register', register)

router.post('/login', login)

router.post('/admin-login', loginAdmin)

router.get('/logout', logout)


module.exports = router