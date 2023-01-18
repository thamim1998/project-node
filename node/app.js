const express = require('express');

const app = express()

//import routes
const movieRoute = require('./routes/movies')
const cors = require('cors')

//middleware
app.use(cors())
app.use(express.json())

//middleware routes
app.use('/api', movieRoute)

//listening to the server
app.listen(3000, () => console.log("Listening on port"))