import dotenv from 'dotenv'
import app from './app.js'

dotenv.config()

const PORT = process.env.REACT_APP_SERVER_PORT || 5555

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});