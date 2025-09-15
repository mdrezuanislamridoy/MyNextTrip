const {
  addBooking,
  getBookings,
  getAgencyBookings,
  updateBooking,
  getBooking,
} = require("../controllers/booking.controller");
const User = require("../middleware/User");
const validation = require("../middleware/validation");

const express = require("express");
const { addBookingSchema } = require("../validation/booking.validate");
const BookingRouter = express.Router();

BookingRouter.post(
  "/addBooking/:id",
  User,
  validation(addBookingSchema),
  addBooking
);
BookingRouter.get("/myBookings", User, getBookings);
BookingRouter.get("/getAgencyBookings", User, getAgencyBookings);
BookingRouter.put("/updateBooking/:id", User, updateBooking);
BookingRouter.get("/getBooking/:id", User, getBooking);

module.exports = BookingRouter;
