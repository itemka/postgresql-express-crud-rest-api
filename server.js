const dotenv = require('dotenv')
const express = require('express')
const bodyParser = require('body-parser')
const apiRoutes = require('./routes/api');

dotenv.config('./env')

const PORT = process.env.PORT || 3000

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.json({ info: 'Node.js, Express, and Postgres API' })
})

app.use('/api', apiRoutes);

function start() {
  try {
    app.listen(PORT, (err) => {
      if (err) {
        throw err
      }

      console.log(`> Ready on http://localhost:${PORT}`)
    })
  } catch (err) {
    console.log('Server start error: ', err)
  }
}

start()