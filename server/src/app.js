import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()
dotenv.config()
app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())


mongoose.connect(process.env.MONGO_URI)
export const viteNodeApp = app