require("dotenv").config();
const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // For parsing JSON data

// MongoDB Connection
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

// Example API Route: Fetch products from MongoDB
app.get("/api/products", async (req, res) => {
  try {
    await client.connect();
    const db = client.db("lenovoLegionDB"); // Replace with your DB name
    const products = await db.collection("products").find().toArray();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start server
const PORT = process.env.PORT || 3001;
``;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
