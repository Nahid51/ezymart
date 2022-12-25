const express = require('express');
const router = express.Router();

const { updateUser, deleteUser, getUser, getUsers } = require('../controllers/user.controller.js');
const { verifyUser, verifyAdmin } = require('../utils/verifyToken.js');


router.route("/:id")
    .put(verifyUser, updateUser)
    .delete(verifyUser, deleteUser)
    .get(verifyUser, getUser)

router.get("/", verifyAdmin, getUsers)

module.exports = router;