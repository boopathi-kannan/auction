
const express = require('express');
const cors = require('cors');
require('dotenv').config(); 
require('./connection/conn'); 

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
}));
app.use(express.json());


app.options('*', cors());
const auth = require('./route/Auth');
const user=require('./route/UserData');
app.use('/api/v1', auth);
app.use('/api/v2',user);

app.get('/', (req, res) => {
    res.send('Hello!');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 19999;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
