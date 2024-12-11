const express = require('express');
const Product = require('../model/producModel');
const { route } = require('./Auth');
const router = express.Router();

router.post('/products', async (req, res) => {
  try {
    const { name, details, originalPrice, auctionPrice, date, time } = req.body;
    const newProduct = new Product({
      name,
      details,
      originalPrice,
      auctionPrice,
      date,
      time,
    });

    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while adding the product.' });
  }
});

router.get('/getProduct',async(req,res)=>{
    try {
        const Data=await Product.find();
        res.status(200).send({message:"Intha vaichuko ! products...!",data:Data});
    } catch (error) {
        res.status(400).send({message:"Error da mapla!"});
    }
})

module.exports = router;
