//start server
//connect database
const app = require("./src/app");
const mongoose = require("mongoose");

function Connectedtodb() {
  mongoose
    .connect(
      "mongodb+srv://Soham:GQLnE2YUgj2ElGAW@cluster0.4mqjhvm.mongodb.net/Day-6",
    )
    .then(() => {
      console.log("Connected to Database");
    });
}
Connectedtodb()

app.listen(3000, () => {
  console.log("server is running on port 300!");
});
