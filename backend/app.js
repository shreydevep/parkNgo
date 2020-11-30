const path = require('path');
const express = require('express');
const { json } = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const locationRouter = require('./routes/locationRoutes.js');
const userRouter = require('./routes/userRoutes.js');
const viewRouter = require('./routes/viewRoutes.js');

const app = express();

app.set('view engine', 'pug');

app.set('views', path.join(__dirname, 'views'));
app.use(
  cors({
    origin: 'http://127.0.0.1:3000',
    credentials: true,
  })
);

//app.options('*', cors());

app.use(express.static(path.join(__dirname, 'public')));
//MiddleWares
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

app.use((req, res, next) => {
  console.log(req.cookies);
  next();
});

//app.get('/api/v1/Locations', getAllLocations);
//app.get('/api/v1/Locations/:id', getLocation);
//app.post('/api/v1/Locations', createLocation);
//app.patch('/api/v1/Locations/:id', updateLocation);
//app.delete('/api/v1/Locations/:id', deleteLocation);
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.cookies);
  next();
});
app.use('/', viewRouter);

app.use('/api/v1/Locations', locationRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
