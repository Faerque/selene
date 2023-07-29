const Blog = require('../models/blog.model')
const asyncHandler = require('express-async-handler');



const createBlog = asyncHandler(async (req, res) => {

    const { title, content, createdBy, image, createdById } = req.body;

    const blog = await Blog.create({
        title,
        content,
        createdBy,
        createdById,
        image
    })

    if (blog) {
        res.status(201).json({
            message: "Blog created successfully",
            _id: blog._id,
            title: blog.title,
            content: blog.content,
            image: blog.image,
            createdBy: blog.createdBy,
            createdById: blog.createdById
        })
    } else {
        res.status(400)
        throw new Error('Invalid blog data')
    }
})


const updateBlog = asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id)

    if (blog) {
        blog.title = req.body.title || blog.title
        blog.content = req.body.content || blog.content
        blog.image = req.body.image || blog.image
        blog.createdBy = req.body.createdBy || blog.createdBy
        blog.createdById = req.body.createdById || blog.createdById

        const updatedBlog = await blog.save()

        res.json({
            message: "Blog updated successfully",
            _id: updatedBlog._id,
            title: updatedBlog.title,
            content: updatedBlog.content,
            image: updatedBlog.image,
            createdBy: updatedBlog.createdBy,
            createdById: updatedBlog.createdById
        })
    } else {
        res.status(404)
        throw new Error('Blog not found')
    }
})


module.exports = { createBlog, updateBlog }