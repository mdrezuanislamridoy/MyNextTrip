const config = require("../../src/config");
const Booking = require("../models/booking.model");
const axios = require("axios");
const qs = require("qs");

const payBill = async (req, res) => {
  try {
    const user = req.user.id;
    const bookingId = req.params.id;

    const booking = await Booking.findOne({
      _id: bookingId,
      travelerId: user,
    }).populate("travelerId");

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    const transactionId = "txn_" + Date.now();

    const data = {
      store_id: config.store_id,
      store_passwd: config.store_passwd,
      total_amount: booking.totalPrice,
      currency: "BDT",
      tran_id: transactionId,
      success_url: `http://localhost:5050/api/payment/success`,
      fail_url: "http://localhost:5050/api/payment/fail",
      cancel_url: "http://localhost:5050/api/payment/cancel",
      cus_name: booking.travelerId.name,
      cus_email: booking.travelerId.email,
      product_name: booking.tourName,
      product_category: booking.tourLocation,
      product_profile: "general",
    };

    const SSLCommerz_API =
      "https://sandbox.sslcommerz.com/gwprocess/v3/api.php";

    const response = await axios.post(SSLCommerz_API, qs.stringify(data), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    res.json({ url: response.data.GatewayPageURL });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

const success = async (req, res) => {
  res.send("Payment Successful");
};
const fail = (req, res) => {
  res.send("Payment Failed");
};
const cancel = (req, res) => {
  res.send("Payment Cancelled");
};
module.exports = {
  payBill,
  success,
  fail,
  cancel,
};
