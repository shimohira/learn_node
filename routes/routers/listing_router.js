import express from 'express'

import { getListing } from 'controller/listingController'

const app = express.Router()
app.get('/', getListing)
export default app
