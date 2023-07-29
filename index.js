const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

const PORT = 5000;

const app = express();

const bodyParser = require('body-parser');
const connectDB = require('./utils/dbConnect');
const UserRouter = require('./routers/user.route')
const BlogRouter = require('./routers/blog.route')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use(express.json());
dotenv.config()
connectDB()

app.get('/', (req, res) => {
    res.send('Server is running')
})

app.use('/api/v1/users', UserRouter)
app.use('/api/v1/blogs', BlogRouter)



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})