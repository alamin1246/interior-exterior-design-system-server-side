const express = require("express");
const { createPaymentIntent } = require("../controllers/payment.Controllers");


const router = express.Router();




router.post("/create-payment-intent",createPaymentIntent);


module.exports = router;
