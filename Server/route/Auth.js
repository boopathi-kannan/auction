const router = require("express").Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");

router.post("/Register", async (req, res) => {
    try {
        const { Email, Name, Password } = req.body;

        const existingUser = await User.findOne({ Email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists!" });
        }

        const hashPassword = bcrypt.hashSync(Password, 8);
        const user = new User({ Email, Name, Password: hashPassword });

        await user.save();
        res.status(201).json({ message: "User registered successfully", user });
    } catch (err) {
        console.error("Registration error:", err.message);
        res.status(500).json({ message: "Server error!" });
    }
});

router.post("/Login",async(req,res)=>{
    try{
    const {Email,Password}=req.body;
    const existingUser=await User.findOne({Email});
    if(!existingUser)
    {
        return res.status(400).json({message:"Please register first!"});
    }
    const isMatch = bcrypt.compareSync(Password, existingUser.Password);
    if(!isMatch)
    {
        return res.status(400).json({message:"Invalid password"});
    }
    const { Password: _, ...userWithoutPassword } = existingUser.toObject();
        return res.status(200).json({
            message: "Logged in successfully",
            user: userWithoutPassword
        });
}
     catch(err)
    {
       return res.status(404).json({message:"Error"});
    }
})

module.exports = router;