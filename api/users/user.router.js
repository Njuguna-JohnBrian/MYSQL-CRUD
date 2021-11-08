const {
  createUser,
  getUserByUserId,
  getUsers,
  updateUsers,
  deleteUser,
} = require("./user.controller");

const router = require("express").Router(); 

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:id", getUserByUserId);
router.patch("/", updateUsers);
router.delete("/", deleteUser)

module.exports = router;
