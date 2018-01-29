import express from 'express'

import { promiseAsync } from 'controller/testController'

const app = express.Router()
app.get('/', promiseAsync)
export default app
