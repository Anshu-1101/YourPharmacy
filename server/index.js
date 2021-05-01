const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const { request, response } = require('express');
const userRoutes = require('./routes/user.js');
const doctorRoutes = require('./routes/doctors.js');
const productRoutes = require('./routes/products.js');
const authenticationRoutes = require('./routes/authentications.js');

const app = express();
dotenv.config();

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/user', userRoutes);
app.use('/doctors', doctorRoutes);
app.use('/products', productRoutes);
app.use('/authentications', authenticationRoutes);

const PORT = process.env.PORT;


mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.connect(process.env.MONGODB_CONNECTION_URL, {useNewUrlParser : true, useUnifiedTopology : true})
    .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
    .catch((error) => console.log(error.message));
