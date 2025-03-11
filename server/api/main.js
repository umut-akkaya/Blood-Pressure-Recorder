// const express = require("express");
// require("dotenv").config();
// const app = express();
// const mongoose = require("mongoose");
// const cors = require("cors");
// const corsOptions = {
//     origin: "http://localhost:5173",
//     origin:"https://blood-pressure-recorder.vercel.app",
// }
//
// const serverless = require("serverless-http");
//
// app.use(cors(corsOptions));
// app.use(express.json());
//
// mongoose.connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });
//
// const tensionSchema = new mongoose.Schema({
//     bigTension: Number,
//     smallTension: Number,
// })
//
// const Tension = mongoose.model("Tension", tensionSchema);
//
// app.get("/data", async (req, res) => {
//     try {
//         const tensions = await Tension.find()
//         res.json(tensions)
//     } catch (error) {
//         res.status(500).json({error: "Hata"})
//     }
// })
//
// app.post("/save-tension", async (req, res) => {
//     try {
//         const {bigTension, smallTension} = req.body;
//         const newTension = new Tension({bigTension, smallTension});
//         await newTension.save();
//         res.json({message: "Successfully Saved Tension"})
//     } catch (error) {
//         res.status(500).json({error: "Hata"})
//     }
// })
//
// app.delete("/data/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//
//         // Log the received ID
//         console.log("Delete request received for ID:", id);
//
//         if (!id) {
//             return res.status(400).json({ error: "ID gerekli" });
//         }
//
//         // Check if ID is in valid MongoDB format
//         if (!mongoose.Types.ObjectId.isValid(id)) {
//             console.error("Invalid MongoDB ID format:", id);
//             return res.status(400).json({ error: "Geçersiz ID formatı" });
//         }
//
//         // Changed newTension to Tension here
//         const deletedTension = await Tension.findByIdAndDelete(id);
//
//         if (!deletedTension) {
//             console.log("No document found with ID:", id);
//             return res.status(404).json({ error: "Kayıt bulunamadı" });
//         }
//
//         console.log("Successfully deleted document with ID:", id);
//         res.json({ message: "Successfully Deleted Tension", deletedItem: deletedTension });
//     } catch (error) {
//         console.error("Server error during delete operation:", error);
//         res.status(500).json({ error: "Sunucu hatası", details: error.message });
//     }
// });
//
// app.put("/data/:id", async (req, res) => {
//     try{
//         const {id} = req.params;
//         if(!id) {
//             return res.status(400).json({ error: "ID gerekli" });
//         }
//
//         if(!mongoose.Types.ObjectId.isValid(id)) {
//             return res.status(400).json({ error: "Geçersiz ID formatı" });
//         }
//
//         const updatedTension = await Tension.findByIdAndUpdate(id, req.body, {new:true})
//
//         if(!updatedTension) {
//             return res.status(404).json({ error: "Kayıt bulunamadı" });
//         }
//         res.json({ message: "Successfully Updated Tension", updatedItem: updatedTension });
//     }
//     catch (error) {
//         console.error("Server error during delete operation:", error);
//         res.status(500).json({ error: "Sunucu hatası", details: error.message });
//     }
// })
//
// app.listen(3000,() => {
//     console.log("Server started on port 3000");
// })
// module.exports = app;
// module.exports.handler = serverless(app);

const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const corsOptions = {
    origin: ["http://localhost:5173", "https://blood-pressure-recorder.vercel.app"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
};

app.use(cors(corsOptions));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Model
const tensionSchema = new mongoose.Schema({
    bigTension: Number,
    smallTension: Number,
});
const Tension = mongoose.model("Tension", tensionSchema);

// API Routes
const router = express.Router();

router.get("/data", async (req, res) => {
    try {
        const tensions = await Tension.find();
        res.json(tensions);
    } catch (error) {
        res.status(500).json({ error: "Hata" });
    }
});

router.post("/save-tension", async (req, res) => {
    try {
        const { bigTension, smallTension } = req.body;
        const newTension = new Tension({ bigTension, smallTension });
        await newTension.save();
        res.json({ message: "Successfully Saved Tension" });
    } catch (error) {
        res.status(500).json({ error: "Hata" });
    }
});

// Delete
router.delete("/data/:id", async (req, res) => {
    try {
        const { id } = req.params;
        if (!id || !mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Geçersiz ID" });
        }
        const deletedTension = await Tension.findByIdAndDelete(id);
        if (!deletedTension) {
            return res.status(404).json({ error: "Kayıt bulunamadı" });
        }
        res.json({ message: "Successfully Deleted Tension", deletedItem: deletedTension });
    } catch (error) {
        res.status(500).json({ error: "Sunucu hatası", details: error.message });
    }
});

app.use("/api", router);

module.exports = app;

