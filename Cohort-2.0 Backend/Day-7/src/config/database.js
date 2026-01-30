const mongoose = require("mongoose")



function conectedtoDB(){
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("connected to database");
        
    })
}

module.exports = conectedtoDB