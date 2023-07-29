const mongoose = require = require('mongoose')


const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: ""
    },
    createdBy: {
        type: String,
        default: ""
    },
    createdById: {
        type: String,
        default: ""
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

const Blog = mongoose.model('BlogCollection', blogSchema)

module.exports = Blog