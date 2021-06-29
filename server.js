const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const port = 3000
const bodyParser = require('body-parser')
const cors = require('cors')
const conn = require("./app/config/Connection")
conn();
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())
app.use(express.static('public'));
app.use(cookieParser());
require('./app/routes/UserRoutes')(app)
require('./app/routes/SpeciesRoutes')(app)
require('./app/routes/PetRoutes')(app)
require('./app/routes/AgreementRoutes')(app)
require('./app/routes/ProposalRoutes')(app)


app.listen(port, () => console.log(`Example app listening on port port!`))