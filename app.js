
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

const movieRouter = require('./routes/movie')
app.use('/movies', movieRouter)

const reviewRouter = require('./routes/review')
app.use('/reviews', reviewRouter)

const authRouter = require('./routes/auth')
app.use('/auth', authRouter)

app.listen(port,()=>{
  console.log(`running on port ${port}`)
})