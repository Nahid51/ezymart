const express = require('express');
const router = express.Router();

const { verifyAdmin, verifyUser } = require('../utils/verifyToken.js');


router.route("/:id")
    .post(verifyAdmin, updateProduct)
    .post(verifyAdmin, deleteProduct)
    .post(getProduct)

router.put("/review", verifyUser, reviewProduct)

router.post("/add", verifyAdmin, addProduct)

router.post("/", getProducts)

module.exports = router;