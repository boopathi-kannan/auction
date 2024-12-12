const router = require("express").Router();
const UserData=require('../model/UserData');

router.post('/addData', async (req, res) => {
    try {
      const { Name, Email, Phone, Gender } = req.body;
      const x = new UserData({ Name, Email, Phone, Gender });
      await x.save();
      res.status(200).send({ message: "Data saved successfully!" });
    } catch (error) {
      console.error("Error in /addData:", error);
      res.status(500).send({ message: "Data not saved!" });
    }
  });

  router.get("/getData", async (req, res) => {
    try {
      const { Email } = req.query;
  
      if (!Email) {
        return res.status(400).send({ message: "Email is required!" });
      }
  
      const userData = await UserData.findOne({ Email });
  
      if (!userData) {
        return res.status(404).send({ message: "No data found for the given email." });
      }
  
      res.status(200).send({ message: "Data received successfully!", data: userData });
    } catch (error) {
      console.error("Error in /getData:", error.message);
      res.status(500).send({ message: "Failed to retrieve data." });
    }
  });

module.exports=router;