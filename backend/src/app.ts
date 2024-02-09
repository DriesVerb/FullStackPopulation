import express, { Application } from 'express'
import dotenv from 'dotenv'

import cors from 'cors'
import * as population from './api/handlers/population'
import { frontendPort } from './utils/dotenv'

dotenv.config()

export const app: Application = express()

const publicRouter = express.Router()
publicRouter.get('/population/age/2023', population.getAge2023Handler)
publicRouter.get('/population/age/compare', population.getAgeCompareHandler)

app.use(
  cors({
    origin: [frontendPort],
  })
)
app.use('/public', publicRouter)
