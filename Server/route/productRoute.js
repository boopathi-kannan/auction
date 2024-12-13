const express = require('express');
const Product = require('../model/producModel');
const nodemailer = require("nodemailer");
const router = express.Router();
const User = require('../model/User');

router.post('/products', async (req, res) => {
  try {
    const { name, details, originalPrice, auctionPrice, date, time } = req.body;
    
    // Create a new product
    const newProduct = new Product({
      name,
      details,
      originalPrice,
      auctionPrice,
      date,
      time,
    });

    // Save the new product to the database
    await newProduct.save();

    // Fetch all users from the database
    const usersList = await User.find();

    // Send emails to all users
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "abishek3834@gmail.com", 
        pass: "uamksflhwdcgnfbx", 
      },
    });

    // Loop through all users and send an email to each
    for (let user of usersList) {
      const mailOptions = {
        from: "abishek3834@gmail.com",
        to: user.email, // Send to each user's email
        subject: `New Auction Product Alert: ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #000; border-radius: 10px; background-color: #fff;">
            <h2 style="text-align: center; color: #FFCC00;">Exciting Auction Announcement! 🛍️</h2>
            <p style="color: #000;">Hello,</p>
            <p style="color: #000;">We are thrilled to announce a new product added to our auction:</p>

            <div style="background-color: #FFCC00; padding: 15px; border-radius: 10px; text-align: center; color: #000;">
              <h3>${name}</h3>
              <p style="margin: 10px 0;">Details: ${details}</p>
              <p style="margin: 10px 0;">Original Price: <strong>${originalPrice}</strong></p>
              <p style="margin: 10px 0;">Auction Price: <strong>${auctionPrice}</strong></p>
              <p style="margin: 10px 0;">Date: ${date}</p>
              <p style="margin: 10px 0;">Time: ${time}</p>
            </div>

            <p style="color: #000; margin-top: 20px;">Don't miss your chance to bid on this amazing product! Visit our platform now to participate in the auction.</p>

            <div style="text-align: center; margin: 20px 0;">
              <a href="https://auction-website.com" style="background-color: #000; color: #FFCC00; padding: 10px 20px; text-decoration: none; font-weight: bold; border-radius: 5px;">View Auction</a>
            </div>

            <hr style="border: 0; height: 1px; background: #000;">
            <p style="text-align: center; font-size: 12px; color: #666;">&copy; 2024 Auction Community. All rights reserved.</p>
          </div>
        `,
      };

      // Send email to the current user
      await transporter.sendMail(mailOptions);
    }

    // Respond with success
    res.status(201).json({ message: 'Product added successfully and emails sent!', data: usersList });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while adding the product and sending emails.' });
  }
});

router.get('/getProduct',async(req,res)=>{
  try
  {
      const Data=await Product.find();
      res.status(200).send({message:"Intha vaichuko ! products...!",data:Data});
      
  } 
  catch (error) 
  {
      res.status(400).send({message:"Error da mapla!"});
  }
})

module.exports = router;
