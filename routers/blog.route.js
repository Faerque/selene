const express = require('express')
const { createBlog, updateBlog, allBlog } = require('../controllers/blog.controller')

const router = express.Router()


router.route('/createBlog').post(createBlog)
router.route('/updateBlog/:id').patch(updateBlog)
router.route('/allBlogs').get(allBlog)

module.exports = router