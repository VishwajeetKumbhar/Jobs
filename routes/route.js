const express = require("express");
const router = express.Router();
const users = require("../model/userSchema")
// router.get("/", (req, res)=>{
//     console.log("connect")
// })


router.post("/register", async (req, res) => {
    // console.log(req.body)
    const { fname, lname, email, mobile, address, country, state, pincode, degree, uni, collage, project, pass, grade, syear, eyear } = req.body;

    if (!fname || !lname || !email || !mobile || !address || !country || !state || !pincode || !degree || !uni || !collage || !project || !pass || !grade || !syear || !eyear) {
        res.status(404).send("Plz fill the data");
    }

    try {
        const preuser = await users.findOne({ email: email });
        console.log(preuser)

        if (preuser) {
            res.status(404).send("This user is already present")
        }
        else {
            const adduser = new users({
                fname, lname, email, mobile, address, country, state, pincode, degree, uni, collage, project, pass, grade, syear, eyear
            });

            await adduser.save();
            res.status(201).json(adduser)
            console.log(adduser)
        }

    } catch (error) {
        res.status(404).send(error)
    }
})

//get userdata

router.get("/getdata", async (req, res) => {
    try {
        const userdata = await users.find()
        res.status(201).json(userdata)
        // console.log(userdata) 
    } catch (error) {
        res.status(422).json(error)
    }
})


router.get("/getuser/:id", async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;

        const userindividual = await users.findById({ _id: id });
        console.log(userindividual);
        res.status(201).json(userindividual)

    } catch (error) {
        res.status(422).json(error);
    }
})

router.patch("/updateuser/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await users.findByIdAndUpdate(id, req.body, {
            new: true
        })
        console.log(updatedUser)
        res.status(201).json(updatedUser)
    } catch (error) {
        res.status(422).json(error)
    }
})

module.exports = router;


