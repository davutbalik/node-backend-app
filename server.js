const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./app/config/db.config");
const app = express();
const port = 8000;
const router = require("./app/routes/db.routes");
const staffRouter = require("./app/routes/staff.routes");
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
let corsOptions = {
  origin: process.env.ORIGIN || "http://localhost:3000", //This is for frontend
  // credentials: true,
  // optionsSuccessStatus: 200, // For legacy browser support
};
app.use(cors(corsOptions));
app.use("/api/customers", router);
app.use("/api/staffs", staffRouter);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on ${port} port!`));