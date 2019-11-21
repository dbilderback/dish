const express = require("express");
const connectDB = require("./config/db");
const app = express();

//Connect DB
connectDB();
if (process.env.NODE_ENV === "test") {
  connectDB.unref();
}

// Init Middleware
app.use(
  express.json({
    extended: false,
  })
);

//Define Routes
app.use("/api/user", require("./routes/api/user"));
app.use("/api/auth", require("./routes/api/auth"));

const PORT = process.env.PORT || 5000;
if (require.main === module) {
  app.listen(PORT, () => console.log("Server Started Port " + PORT));
}

exports = module.exports = app;
