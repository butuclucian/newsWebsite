import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import articleRouter from './routes/articleRoute.js'

// app config
const app = express()
const port = process.env.PORT || 5000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())

// api endpoints
app.use('/api/user',userRouter)
app.use('/api/article',articleRouter)

app.get('/',(req,res)=>{
    res.send("api working...")
})

app.listen(port,()=>console.log('server started on PORT : '+ port))