const hostLocation = require('./../models/locationModel');
const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.alerts = (req, res, next) => {
  const { alert } = req.query;
  if (alert === 'booking')
    res.locals.alert =
      "Your booking was successful! Please check your email for a confirmation. If your booking doesn't show up here immediatly, please come back later.";
  next();
};

exports.getOverview = catchAsync(async (req, res, next) => {
  // 1) Get tour data from collection
  const tours = await hostLocation.find();
  console.log(tours);
  // 2) Build template
  // 3) Render that template using tour data from 1)
  res.status(200).render('home', {
    title: 'All Tours',
    tours,
  });
});
