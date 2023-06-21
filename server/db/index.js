import mongoose from 'mongoose'

export default async (_nitroApp) => {
  try {
    mongoose.set('strictQuery', true) // 嚴格模式
    await mongoose.connect(
      'mongodb+srv://jjuice258tw:pHec57miHcZ7sU0X@cluster0.8ot9van.mongodb.net/'
    )
    console.log('連接 MongoDB')
  } catch (e) {
    console.error('Error MongoDB =>', e)
  }
}
