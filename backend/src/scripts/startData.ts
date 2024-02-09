import PopulationModel from '../models/population'

const Population = PopulationModel

export const getAge2023 = async () => {
  try {
    const newData = new Population({ data: [19, 56, 47, 93, 20, 16, 78] })
    await newData.save()
  } catch (error) {
    console.log(error)
  }
}
