const mongoose = require("mongoose")

const DB = process.env.DB
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("connection start")).catch((error) => console.log(error.message));




// "fname": "vishu",
// "lname": "kumbhar",
// "email": "vishggu@gmail.com",
// "mobile": "5624514",
// "address": "pune",
// "country": "ind",
// "state": "maharashtra",
// "pincode": "10100",
// "degree": "vishu",
// "collage": "dypatil",
// "uni": "Pune",
// "project": "crud",
// "pass": "pass",
// "grade": "10",
// "syear": "2020",
// "eyear": "2024"