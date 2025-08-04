const {
  addBooking,
  getBookings,
} = require("../controllers/booking.controller");
const User = require("../middleware/User");

const express = require("express");
const BookingRouter = express.Router();

BookingRouter.post("/addBooking/:id", User, addBooking);
BookingRouter.get("/myBookings", User, getBookings);

module.exports = BookingRouter;
