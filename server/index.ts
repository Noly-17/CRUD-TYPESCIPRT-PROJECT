const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const authRoute = require("./routers/auth");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;

//middlewares
app.use(cors());
app.use(express.json());

//mongodb connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection is established");
});

//routes
app.use("/api/auth", authRoute);

app.listen(port, () => {
  console.log("Server Running on port: ", port);
});
