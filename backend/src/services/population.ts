import { MongooseError, Document } from 'mongoose'
import PopulationModel from '../models/population'

const Population = PopulationModel

export const getAge2023 = async () => {
  const document = await Population.find()

  return document[0].data
}

export const getAgeCompare = () => {
  const compareArray = []

  for (let i = 0; i < 7; i++) {
    const randomValue = Math.floor(Math.random() * 100)
    compareArray.push(randomValue)
  }

  return compareArray
}
