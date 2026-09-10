const express = require("express");
const cors = require("cors");
require("dotenv").config();

const pool = require("./config/db");

const healthRoutes = require("./routes/healthRoutes");
const movieRoutes = require("./routes/movieRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test Database Connection
pool.connect()
  .then((client) => {
    console.log("✅ Connected to PostgreSQL");
    client.release();
  })
  .catch((err) => {
    console.error("❌ Database Connection Failed");
    console.error(err.message);
  });

// Home Route
app.get("/", (req, res) => {
  res.json({
    message: "🎬 Movie Ticket Booking Backend is running",
  });
});

// Routes
app.use("/health", healthRoutes);
app.use("/movies", movieRoutes);
app.use("/bookings", bookingRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});