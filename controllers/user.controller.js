const User = require('../models/user.model')
const asyncHandler = require('express-async-handler');

const generateToken = require('../utils/generateToken')



const userRegister = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const userExist = await User.findOne({ email })

    if (userExist) {
        res.status(400).json('User already exists')
        return
    }

    const user = await User.create({
        name,
        email,
        password

    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            picture: user.picture,
            isAdmin: user.isAdmin,
            isUser: user.isUser,
            gender: user.gender,
            blog: user.blog,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})


const userLogin = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
        res.json({
            message: "Login Successful",
            _id: user._id,
            name: user.name,
            email: user.email,
            picture: user.picture,
            isAdmin: user.isAdmin,
            isUser: user.isUser,
            token: generateToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

module.exports = {
    userRegister, userLogin
}