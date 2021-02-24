const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
const dbURL =
  "mongodb+srv://davut:davut@davutbalik.92mzn.mongodb.net/nodeBackupDb?retryWrites=true&w=majority";
mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
  
module.exports = mongoose;
