import mongoose from 'mongoose'
const Schema = mongoose.Schema

const populationSchema = new Schema({
  data: [Number],
})

const PopulationModel = mongoose.model('population', populationSchema)

export default PopulationModel
