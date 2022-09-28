const express = require("express");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const connectDB = require("./config/db");
const colors = require("colors"); // this package using only for development console coloring text.
const { errorHandler, notFound } = require("./middleware/errorMiddleware");
const userRoutes = require("./routes/userRoutes");
const reviewRoutes = require("./routes/reviews.Route");
const featuredRoutes = require("./routes/featuresItem.Route");
const newsRoutes = require("./routes/news.Route");
const orderRoutes = require("./routes/order.Route");
const contactRoutes = require("./routes/contact.Route");
const liveSupportRoutes = require("./routes/liveSupportChat.Route");
const paymentRoutes = require("./routes/payment.Route");
const app = express();
app.use(cors());
dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// connect to mongodb database
connectDB();

app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      "Everything okay. I am from  Interior Exterior Design System application."
    );
});
// user api
app.use("/api/user", userRoutes);
// review api
app.use("/api/review", reviewRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/featured-item", featuredRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/live-support", liveSupportRoutes);
app.use("/api/payment", paymentRoutes);

// error handling
app.use(notFound);
app.use(errorHandler);
module.exports = app;
