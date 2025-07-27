const Travel = require("../models/travel.model");
const fs = require("fs");
const cloud = require("../utils/cloudinary");
const User = require("../models/user.model");
const createError = require("http-errors");

const addTravel = async (req, res, next) => {
  const { title, description, travelPrice } = req.body;

  if (!title || !description || !travelPrice) {
    return next(createError(400, "Something is missing"));
  }
  console.log(title, description, travelPrice);

  try {
    const agencyId = req.userId;

    const agency = await User.findById(agencyId);

    if (agency.role !== "agency") {
      return next(createError(400, "You're not allowed"));
    }

    try {
      const travel = await new Travel({
        agencyId,
        title,
        description,
        travelPrice,
      });

      console.log(travel);
      await travel.save();
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    return next(createError(500, error.message));
  }
};

const addTravelImages = async (req, res, next) => {
  try {
    const travelId = req.params.id;
    const travel = await Travel.findById({ _id: travelId });
    if (!travel) {
      return next(createError(400, "travel not found"));
    }
    const result = await cloud.uploader.upload(req.file.path, {
      folder: "travelImage",
    });

    fs.unlinkSync(req.file.path);

    travel.images.push(result.secure_url);
    await travel.save();
  } catch (error) {
    return next(createError(500, error.message));
  }
};

const getTravels = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const travels = await Travel.find().skip(skip).limit(limit);
    res.status(200).json({ travels, page });
  } catch (error) {
    next(error);
  }
};

const getTravel = async (req, res) => {
  try {
    const travelId = req.params.id;

    const travel = await Travel.findById(travelId);

    if (!travel) {
      return next(createError(400, "Travel Not Found"));
    }
    res.status(200).json({ travel });
  } catch (error) {
    return next(createError(500, error.message));
  }
};

const getAgencyTravels = async (req, res, next) => {
  try {
    const agencyId = req.userId;
    const travels = await Travel.find({ agencyId });
    res.status(200).json({ travels });
  } catch (error) {
    next(error);
  }
};

const searchTravels = async (req, res, next) => {
  try {
    const { q } = req.query;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const result = await Travel.find({
      $or: [
        { title: { $regex: q, $options: "i" } },
        { description: { $regex: q, $options: "i" } },
      ],
    })
      .skip(skip)
      .limit(limit);

    if (!result) return next(createError(404, "No Search result found"));
    res.status(200).json({ result });
  } catch (error) {
    next(error);
  }
};

const updateTravel = async (req, res, next) => {
  try {
    const { title, description, travelPrice } = req.body;
    const travelId = req.params.id;
    const updated = await Travel.findByIdAndUpdate(
      travelId,
      { title, description, travelPrice },
      { new: true }
    );
    if (!updated) return next(createError(404, "Travel not found"));
    res.status(200).json({ message: "Travel updated", travel: updated });
  } catch (error) {
    next(error);
  }
};

const deleteTravel = async (req, res, next) => {
  try {
    const travel = await Travel.findByIdAndDelete(req.params.id);
    if (!travel) return next(createError(404, "Travel not found"));
    res.status(200).json({ message: "Travel deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addTravel,
  addTravelImages,
  getTravels,
  getTravel,
  updateTravel,
  deleteTravel,
};
