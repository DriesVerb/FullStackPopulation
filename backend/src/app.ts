import express, { Application } from 'express'
import { getPopulationAge } from './api/handlers/population'

export const app: Application = express()

const publicRouter = express.Router()
publicRouter.get('/population/age/2023', getPopulationAge)

app.use('/public', publicRouter)
