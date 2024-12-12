const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

require('./connection/conn'); 

const app = express();
app.use(express.json());
app.use(cors());

app.use(bodyParser.json());
const auth = require('./route/Auth.js');
const UserData=require('./route/UserData.js');
const Product=require('./route/productRoute.js');
const Contact=require('./route/Contact.js');
app.use('/api/v1', auth);
app.use('/api/v2',UserData);
app.use('/api/v3',Product);
app.use('/api/v4',Contact);
app.get('/', (req, res) => {
    res.send('Hello!');
});



const PORT =19999;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
