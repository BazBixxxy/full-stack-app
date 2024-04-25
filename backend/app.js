const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();

const routes = require("./routes/taskRoute");

const cors = require("cors");

const app = express();
const PORT = process.env.PORT | 9000;

app.use(express.json());
app.use(cors());
app.use("/api", routes);

mongoose
  .connect(
    `mongodb+srv://BazBixxxy:Kicka$$500@cluster0.i0wfh3z.mongodb.net/FULL_STACK_APP?retryWrites=true&w=majority&appName=Cluster0`
    // process.env.MONGO_URI
  )
  .then(() => {
    console.log("Connected to the database");
    app.listen(9000, () => {
      console.log("server running on port 9000");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });

app.get("/", (req, res) => {
  res.send("My full stack app");
});
