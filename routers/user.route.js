const express = require('express')
const { userRegister, userLogin } = require('../controllers/user.controller')

const router = express.Router()

router.route('/register').post(userRegister)
router.route('/login').post(userLogin)

module.exports = router