const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const routes = require('./routes/routes');

const app = express();

app.use(express.json());
app.use('/api', routes)

dotenv.config();

const CONNECTION_URL = process.env.MONGO_CONNECTION_URL;


const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

