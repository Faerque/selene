const express = require('express')
const { createBlog, updateBlog } = require('../controllers/blog.controller')

const router = express.Router()


router.route('/createBlog').post(createBlog)
router.route('/updateBlog/:id').patch(updateBlog)

module.exports = router