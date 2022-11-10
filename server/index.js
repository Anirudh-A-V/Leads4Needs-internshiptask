const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const routes = require('./routes/routes');

const app = express();

app.use(express.json());

app.use('/api', routes)

const corsOptions ={
    origin:'https://avdev-todo-list.vercel.app/', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }

app.use(cors(corsOptions));

dotenv.config();

const CONNECTION_URL = process.env.MONGO_CONNECTION_URL;


const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// require('dotenv').config()
// const express = require('express');
// const app = express();
// const mongoose = require('mongoose')
// const cors = require('cors');

// app.use(cors({origin: '*'}));
// mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true })
// const db = mongoose.connection
// db.on('error', (error) => console.log(error))
// db.once('open', () => console.log("Connected to Database"))

// app.use(express.json())

// const routes = require('../routes/routes')
// app.use('/api', routes)

// var port = process.env.PORT || '3000';
// app.set('port', port);

// app.listen(port, () => console.log('Server Started'))

// Export the Express API
module.exports = app;