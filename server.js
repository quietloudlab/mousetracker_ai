const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

// Replace the following with your actual MongoDB Atlas connection string
const mongoUri = 'mongodb+srv://quietloudlab:zHl3vSiLx8hiJzRl@cluster0.ln88wwl.mongodb.net/?retryWrites=true&w=majority';

app.use(express.static('.'));

const client = new MongoClient(mongoUri);

client.connect(err => {
    console.log('Attempting to connect to MongoDB...');
    if (err) {
        console.error('Failed to connect to MongoDB', err);
        return;
    }
    console.log('Connected to MongoDB');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

// POST endpoint for receiving mouse data
app.post('/mouse-data', async (req, res) => {
    try {
        await client.db("mouseTracker").collection("data").insertOne(req.body);
        res.status(200).send('Data received and stored');
    } catch (error) {
        console.error('Error storing data', error);
        res.status(500).send('Error storing data');
    }
});
