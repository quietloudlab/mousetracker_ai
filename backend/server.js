require('dotenv').config();

const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

const mongoUri = process.env.MONGO_URI; // Replace with your MongoDB Atlas connection string or Variable in .env file

app.use(express.static('frontend'));
app.use(express.json());

const client = new MongoClient(mongoUri);

client.connect(err => {
    console.log('Attempting to connect to MongoDB...');
    if (err) {
        console.error('Failed to connect to MongoDB', err);
        return;
    }
    console.log('Connected to MongoDB');
});

// POST endpoint for receiving mouse data
app.post('/mouse-data', async (req, res) => {
    try {
        await client.db("mouseTracker").collection("data").insertOne(req.body);
        res.status(200).send('Data received and stored');
    } catch (error) {
        console.error('Error storing data', error);
        res.status(500). send('Error storing data');
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
