import { app } from './app'
import { db } from './database/mongo'

const port = process.env.PORT || 8000

db()

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`)
})
