import express from 'express'
import { configDotenv } from 'dotenv'
import connectToDatabase from './config/database.js'
import postRouter from './routes/postRoute.js'

configDotenv()
connectToDatabase() 

const app = express()
app.use(express.json())

app.use("/posts/", postRouter)

app.listen(3000, () =>{
    console.log('Server is running');
    
})