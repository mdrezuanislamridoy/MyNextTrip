const Booking = require("../models/booking.model");
const Travel = require("../models/travel.model");

const addBooking = async (req, res) => {
  try {
    const travelId = req.params.id;
    const userId = req.userId;
    let { tourLocation, numberOfTraveler, tourDate } = req.body;

    if (!tourLocation || !tourDate) {
      return res.status(404).json({ message: "Something is missing" });
    }

    if (!numberOfTraveler) {
      numberOfTraveler = 1;
    }
    const travel = await Travel.findById({ _id: travelId });

    console.log(travel);

    if (!travel) {
      return res.status(401).json({ message: "Travel id not found" });
    }

    const booking = await Booking.findOne({
      travelerId: userId,
      travelId,
    });

    if (booking) {
      return res.status(400).json({ message: "Already Booked" });
    }

    const newBooking = await new Booking({
      travelId,
      travelerId: userId,
      tourName: travel.title,
      tourLocation,
      tourDate,
      numberOfTraveler,
      totalPrice: travel.travelPrice * numberOfTraveler,
    });

    await newBooking.save();
    res
      .status(200)
      .json({ message: "Booking success, pay for confirm", newBooking });
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
  }
};

const getBookings = async (req, res) => {
  try {
    const userId = req.userId;

    const myBookings = await Booking.find({ travelerId: userId });

    if (!myBookings) {
      return res.status(404).json({ message: "No Bookings are available" });
    }

    res.status(200).json({ myBookings });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

module.exports = {
  addBooking,

  getBookings,
};
