const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// parse request of content-type application/json
app.use(bodyParser.json())

// parse reqursts of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))

// simple route
app.get ('/', (req, res) => {
  res.json({message: "Welcome to bzkoder application."})
})




// Customer routes
require('./app/routes/customer.routes.js')(app)

const PORT = process.env.PORT || 3000
// listen for requests
app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`))