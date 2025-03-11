import mongoose from 'mongoose';
import cors from 'cors';

// MongoDB bağlantısı
let isConnected = false;
const connectToDatabase = async () => {
    if (isConnected) return;

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isConnected = true;
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};

// Model tanımı
const tensionSchema = new mongoose.Schema({
    bigTension: Number,
    smallTension: Number,
});

// Model zaten tanımlıysa tekrar tanımlama
const Tension = mongoose.models.Tension || mongoose.model('Tension', tensionSchema);

// CORS ayarları
const allowCors = fn => async (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    return await fn(req, res);
};

const handler = async (req, res) => {
    if (req.method === 'POST') {
        try {
            await connectToDatabase();
            const { bigTension, smallTension } = req.body;

            const newTension = new Tension({
                bigTension,
                smallTension
            });

            await newTension.save();

            res.status(200).json({ message: 'Successfully Saved Tension' });
        } catch (error) {
            console.error('Error saving tension:', error);
            res.status(500).json({ error: 'Hata', details: error.message });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
};

export default allowCors(handler);