import { RequestHandler } from 'express'
import { getAge2023, getAgeCompare } from '../../services/population'

export const getAge2023Handler: RequestHandler = async (_req, res) => {
  const result = getAge2023()
  res.send(result)
}

export const getAgeCompareHandler: RequestHandler = async (_req, res) => {
  const result = getAgeCompare()
  res.send(result)
}
