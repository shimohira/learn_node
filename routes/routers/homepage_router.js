import express from 'express'

const app = express.Router()
app.get('/', (req, res, err) => {
  res.send('this homepage!')
})
export default app
