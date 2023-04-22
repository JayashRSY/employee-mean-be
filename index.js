const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')

const mongoose = require('./db')
const routes =  require('./routes/routes')

const app = express();

app.use(bodyParser.json())
app.use(cors({origin:'http://localhost:4200'}))

port = process.env.PORT || 3000
app.listen(port, () => console.log('Server running at port:'+port))

app.use('/employees', routes)


