import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import bodyParser from 'body-parser'
import { register } from './src/api/register.js'

const app = express()
const jsonParser = bodyParser.json()

app.use(cors())

app.post('/register', jsonParser, register)

const port = process.env.PORT || 9090

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
})