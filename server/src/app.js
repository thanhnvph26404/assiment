import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'
import cors from 'cors'
import categoriesRouter from './routers/categories'
import productsRouter from './routers/products'
import upload from './routers/upload'
const app = express()
dotenv.config()
// app.use(express.json())
app.use(morgan('tiny'))
app.use(express.json({limit: '100mb'}));
app.use(express.urlencoded({     // to support URL-encoded bodies
    limit: '100mb',
    extended: true
    }));
app.use(cors())

app.use('/api', categoriesRouter)
app.use('/api', productsRouter)
app.use('/api', upload)
mongoose.connect(process.env.MONGO_URI)
export const viteNodeApp = app