// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
//
// const app = express();
// app.use(express.json());
// app.use(cors());
//
// // MongoDB Bağlantısı (Atlas veya başka bir veritabanına bağlan)
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });
//
// const tensionSchema = new mongoose.Schema({
//     bigTension: Number,
//     smallTension: Number,
// });
//
// const Tension = mongoose.model("Tension", tensionSchema);
//
// app.post("/api/data", async (req, res) => {
//     try {
//         const { bigTension, smallTension } = req.body;
//         const newTension = new Tension({ bigTension, smallTension });
//         await newTension.save();
//         res.json({ message: "Successfully Saved Tension" });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Error saving tension", error: error.message });
//     }
// });
//
// app.get("/data", async (req, res) => {
//     try {
//         const tensions = await Tension.find()
//         res.json(tensions)
//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }
// })
//
// // Vercel için Handler
// module.exports = app;

const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

// MongoDB Bağlantısı
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const tensionSchema = new mongoose.Schema({
    bigTension: Number,
    smallTension: Number,
});

const Tension = mongoose.model("Tension", tensionSchema);

// POST Endpoint (Veri Ekle)
router.post("/data", async (req, res) => {
    try {
        const { bigTension, smallTension } = req.body;
        const newTension = new Tension({ bigTension, smallTension });
        await newTension.save();
        return res.json({ message: "Successfully Saved Tension" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error saving tension", error: error.message });
    }
});

// GET Endpoint (Veri Al)
router.get("/data", async (req, res) => {
    try {
        const tensions = await Tension.find();
        return res.json(tensions);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

module.exports = router;
