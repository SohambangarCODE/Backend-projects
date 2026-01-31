//server started
//connect to databae

require("dotenv").config()
const conectedtoDB = require("./src/config/database")
const app = require("./src/app")



conectedtoDB();

app.listen(3000, ()=>{
    console.log("server is successfully running on port 3000!")
})