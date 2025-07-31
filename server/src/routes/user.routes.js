const {
  createAdmin,
  approveAgency,
  rejectAgency,
  getPendingAgencies,
} = require("../controllers/admin.controller");
const {
  sendCode,
  createUser,
  login,
  profile,
  updateProfile,
  updateProfilePicture,
  forgetPasswordCode,
  forgetPassword,
  updatePassword,
  logout,
  updateCoverPicture,
} = require("../controllers/user.controller");

const userCheck = require("../middleware/User");
const upload = require("../utils/multer");
const router = require("express").Router();

router.post("/sendCode", sendCode);
router.post("/register", createUser);
router.post("/login", login);
router.get("/profile", userCheck, profile);
router.put("/updateProfile", userCheck, updateProfile);
router.put("/updatePassword", userCheck, updatePassword);
router.put(
  "/updateProfilePicture",
  userCheck,
  upload.single("profilePic"),
  updateProfilePicture
);
router.put(
  "/updateCoverPicture",
  userCheck,
  upload.single("coverPic"),
  updateCoverPicture
);
router.post("/sendForgetPassCode", forgetPasswordCode);
router.post("/forgetPassword", forgetPassword);
router.post("/logout", userCheck, logout);

router.post("/admin/rr/rsc-create-bro-admin", createAdmin);
router.get("/getPendingAgencies", userCheck, getPendingAgencies);
router.post("/approveAgency/:agencyId", userCheck, approveAgency);
router.post("/rejectAgency/:agencyId", userCheck, rejectAgency);

module.exports = router;
