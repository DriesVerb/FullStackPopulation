import express, { Application } from 'express'
import * as population from './api/handlers/population'

export const app: Application = express()

const publicRouter = express.Router()
publicRouter.get('/population/age/2023', population.getAge2023Handler)
publicRouter.get('/population/age/compare', population.getAgeCompareHandler)

app.use('/public', publicRouter)
