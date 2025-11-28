import mongoose from "mongoose"
import User from '../models/user.model.js';
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import {JWT_EXPIRES_IN, JWT_SECRET} from './../config/env.js'

export const signUp = async (req, res, next) => {
  const session = await mongoose.startSession()
  session.startTransaction()

  try {
    const { name, email, password } = req.body;

    //check the user existence
    const existUser = await User.findOne({email})

    if(existUser) {
      const error = new Error('User already exist')
      error.statusCode = 409
      throw error
    }
    //if user not exist
    //Hash the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    //create user
    const newUsers = await User.create([{name, email, password: hashedPassword}],{session})
    //create user token with the following Id
    const token = jwt.sign({userId: newUsers[0]._id}, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN})

    session.commitTransaction()
    session.endSession()

    res.status(201).json({
      succuss: true,
      message: 'User created successfully', 
      data: {
        token,
        user: newUsers[0],
      },
    })
    
  } catch (error) {
    await session.abortTransaction()
    session.endSession()
    next(error)
  }
}

export const signIn = async (req, res, next) => {
  try {
    const {email, password} = req.body

    const user = await User.findOne({email})

    if(!user) {
      const error = new Error('User not found')
      error.statusCode = 404
      throw error
    }

    //check the validation of password
    const isPasswordValid = await bcrypt.compare(password, user.password)

    if(!isPasswordValid){
      const error = new Error('Password is invalid')
      error.statusCode = 401
      throw error
    }

    const token = jwt.sign({userId: user._id}, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN})

    res.status(200).json({
      succuss: true,
      message: 'user logged in successfully',
      data: {
        token,
        user,
      }
    })
    
  } catch (error) {
    next(error)
  }
}

export const signOut = async (req, res) => {}