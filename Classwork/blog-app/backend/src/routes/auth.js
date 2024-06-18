const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");

const { protect } = require("../middleware/authMiddleware");

router.post("/login", (req, res) => {
  authController.login(req, res);
});

router.post("/register", (req, res) => {
  console.log(req.body);
  authController.register(req, res);
});

module.exports = router;
