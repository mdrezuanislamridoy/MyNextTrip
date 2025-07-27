const express = require("express");
const TravelRouter = express.Router();

const {
  addTravelImages,
  addTravel,
  getTravels,
  getTravel,
} = require("../controllers/travel.controller");
const User = require("../middleware/User");
const upload = require("../utils/multer");

TravelRouter.post("/addTravel", User, addTravel);
TravelRouter.post("/addImage", upload.single("travelImage"), addTravelImages);
TravelRouter.get("/getTravels", getTravels);
TravelRouter.get("/getTravel", getTravel);

module.exports = TravelRouter;
