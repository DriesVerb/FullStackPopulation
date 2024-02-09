import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { dbCluster, dbPassword, dbUser } from '../utils/dotenv'

dotenv.config()

const uri = `mongodb+srv://${dbUser}:${dbPassword}@${dbCluster}`

export const db = () =>
  mongoose
    .connect(uri, { retryWrites: true, w: 'majority' })
    .then(() => {
      console.log('connected to db')
    })
    .catch((error) => {
      console.log('unalbe to connect')
      console.log(error)
    })
