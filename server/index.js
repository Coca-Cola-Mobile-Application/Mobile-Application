require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Connect to MongoDB
require("./db/db");

const RegisterRouter = require("./router/RegisterRouter/RegisterRouter");
const LoginUserRouter = require("./router/LoginRouter/LoginUserRouter");
const WorkPermitRouter = require("./router/WorkPermitRouter/WorkPermitRouter");

 
const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json()); // To handle JSON request bodies

// Routes
app.use("/api/v1/user", RegisterRouter);
app.use("/api/v1/user", LoginUserRouter);
app.use("/api/v1/workPermit", WorkPermitRouter);


// // Basic error handling
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something went wrong!');
// });

const PORT = process.env.PORT || 3000; // Define a default port if PORT is not set in .env

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
