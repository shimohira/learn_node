import express from 'express'

import { promiseAsync, IIFE } from 'controller/testController'

const app = express.Router()
app.get('/', promiseAsync)
app.get('/promise', promiseAsync)
app.get('/IIFE', IIFE)
export default app
