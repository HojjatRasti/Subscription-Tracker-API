import express from 'express'
import {PORT} from './config/env.js'

import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import connectToDatabase from './database/mongodb.js';
import errorMiddleware from './middlewares/error.middleware.js';
import cookieParser from 'cookie-parser';
import arcjetMiddleware from './middlewares/arcjet.middleware.js';
import workflowRouter from './routes/workflow.routes.js';

const app = express()

//useful built-in middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(arcjetMiddleware)

//add routes
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/subscriptions', subscriptionRouter)
app.use('/api/v1/workflows', workflowRouter)

//error handler
app.use(errorMiddleware)

app.get('/', (req, res) => {
  res.send("Welcome to the subscription tracker API👋")
})

app.listen(PORT, () => {
  console.log(`Subscription tracking API running on http://localhost:${PORT}`)

  connectToDatabase()
})

export default app;