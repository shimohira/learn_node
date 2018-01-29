import express from 'express'

import { getListing } from 'controller/listingController'

const app = express.Router()
app.get('/', (req, res, err) => {
    res.send("this homepage!")
})
export default app
